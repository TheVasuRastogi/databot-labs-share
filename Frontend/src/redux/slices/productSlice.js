import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productAPI } from '../../utils/api';

// Async thunks
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params = {}) => {
        const { data } = await productAPI.getAllProducts(params);
        return data;
    }
);

export const fetchProductDetails = createAsyncThunk(
    'products/fetchProductDetails',
    async (id) => {
        const { data } = await productAPI.getProduct(id);
        return data;
    }
);

export const createProductReview = createAsyncThunk(
    'products/createReview',
    async ({ productId, review }) => {
        const { data } = await productAPI.createReview(productId, review);
        return data;
    }
);

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    filters: {
        category: '',
        priceRange: [0, 10000],
        sortBy: 'createdAt',
        page: 1,
        limit: 12
    },
    pagination: {
        page: 1,
        totalPages: 1,
        totalProducts: 0
    }
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        resetFilters: (state) => {
            state.filters = initialState.filters;
        },
        clearProductDetails: (state) => {
            state.product = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.pagination = {
                    page: action.payload.page,
                    totalPages: action.payload.totalPages,
                    totalProducts: action.payload.totalProducts
                };
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Fetch Product Details
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload.product;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Create Review
            .addCase(createProductReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProductReview.fulfilled, (state, action) => {
                state.loading = false;
                if (state.product) {
                    state.product.reviews = action.payload.reviews;
                    state.product.ratings = action.payload.ratings;
                    state.product.numOfReviews = action.payload.numOfReviews;
                }
            })
            .addCase(createProductReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setFilters, resetFilters, clearProductDetails } = productSlice.actions;
export default productSlice.reducer; 
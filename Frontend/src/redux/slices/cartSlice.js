import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  } catch (error) {
    console.error('Error loading cart from storage:', error);
    return [];
  }
};

// Save cart to localStorage
const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

// Async thunk for syncing cart with backend
export const syncCartWithBackend = createAsyncThunk(
  'cart/syncWithBackend',
  async (_, { getState }) => {
    try {
      const { cartItems } = getState().cart;
      // Here you would typically make an API call to sync the cart
      // For now, we'll just return the current cart items
      return cartItems;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  cartItems: loadCartFromStorage(),
  loading: false,
  error: null,
  itemCount: 0,
  subtotal: 0,
  tax: 0,
  total: 0
};

const calculateCartTotals = (cartItems) => {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  
  return { itemCount, subtotal, tax, total };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.product === item.product);

      if (existingItem) {
        state.cartItems = state.cartItems.map(i =>
          i.product === existingItem.product ? item : i
        );
      } else {
        state.cartItems.push(item);
      }

      // Update totals
      const totals = calculateCartTotals(state.cartItems);
      Object.assign(state, totals);

      // Save to localStorage
      saveCartToStorage(state.cartItems);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.product === id ? { ...item, quantity } : item
      );

      // Update totals
      const totals = calculateCartTotals(state.cartItems);
      Object.assign(state, totals);

      // Save to localStorage
      saveCartToStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.product !== action.payload
      );

      // Update totals
      const totals = calculateCartTotals(state.cartItems);
      Object.assign(state, totals);

      // Save to localStorage
      saveCartToStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.itemCount = 0;
      state.subtotal = 0;
      state.tax = 0;
      state.total = 0;

      // Save to localStorage
      saveCartToStorage([]);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(syncCartWithBackend.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(syncCartWithBackend.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
        const totals = calculateCartTotals(action.payload);
        Object.assign(state, totals);
      })
      .addCase(syncCartWithBackend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer; 
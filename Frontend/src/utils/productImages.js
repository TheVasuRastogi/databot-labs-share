export const PRODUCT_IMAGES = {
  '1': '/images/goliath_alum.jpg',
  '2': '/images/goliath_mobile.jpg',
  '3': '/images/goliath_linear.jpg',
};

export function getProductImage(id) {
  return PRODUCT_IMAGES[id] || PRODUCT_IMAGES['1'];
}

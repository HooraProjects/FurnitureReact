export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};
export const totalPrice = (cart) => {
  return cart.reduce((total, product) => {
    const quantity = Number(product.quantity); // Ensure quantity is a number
    const price = Number(product.price); // Ensure price is a number
    return total + quantity * price;
  }, 0);
};

export default function CartReducer(state, action) {
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "Remove":
      // Filter out the product with the given id
      return state.filter((p) => p.id !== action.id);

    case "Increase":
      return state.map((p) =>
        p.id === action.id
          ? { ...p, quantity: p.quantity + 1 } // Create a new object for the updated product
          : p
      );

    case "Decrease":
      return state.map((p) =>
        p.id === action.id
          ? { ...p, quantity: p.quantity - 1 } // Create a new object for the updated product
          : p
      );

    default:
      return state;
  }
}

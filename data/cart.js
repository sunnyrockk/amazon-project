// export let cart = JSON.parse(localStorage.getItem('cart'));
export let cart = JSON.parse(localStorage.getItem('cart')) || [];


if (!cart.length) {
  cart = [
    { productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', quantity: 2 },
    { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', quantity: 1 }
  ];
}


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// export function addToCart(productId) {
//       let matchingItem;
//         cart.forEach((cartitem)=>{
//             if(cartitem.productId === productId){
//               matchingItem = cartitem;
//             }
//              });
//             if(matchingItem){
//                 matchingItem.quantity += 1;
//             }else{
//                cart.push ({
//             productId: productId,
//             quantity: 1 
//         });
//          } 
//          saveToStorage();
//  }
export function addToCart(productId, quantity = 1) {
  const matchingItem = cart.find(item => item.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  saveToStorage(); // <-- save after updating
}
export function removeFromCart(productId) {
  const index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    saveToStorage(); // <-- save after removing
  }
}
//  export function removeFromCart(productId){
//     const newCart = [];

//   cart.forEach((cartItem)=>{
//     if(cartItem.productId !== productId){ 
//         newCart.push(cartItem);
//     }
//     });

//      cart = newCart;
//      saveToStorage();
//  }

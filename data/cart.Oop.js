function Cart(localStorageKey){
const cart = {
     cartItems:undefined,
    loadFromStorage(){
    cart.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    if (!cart.cartItems){
    cart.cartItems = [
        { productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        DeliveryOptionId : '1'
        },
        { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', 
        quantity: 1 ,
        DeliveryOptionId : '2'
        }
  ];
}

},
 saveToStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},
 addToCart(productId) {
      let matchingItem;
        this.cartItems.forEach((cartitem)=>{
            if(cartitem.productId === productId){
              matchingItem = cartitem;
            }
             });
            if(matchingItem){
                matchingItem.quantity += 1;
            }else{
               this.cartItems.push ({
            productId: productId,
            quantity: 1 ,
            DeliveryOptionId : '1'
        });
         } 
         this.saveToStorage();
 },
 removeFromCart(productId){
    const newCart = [];

  this.cartItems.forEach((cartItem)=>{
    if(cartItem.productId !== productId){ 
        newCart.push(cartItem);
    }
    });

    this.cartItems = newCart;
     this.saveToStorage();
 },
 
 updateDeliveryOption(productId, deliveryOptionId){
let matchingItem;
        this.cartItems.forEach((cartitem)=>{
            if(cartitem.productId === productId){
              matchingItem = cartitem;
            }
             });
             matchingItem.deliveryOptionId = deliveryOptionId; 

             this.saveToStorage();
    }
};

return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-buisness');


cart.loadFromStorage();

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCartcart);

export const cart = [];

export function addToCart(productId) {
      let matchingItem;
        cart.forEach((cartitem)=>{
            if(item.productId === productId){
              matchingItem = cartitem;
            }
             });
            if(matchingItem){
                matchingItem.quantity += 1;
            }else{
               cart.push ({
            productId: productId,
            quantity: 1 
        });
         } 
 }

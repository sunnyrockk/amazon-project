const DeliveryOption = [{
    id: '1',
    DeliveryDays :'7',
    priceCents : 0
},{
    id: '2',
    DeliveryDays :'3',
    priceCents : 499
},{
    id: '1',
    DeliveryDays :'7',
    priceCents : 999
}]; 

export function getDeliveryOption (deliveryOptionId){
let deliveryOption;
    
    deliveryOption.forEach((option) =>{
        if (option.id === deliveryOptionId) {
            deliveryOption = option; 
        }
 });
 return deliveryOption || deliveryOption[0];
}
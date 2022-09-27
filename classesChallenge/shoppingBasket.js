let currentBasket = [];

class ShoppingBasket{

    addItem(candy){
        currentBasket.push(candy);
        return currentBasket;
    }

    getTotalPrice(){
        let initialPrice = 0
        currentBasket.map((basketItem) => {
            initialPrice += basketItem.price;
        })
        return initialPrice;
    }
}

module.exports = ShoppingBasket;

const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 2.0,
}

const applyCoupon = c => d => i => (i.category == c) ? {"price": i.price - i.price * d} : {"price": i.price};

console.log(applyCoupon("food")(0.1)(item).price === 1.8);
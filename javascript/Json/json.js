let product={
    name: 'TShirt',
    price: 789,
    rating: {
        stars: 4.5,
        noOfReviews: 453,
    },
};
console.log(typeof product);
console.log(product);
let str=JSON.stringify(product);
console.log(str);
console.log(typeof str);

let newProd=JSON.parse(str);

console.log(typeof newProd);

console.log(newProd);
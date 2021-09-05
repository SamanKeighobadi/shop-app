
const useTotalProduct = (totalProduct) => {
    const total = totalProduct.reduce((acc,curr) => {
        return acc + curr.price
    },0)
    console.log(total)
    return {total}
};

export default useTotalProduct;
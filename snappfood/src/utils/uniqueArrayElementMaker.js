export const uniqueArrayElementMaker = (singleRes)=> {
    const resCategories = singleRes.products.map(product => (
        product.category 
    ))
    const uniqueResCategories = [...new Set(resCategories)]
    return uniqueResCategories    
}



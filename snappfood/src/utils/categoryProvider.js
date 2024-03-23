export const categoryProvider = (RESTAURANTS,categoryTitle)=> {
    return RESTAURANTS.filter(restaurant => restaurant.category === categoryTitle)
}
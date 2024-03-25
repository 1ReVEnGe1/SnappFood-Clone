export const findRestaurantById = (RESTAURANTS , restaurantId)=> {
    return RESTAURANTS.filter( restaurant => restaurant.id === restaurantId )[0]
}
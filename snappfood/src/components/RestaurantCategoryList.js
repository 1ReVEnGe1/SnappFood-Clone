import Link from "next/link"

const RestaurantCategoryList = ({category})=> {
    return (
        <Link href={`#${category}`} key={category} >{category}</Link>
    )
}
export default RestaurantCategoryList
import { categoryProvider } from "@/utils/categoryProvider"
import { RESTAURANTS } from "@/data/database"
import RestaurantCard from "@/components/RestaurantCard"
import Header from "@/components/Header"
import HeaderTop from "@/components/HeaderTop"

const Category = ({ params }) => {
    const categoryTitle = params.category
    const RESTAURANTS_LIST = categoryProvider(RESTAURANTS, categoryTitle)



    return (
        <>
            <HeaderTop />
            <Header />
            <main style={{ width: '100%' }}>
                <div style={{ width: '100%' }}>
                    filter
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                    <div style={{ width: '20%' }}> filter rast</div>
                    <div style={{ width: '80%', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        {
                            RESTAURANTS_LIST.map(restaurant => (
                                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                            ))
                        }
                    </div>
                </div>

            </main>
        </>
    )
}

export default Category
import { RESTAURANTS } from "@/data/database"
import ProductList from "@/components/ProductList"
import CartPage from "@/components/CartPage"

const restaurant = ({params})=> {
    const restaurantId = Number(params.restaurantId) 
    const singleRes = RESTAURANTS.filter( restaurant => restaurant.id === restaurantId )[0]
    const subtitle = singleRes.products.find( product => product.category === 'پیتزا')
    const subtitle2 = singleRes.products.find( product => product.category === 'برگر')
    const subtitlePizzaDetails = singleRes.products.filter( product => product.category === 'پیتزا')
    const subtitleBurgurDetails = singleRes.products.filter( product => product.category === 'برگر')

    return(
        <div style={{backgroundColor:'#F9FAFB'}}>
            <div>{params.category}/{singleRes.title}</div>

            <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>

                {/* rightBar */}
                <div style={{backgroundColor:'lightcyan',width:'28%'}}>
                    <h2>{singleRes.title}</h2>
                </div>

                {/* middle */}
                <div style={{width:'44%',borderRadius:8}}>
                    <div style={{padding:10}}>
                        <p style={{textAlign:'center',fontSize:'13px'}}>
                            {subtitle.category}
                        </p>
                        <hr />
                    </div>
                    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                        {subtitlePizzaDetails.map(item => <ProductList key={item.id} item={item} />)}
                    </div>
                    {/* ------------------------------------ */}

                    <div style={{padding:10}}>
                        <p style={{textAlign:'center',fontSize:'13px'}}>
                            {subtitle2.category}
                        </p>
                        <hr />
                    </div>
                    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                        {subtitleBurgurDetails.map(item => <ProductList key={item.id} item={item} />)}    
                    </div>
                </div>

                {/* leftBar */}
                <div style={{backgroundColor:'lightcyan',width:'28%'}}>
                    <CartPage />
                </div>
            </div>
        </div>
    )
}

export default restaurant
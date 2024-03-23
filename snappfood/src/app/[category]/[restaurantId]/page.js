import { RESTAURANTS } from "@/data/database"
import Image from "next/image"
import { iranSans } from "@/app/layout"
import ProductList from "@/components/ProductList"

const restaurant = ({params})=> {
    const restaurantId = Number(params.restaurantId) 
    const singleRes = RESTAURANTS.filter( restaurant => restaurant.id === restaurantId )[0]
    const subtitle = singleRes.products.find( product => product.category === 'پیتزا')
    const subtitleDetails = singleRes.products.filter( product => product.category === 'پیتزا')
    return(
        <div>
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
                            {
                                subtitle.category
                            }
                        </p>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                        {
                           subtitleDetails.map(item => (
                            <ProductList key={item.id} item={item} />
                            
                           ))
                        }
                        
                    </div>
                </div>

                {/* leftBar */}
                <div style={{backgroundColor:'lightcyan',width:'28%'}}>
                    samte chap
                </div>
            </div>
        </div>
    )
}

export default restaurant
import { getIranCities } from "../../requests/getIranCities"

const FooterCities = async () => {
    const cities = await getIranCities();
    return (
        <>
            <div style={{display:'flex', flexWrap:'wrap',width:'100%' , columnGap:'40px',rowGap:'20px' , flexDirection:'column' , height:'300px'}}>
                {
                    cities?.map(city => (
                        <div key={city.name} >
                            <p style={{fontSize:'11px',marginBottom:'15px',color:'rgb(166, 170, 173)'}}>
                                {city.name}
                            </p>
                            <p style={{fontSize:'11px' , color:'rgb(166, 170, 173)'}}>
                                {city.center}
                            </p>
                        </div>

                    ))
                }
            </div>
        </>
    )
}
export default FooterCities
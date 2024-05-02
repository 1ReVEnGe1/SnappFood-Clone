export const getIranCities = async ()=> {
    const res = await fetch('https://iran-locations-api.ir/api/v1/fa/states' , {cache:'no-store'});
    
    if(!res.ok){
        throw new Error('You Fucked Up')
    }

    return res.json()
}
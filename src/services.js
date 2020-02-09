const apiUriConstant = {
    FILTER_URL :"https://api.punkapi.com/v2/beers?beer_name=",
    BEER_URL: "https://api.punkapi.com/v2/beers"
}

const getServiceResponse = (url, payload)=>{

    return fetch(url)
    .then(res=> res)
    .then(res=>res.json());  

}

export const getBeerService = payload =>{
    
    const serviceUri = (payload.beer_name && `${apiUriConstant.FILTER_URL}${payload.beer_name}`) || 
                        apiUriConstant.BEER_URL;
    return getServiceResponse(serviceUri, payload);

}
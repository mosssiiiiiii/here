const apiRoute = 'https://revgeocode.search.hereapi.com';
let api = {
    address: (lat,long,token) => apiRoute + `/v1/revgeocode?at=${lat}%2C${long}&lang=en-US&apiKey=${token}`,
}

export {api}

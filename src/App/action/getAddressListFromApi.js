const axios = require("axios");
const {api} = require("../../setup/api");

const getAddressListFromApi = function (lat, long) {

    return new Promise((resolve, reject) => {
        axios({
            url: api.address(lat, long, process.env.TOKEN)
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                console.log('err', err)
                reject(err);
            })

    })
}

export {getAddressListFromApi}

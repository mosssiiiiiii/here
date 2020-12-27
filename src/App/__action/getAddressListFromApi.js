import axios from "axios";
import {api} from "../../setup/api";
import {token} from "../../setup/token";

export const getAddressListFromApi = function(lat,long,name) {
    return new Promise((resolve,reject) =>{
        axios({
            url: api.address(lat,long, token)
        })
            .then( response => {
                resolve(response.data.items[0]);
            })
            .catch(function (err) {
                console.log(err.response)
                reject();
            })
    })
}

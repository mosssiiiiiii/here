import {getAddressListFromApi} from "./getAddressListFromApi";

export const addNameToAddress = function(data,setData,setUpload){
    let array = [];
    const actions = data.map(async item =>{
        const newItem = await getAddressListFromApi(item.Latitude,item.Longitude);
        newItem.name = item.Name;
        array.push(newItem);
    })

    Promise.all(actions).then(()=> {
        setData(array);
        setUpload(false);
    });
}

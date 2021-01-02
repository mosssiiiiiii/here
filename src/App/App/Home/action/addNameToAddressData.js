import {getAddressListFromApi} from "./getAddressListFromApi";

export const addNameToAddressData = (data) => {
    let array = [];
    data = JSON.parse(data);
    const actions = data.map(async item => {
        let newItem = await getAddressListFromApi(item.Latitude, item.Longitude);
        newItem = newItem.items[0];
        newItem.name = item.Name;
        array.push(newItem);
    })

    return {array, actions};
}

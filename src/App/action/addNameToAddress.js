import {getAddressListFromApi} from "./getAddressListFromApi";

export const addNameToAddress = function (data, setData, setLoading) {
    let array = [];
    setLoading(true)
    const actions = data.map(async item => {
        let newItem = await getAddressListFromApi(item.Latitude, item.Longitude);
        newItem = newItem.items[0];
        newItem.name = item.Name;
        array.push(newItem);
    })

    Promise.all(actions)
        .then(() => {
            setData(array);
        })
        .catch(() => {
            setData([]);
        })
        .finally(() => {
            setLoading(false);
        })
}

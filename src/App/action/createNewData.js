import {getAddressListFromApi} from "./getAddressListFromApi";
import {toast} from "react-toastify";
import {addressLoading} from "../../setup/loading";
import {validateJson} from "./validateJson";

export const createNewData = function (data, setData, setLoading) {
    setLoading(true)
    if (!validateJson(data)) {
        setLoading(false);
        return null;
    }

    setData(addressLoading);
    const addName = addNameToAddressData(data);
    const array = addName[0];
    const actions = addName[1];
    Promise.all(actions)
        .then(() => {
            toast.success(`Your data has been uploaded successfully`)
            setData(array);
        })
        .catch((err) => {
            if (err.status === 401) {
                toast.error(`Your token is expired or invalid `)
                setData([])
            }
        })
        .finally(() => {
            setLoading(false);
        })
}


export const addNameToAddressData = (data) => {
    let array = [];
    data = JSON.parse(data);
    const actions = data.map(async item => {
        console.log('latitude', item.Latitude);
        let newItem = await getAddressListFromApi(item.Latitude, item.Longitude);
        newItem = newItem.items[0];
        newItem.name = item.Name;
        array.push(newItem);
    })

    return [array, actions];
}

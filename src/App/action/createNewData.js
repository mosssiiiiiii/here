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
    const {array,actions} = addNameToAddressData(data);
    Promise.all(actions)
        .then(() => {
            toast.success(`Your data has been uploaded successfully`)
            setData(array);
        })
        .catch((err) => {
            if(err === undefined){
                toast.error(`Something is wrong`)
                setData([])
            }
            if (err.status === 401) {
                toast.error(`Your token is expired or invalid `)
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
        let newItem = await getAddressListFromApi(item.Latitude, item.Longitude);
        newItem = newItem.items[0];
        newItem.name = item.Name;
        array.push(newItem);
    })

    return {array, actions};
}

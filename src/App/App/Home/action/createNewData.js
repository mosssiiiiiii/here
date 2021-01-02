import {getAddressListFromApi} from "./getAddressListFromApi";
import {toast} from "react-toastify";
import {addressLoading} from "../../../../setup/loading";
import {validateJson} from "./validateJson";
import {addNameToAddressData} from "./addNameToAddressData";

export const createNewData = function (data, setData, setLoading) {
    setLoading(true)
    setData(addressLoading);
    if (!validateJson(data)) {
        setLoading(false);
        setData(null);
        return null;
    }
    const {array,actions} = addNameToAddressData(data);
    Promise.all(actions)
        .then(() => {
            toast.success(`Your data has been uploaded successfully`)
            setData(array);
        })
        .catch((err) => {
            setData(null)
            if(err === undefined){
                toast.error(`Something is wrong`)
            }
            if (err.status === 401) {
                toast.error(`Your token is expired or invalid `)
            }
        })
        .finally(() => {
            setLoading(false);
        })
}




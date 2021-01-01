import {toast} from "react-toastify";

export const validateJson = (data) => {
    if(!isValidJson(data)){
        toast.error(`Your input JSON is not valid `)
        return false;
    }
    data = JSON.parse(data);
    if (!Array.isArray(JSON.parse(data))) {
        toast.error(`Your input JSON is not valid`)
        return false;
    }
    if (data.length === 0) {
        toast.error(`your JSON file is empty`)
        return false
    }
    if (!data[0].hasOwnProperty('Name')) {
        toast.error(`Your JSON file must have these properties on each object : Name , Latitude and Longitude `)
        return false;
    }

    if (!data[0].hasOwnProperty('Latitude')) {
        toast.error(`Your JSON file must have these properties on each object : Name , Latitude and Longitude `)
        return false;
    }

    if (!data[0].hasOwnProperty('Longitude')) {
        toast.error(`Your JSON file must have these properties on each object : Name , Latitude and Longitude `)
        return false;
    }

    return true;
}

function isValidJson(json) {
    try {
        JSON.parse(json);
        return true;
    } catch (e) {
        return false;
    }
}

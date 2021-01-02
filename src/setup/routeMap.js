import {route} from "./route";
import Home from "../App/App/Home/Home";
import Map from "../App/App/Map/Map";

export const routeMap = [
    {
        path: route.home,
        component: Home,
        exact: true
    },
    {
        path: route.map(':lat', ':long',':name'),
        component: Map
    },
]

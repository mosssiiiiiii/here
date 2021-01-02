import React from 'react';
import {Switch , Route } from 'react-router-dom';
import {routeMap} from "../../setup/routeMap";
import Header from "../Component/Header/Header";
function App() {

    if (typeof window !== 'undefined') {
        console.log(window)
    }

    return (
        <>
            <Header/>
            <Switch>
                {
                    routeMap.map((route, index) => <Route key={index} {...route} />)
                }
            </Switch>

        </>
    );
}


export default App;

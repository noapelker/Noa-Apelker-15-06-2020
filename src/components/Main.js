import React from 'react';
import Home from "./Home";
import Favourite from "./Favourite";
import Menu from "./Menu";
import "../styles/menu.css"
import {BrowserRouter, Route, Switch} from "react-router-dom";

const dataURL = "https://dataservice.accuweather.com";
export const URL = "http://localhost:3000";
export const getData = (endpoint) =>

    fetch(dataURL + '/' + endpoint
        , {
            method: "GET"
        }).then(data => data.json()).then(data => {
        return data
    }).catch(err =>     console.log(endpoint)
    );
const Main = _ => {
    return (
        <div className={'main'}>
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/favourite" component={Favourite}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default Main;
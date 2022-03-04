import React from "react";
import ReactDOM from "react-dom";
import {Provider as ReduxProvider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import {store, history} from "./redux/store";
import LoadingScreen from "./components/LoadingScreen";
import LockScreen from "./components/LockScreen";
import App from "./components/App";

ReactDOM.render(
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <LoadingScreen/>
            <LockScreen/>
            <App/>
        </ConnectedRouter>
    </ReduxProvider>,
    document.getElementById('root')
);

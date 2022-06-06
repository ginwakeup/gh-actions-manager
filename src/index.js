import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './resources/styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import {Provider} from 'react-redux';

import App from "./components/App";
import {initOcto} from "./lib/gh/utils";
import configureAppStore from "./redux/store";

const container = document.getElementById('root');
const root = createRoot(container);

const preloadedState = {
    octo: {
        value: initOcto()
    }
}

root.render(
    <React.StrictMode>
        <Provider store={configureAppStore(preloadedState)}>
            <App />
        </Provider>
    </React.StrictMode>
);

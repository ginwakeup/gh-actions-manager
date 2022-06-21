import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './resources/styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import {Provider} from 'react-redux';

import App from "./components/routes/App";
import {initOcto} from "./lib/gh/utils";
import configureAppStore from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ActionsEdit from "./components/routes/ActionsEdit";

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="repositories" element={<App />} />
                    <Route path="actions_edit" element={<ActionsEdit />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Personal from './components/Personal';
import Hospital from './components/Hospital';
import Disease from './components/Disease';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Startuppage from './pages/StartUpPage/startuppage';
import { Prescription } from './components/Hospital'; // Corrected import statement

ReactDOM.render( <
    React.StrictMode >
    <
    Router >
    <
    Routes >
    <
    Route path = "/"
    element = { < App / > }
    /> <
    Route path = "/personal"
    element = { < Personal / > }
    /> <
    Route path = "/hospital"
    element = { < Hospital / > }
    /> <
    Route path = "/disease"
    element = { < Disease / > }
    /> <
    Route path = "/chatbot"
    element = { < Chatbot / > }
    /> <
    Route path = "/contact"
    element = { < Contact / > }
    /> <
    Route path = "/login"
    element = { < Startuppage / > }
    /> <
    Route path = "/register"
    element = { < Startuppage / > }
    /> <
    Route path = "/prescription"
    element = { < Prescription / > }
    /> {/ * Corrected component name * /} <
    /Routes> <
    /Router> <
    /React.StrictMode>,
    document.getElementById('root')
);
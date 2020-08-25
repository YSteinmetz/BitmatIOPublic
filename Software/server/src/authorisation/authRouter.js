const { Router } = require("express");
import app from '../server';

module.exports = (Router, app, authRoutesMethods)=>{
    Router.post('/registerUser', authRoutesMethods.registerUser);
    Router.post('/login’, expressApp.oauth.grant()');
    return Router
}
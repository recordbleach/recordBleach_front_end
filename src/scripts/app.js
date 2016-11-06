import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import QualifyView from './views/QualifyView'
import LoginView from './views/LoginView'

const app = function() {

const AppRouter = Backbone.Router.extend({
        routes: {
            'qualifyForm': '_handleQualifyForm',
            'login': '_handleLogin',
            'dataInput': '_handleDataInput',
            '*default': '_handleDefault'
        },

        _handleQualifyForm: function() {
            ReactDOM.render(<QualifyView />, document.querySelector('.container'))
        },

        _handleLogin: function() {
            ReactDOM.render(<LoginView />, document.querySelector('.container'))
        },

        _handleDataInput: function() {

        },

        _handleDefault: function() {
            location.hash = 'qualifyForm'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    const appRouter = new AppRouter()
}

app()
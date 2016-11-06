import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const app = function() {

const AppRouter = Backbone.Router.extend({
        routes: {
            'qualifyForm': '_handleQualifyForm',
            'login': '_handleLogin',
            'dataInput': '_handleDataInput',
            '*default': '_handleDefault'
        },

        _handleQualifyForm: function() {

        },

        _handleLogin: function() {

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
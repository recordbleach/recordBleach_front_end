import React from 'react'
import ReactDOM from 'react-dom'

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

        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    const appRouter = new AppRouter()
}

app()
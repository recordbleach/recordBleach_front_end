import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import QualifyView from './views/QualifyView'
import LoginView from './views/LoginView'
import DataInputView from './views/DataView'
import PrivacyPolicyView from './views/PrivacyPolicyView'
import GlossaryView from './views/GlossaryView'
import DisclaimerView from './views/DisclaimerView'
import HomeView from './views/homeView'


const app = function() {

    const AppRouter = Backbone.Router.extend({
        routes: {
            'home': '_handleHomeView',
            'qualifyForm': '_handleQualifyForm',
            'login': '_handleLogin',
            'dataInput': '_handleDataInput',
            'privacyPolicy': '_handlePrivacyPolicy',
            'glossary': '_handleGlossary',
            'disclaimer': '_handleDisclaimer',
            '*default': '_handleDefault'
        },

        _handleHomeView: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))
        },

        _handleQualifyForm: function() {
            ReactDOM.render(<QualifyView />, document.querySelector('.container'))
        },

        _handleLogin: function() {
            ReactDOM.render(<LoginView />, document.querySelector('.container'))
        },

        _handleDataInput: function() {

            ReactDOM.render(<DataInputView />, document.querySelector('.container'))
        },

        _handlePrivacyPolicy: function(){
            ReactDOM.render(<PrivacyPolicyView />, document.querySelector('.container'))
        },

        _handleGlossary: function(){
            ReactDOM.render(<GlossaryView />, document.querySelector('.container'))
        },

        _handleDisclaimer: function(){
            ReactDOM.render(<DisclaimerView />, document.querySelector('.container'))
        },

        _handleDefault: function() {
            location.hash = 'home'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    const appRouter = new AppRouter()
}

app()
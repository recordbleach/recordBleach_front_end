import STORE from './store'
import {User, PetitionModel} from './models/models'
import Backbone from 'backbone'
import $ from 'jquery'

Backbone.$.ajaxSetup({
    headers: {
        'Authorization': 'Bearer ' + localStorage.token
    }
})

const ACTIONS = {

    _registerUser: function(newUserObj) {
        var userObj =  {
            user: newUserObj
        }
        User.register(userObj).then(() => this._getUserToken(newUserObj),
            (error) => {
                console.log(error)
        })
    },

    _loginUser: function(userObj) {
        console.log(userObj)
        User.login(userObj).then(() => this._getUserToken(userObj),
            (error) => {
                console.log(error)
            })
    },

    _getUserToken:function(userObj) {
        // console.log(userObj)
        User.getToken(userObj).then(
            (response) => {
                location.hash = 'dataInput'
            },
            (error) => {
                console.log(error)
            })
    },

    _logoutUser: function() {
        User.logout().then( () => {
            this._handleLocalStorage()
        })
    },

    _destroyUser: function() {
        User.destroyInfo().then( () => {
            this._logoutUser()
        })
    },

    _submitPetition: function(newPetitionObj) {
        // console.log(newPetitionObj)
        var petitionObj = {
            petition: newPetitionObj
        }
        var petition = new PetitionModel(petitionObj)

        petition.save([], {dataType: 'html'}).then(
            (response) => {
                console.log('Success! Thank you for your submission')
            },
            (error) => {
                console.log(error)
        })
    },

    // _fetchPetition: function(petitionQuery) {
    //     STORE.data.petitionModel.fetch({
    //         data: petition
    //     })
    // },

    _handleLocalStorage: function() {
        localStorage.removeItem('token')
        localStorage.removeItem('currentUser')
    }
}

export default ACTIONS
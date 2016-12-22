import Backbone from 'backbone'
import $ from 'jquery'

const UserAuthModel = Backbone.Model.extend({
    url: 'http://localhost:4567/',
    idAttribute: 'id'
})

UserAuthModel.register = function(newUserData) {

    return $.ajax({
        method: 'POST',
        type: 'json',
        url: 'http://localhost:4567/api/registrations',
        data: newUserData
    }).then((newUser) => {
        console.log(newUser)
        localStorage['currentUser'] = newUser.user.id
    })
},

UserAuthModel.login = function(userData) {
    console.log(userData)

    return $.ajax({
        method: 'POST',
        url: 'http://localhost:4567/api/sign_in',
        data: userData
    }).then((response) => {
        console.log(response)
    },
    (error) => {
        console.log(error)
    })
},

UserAuthModel.getToken = function(userData) {

    return $.ajax({
        method: 'POST',
        url: 'http://localhost:4567/oauth/token',
        data: $.extend(userData, {
            grant_type: 'password'
        })
    }).then((tokenData) => {
        console.log(tokenData)
        localStorage['token'] = tokenData.access_token
        location.hash = 'dataInput'
    })
},

UserAuthModel.logout = function() {
    return $.ajax({
        method: 'GET',
        url: 'http://localhost:4567/api/sign_out'
    }).then((response) => {
        console.log(response)
        location.hash = 'home'
    },
    (error) => {
        console.log(error)
    })
},

UserAuthModel.destroyInfo = function() {
    return $.ajax({
        method: 'DELETE',
        url: 'http://localhost:4567/api/users/' + localStorage.currentUser
    }).then((response) => {
        console.log(response)
        location.hash = 'home'
    },
    (error) => {
        console.log(error)
    })
}

export const User = UserAuthModel.extend({

})


export const PetitionModel = Backbone.Model.extend({
    url: 'http://localhost:4567/api/petitions',
    idAttribute: 'id'
})
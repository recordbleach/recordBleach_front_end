import Backbone from 'backbone'
import $ from 'jquery'

const UserAuthModel = Backbone.Model.extend({
    urlRoot: '/api/users',
    idAttribute: 'id'
})

UserAuthModel.register = function(newUserData) {
    if(typeof newUserData !== 'object') {  throw new Error("User.register needs to be of type object with email & password properties") }
    if(!newUserData.email || !newUserData.password) {  throw new Error("object needs email + password properties") }

    return $.ajax({
        method: 'POST',
        type: 'json',
        url: 'https://tx-recordbleach-api.herokuapp.com/api/registrations',
        data: newUserData
    })
}

UserAuthModel.login = function(email, password) {
    if(!email || !password || email === '' || password === '') {
        throw new Error("User.login(«email», «password») method needs strings for email, password arguments")
    }

    if(typeof email !== 'string' || typeof password !== 'string' ) {
        throw new Error("User.login(«email», «password») email + password arguments should both be strings")
    }

    return $.ajax({ //
        method: 'POST',
        type: 'json',
        url: '/oauth/token',
        data: {
            email: email,
            password: password,
            grant_type: 'password'
        }
    }).then((userData) => {
        localStorage[app_name + '_user'] = JSON.stringify(userData)
        return userData
    },(err)=> {
        throw new Error(err.responseText)
    })
}

UserAuthModel.logout = function() {
    return $.getJSON('/oauth/token').then(()=>{
        localStorage[app_name + '_user'] = null
    })
}

UserAuthModel.getCurrentUser = function() {
    return localStorage[app_name + '_user'] ? JSON.parse(localStorage[app_name + '_user']) : null
}

export const User = UserAuthModel.extend({

})

const UserModel = Backbone.Model.extend({
    url: '',
    idAttribute: ''
})

const PetitionModel = Backbone.Model.extend({
    url: '',
    idAttribute: ''
})
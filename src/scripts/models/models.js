import Backbone from 'backbone'
import $ from 'jquery'

const UserAuthModel = Backbone.Model.extend({
    url: 'https://tx-recordbleach-api.herokuapp.com/',
    idAttribute: 'id'
})

UserAuthModel.register = function(newUserData) {
    if(typeof newUserData !== 'object') {
        throw new Error("User.register needs to be of type object with email & password properties")
    }
    else {
        console.log('register success')
    }

    return $.ajax({
        method: 'POST',
        type: 'json',
        url: 'https://tx-recordbleach-api.herokuapp.com/api/registrations',
        data: newUserData
    })
}

UserAuthModel.login = function(newUserData) {
    if(typeof newUserData !== 'object') {
        throw new Error("User.register needs to be of type object with email & password properties")
    }
    else {
        console.log('getToken success')
        console.log(newUserData)
    }
    return $.ajax({
        method: 'POST',
        url: 'https://tx-recordbleach-api.herokuapp.com/oauth/token',
        data: $.extend(newUserData, {
            grant_type: 'password'
        })
    }).then((tokenData) => {
        console.log(tokenData)
        localStorage['token'] = tokenData.access_token
        location.hash = 'dataInput'
    })
}

export const User = UserAuthModel.extend({

})


export const PetitionModel = Backbone.Model.extend({
    url: 'https://tx-recordbleach-api.herokuapp.com/api/petitions',
    idAttribute: 'id'
})
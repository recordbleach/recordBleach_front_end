import Backbone from 'backbone'
import $ from 'jquery'

const UserAuthModel = Backbone.Model.extend({
    url: 'https://tx-recordbleach-api.herokuapp.com/',
    idAttribute: 'id'
})

UserAuthModel.register = function(newUserData) {

    return $.ajax({
        method: 'POST',
        type: 'json',
        url: 'https://tx-recordbleach-api.herokuapp.com/api/registrations',
        data: newUserData
    }).then((newUser) => {

        localStorage['currentUser'] = newUser.user.id
    })
}

UserAuthModel.login = function(userData) {

    return $.ajax({
        method: 'POST',
        url: 'https://tx-recordbleach-api.herokuapp.com/oauth/token',
        data: $.extend(userData, {
            grant_type: 'password'
        })
    }).then((tokenData) => {
        localStorage['token'] = tokenData.access_token
        location.hash = 'dataInput'
    })
},

UserAuthModel.logout = function() {
    console.log(localStorage.token)
    return $.ajax({
        method: 'GET',
        url: 'https://tx-recordbleach-api.herokuapp.com/api/sign_out'
    }).then((response) => {
        console.log(response)
        location.hash = 'home'
    },
    (error) => {
        console.log(error)
    })
}

// UserAuthModel.userDestroy = function() {
//     console.log(localStorage.token)
//     return $.ajax({
//         method: 'DELETE',
//         url: 'https://tx-recordbleach-api.herokuapp.com/api/me',
//         type: 'jsonp'
//         headers: {
//             'Authorization': 'Bearer ' + localStorage.token,
//             'Access-Control-Allow-Origin': '*'
//         }
//     }).then((response) => {
//         console.log(response)
//         location.hash = 'home'
//     },
//     (error) => {
//         console.log(error)
//     })
// }

export const User = UserAuthModel.extend({

})


export const PetitionModel = Backbone.Model.extend({
    url: 'https://tx-recordbleach-api.herokuapp.com/api/petitions',
    idAttribute: 'id'
})
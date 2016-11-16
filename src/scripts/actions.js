import STORE from './store'
import {User, PetitionModel} from './models/models'
import Backbone from 'backbone'

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
        console.log(User.register(userObj))
        console.log(User.getToken(newUserObj))

    },

    _submitPetition: function(newPetitionObj) {

        console.log(newPetitionObj)
        var petitionObj = {
            petition: newPetitionObj
        }
        var petition = new PetitionModel(petitionObj)

        console.log(petition)
        console.log(localStorage.token)
        petition.save().then(
            (response) => {
                console.log(response)
                alert('Thank you for your submission')
            },
            (error) => {
                console.log(error)
        })
    }
}

export default ACTIONS
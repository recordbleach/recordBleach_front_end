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
        console.log(User.register(userObj))
        console.log(User.getToken(newUserObj))

    },

    _submitPetition: function(newPetitionObj) {
        var petitionObj = {
            petition: newPetitionObj
        }
        var petition = new PetitionModel(petitionObj)

        petition.save([], {dataType: 'html'}).then(
            (response) => {
                console.log(response)
                alert('Thank you for your submission')
            },
            (error) => {
                console.log(error)
        })
    },

    _getPetitions: function() {

        return $.ajax({
            method: 'GET',
            dataType: 'application/pdf',
            //right now this is getting a specific petition as a test, will figure out the rest later
            url: 'https://tx-recordbleach-api.herokuapp.com/api/petitions/35.pdf'
        }).then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log(error)
        })
    }
}

export default ACTIONS
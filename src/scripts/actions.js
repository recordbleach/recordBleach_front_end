import STORE from './store'
import {User, PetitionModel} from './models/models'

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
        petition.set({
            header: {
                key: 'Authorization',
                value: 'Bearer' + ' ' + localStorage.token
            }
        })
        console.log(petition)
        console.log(localStorage.token)
        petition.save()
    }
}

export default ACTIONS
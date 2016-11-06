import STORE from './store'
import {User, PetitionModel} from './models/models'

const ACTIONS = {

    _registerUser: function(newUserObj) {
        var userObj =  {
            user: newUserObj
        }
        User.register(userObj)
    },

    _submitPetition: function(newPetitionObj) {
        var petitionObj = {
            petition: newPetitionObj
        }

        var petition = new PetitionModel(petitionObj)

        petition.save()
    }
}

export default ACTIONS
import Backbone from 'backbone'
import {PetitionModel} from './models/models'
import _ from 'underscore'

const STORE = _.extend(Backbone.Events, {

    data: {
        petitionModel: new PetitionModel()
    }
})

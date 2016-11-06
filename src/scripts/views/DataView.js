import React from 'react'
import Header from './header'

const DataInputView = React.createClass({
    render: function() {
        return(
            <div className = 'dataInputView'>
                <Header/>
                <Petition />
            </div>
        )
    }
})


const Petition = React.createClass({
    render: function() {
        return(
            <div className = 'petition'>
                <form>
                    {/* PERSONAL PROFILE*/}
                    <div className = 'profile'>
                        <p>What is your full legal name?</p><input type ='text'/>
                        <p>What is your date of birth?</p><input type = 'text'/>

                        <p>What is your race?</p>
                            <input type = 'radio' name = 'race' value = 'HoL' />Hispanic or Latino <br />
                            <input type = 'radio' name = 'race' value = 'AIoAN' />American Indian or Alaska Native <br />
                            <input type = 'radio' name = 'race' value = 'Asian' />Asian <br />
                            <input type = 'radio' name = 'race' value = 'BoAA' />Black or African American <br />
                            <input type = 'radio' name = 'race' value = 'NHoOPI' />Native Hawaiian or Other Pacific Islander <br />
                            <input type = 'radio' name = 'race' value = 'White' />White <br />


                        <p>What is your sex?
                            <input type = 'radio' name = 'sex'/>Male<br/>
                            <input type = 'radio' name = 'sex'/>Female
                        </p>

                        <div className = 'address'>What was your address at the time of the arrest?
                            <input type = 'text' placeholder = 'address'/>
                            <input type = 'text' placeholder = 'city' />
                            <input type = 'text' placeholder = 'state' />
                            <input type = 'text' placeholder = 'zipcode'/>
                            <input type = 'text' placeholder = 'county' />
                        </div>

                        <div className = 'address'>What is your current address?
                            <input type = 'text' placeholder = 'address'/>
                            <input type = 'text' placeholder = 'city' />
                            <input type = 'text' placeholder = 'state' />
                            <input type = 'text' placeholder = 'zipcode'/>
                            <input type = 'text' placeholder = 'county' />
                        </div>
                    </div>
                    {/* ARREST PROFILE*/}
                    <div className = 'arrest'>
                        <p>Date of the arrest:</p><input type = 'text'/>
                        <p>Location of the arrest:
                            <input type = 'text' placeholder = 'city'/><br/>
                            <input type = 'text' placeholder = 'county'/>
                        </p>
                        <p>Agency who arrested you:</p><input type = 'text'/>
                        <p>Offense (exactly as it is written on your record):</p><input type = 'text' />
                    </div>
                    {/* CHARGE PROFILE*/}
                    <div className = 'charge'>
                        <p>Date of charge:</p><input type = 'text'/>
                    </div>
                    {/* OVERTURN PROFILE*/}
                    <div className = 'overturn'></div>
                    {/* AGENCY PROFILE*/}
                    <div className = 'agency'></div>
                </form>
            </div>
        )
    }
})
export default DataInputView
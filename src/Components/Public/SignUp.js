import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MiniSpinner } from '../../Layouts/Spinner';
import Select from 'react-select'
import { handleInputOnChange, handleSignUp, handleSelectCountry, fetchCountryData} from '../../Redux/actions/auth/auth.actions';

function SignUp({ auth: { loading, country_data, country_default_value }, handleInputOnChange, handleSelectCountry, fetchCountryData, handleSignUp }) {

    useEffect(() => {
        fetchCountryData();
    },[])

    return (
        <div className="container">
            <div className="row">
               <div className="mx-auto col-md-6 col-lg-6">
                    <div className="mt-5 card card-body">
                        {/* <div className="text-center"><i className="fa fa-user-circle fa-3x"></i></div> */}
                        <h4><i className="fa fa-edit"></i> Sign-Up</h4><hr/>                        {
                            loading ? <div className="my-5"><MiniSpinner/></div>
                            :
                            <form onSubmit={handleSignUp}>
                                <div className="form-group">
                                    <label htmlFor="">Full Name:</label>
                                    <input onChange={handleInputOnChange} type="text" name="name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Age:</label>
                                    <input onChange={handleInputOnChange} type="number" name="age" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Country:</label>
                                   <Select options={country_data} onChange={handleSelectCountry} value={country_default_value}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email:</label>
                                    <input onChange={handleInputOnChange} type="text" name="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password:</label>
                                    <input onChange={handleInputOnChange} type="password" name="password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Confirm Password:</label>
                                    <input onChange={handleInputOnChange} type="password" name="confirm_password" className="form-control"/>
                                </div>
                                <div className="form-group mt-4">
                                    <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                                    <a href="/" className="btn btn-block">Go back</a>
                                </div>
                            </form>
                        }
                    </div>  
               </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { handleInputOnChange, handleSignUp, handleSelectCountry, fetchCountryData })(SignUp)

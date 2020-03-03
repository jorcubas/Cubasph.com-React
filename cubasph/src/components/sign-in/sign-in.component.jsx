import React from 'react';

import './sign-in.styles.scss';

import CustomButton from '../custom2-button/custom2-button.component';
import FormInput from '../form-input/form-input.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:'' });
        } catch(error){
            console.log(error);
        }

        this.setState({ email:'', password:'' });
    }


    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }
 

    render() {
        return(
            <div className="SignInForm">
                <div className="title">
                    <h1>Sign In</h1>
                </div>
                <form onSubmit={this.future}>
                    <FormInput
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Iniciar Sesión</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom2-button/custom2-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const {user} =  await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error){
            console.log(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="SignUpForm">
                <div className="title">
                    <h1> Registrate </h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName"
                        type="text"
                        onChange={this.handleChange}
                        value={displayName}
                        label="Nombre"
                        required
                    />
                    <FormInput 
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        label="email"
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={password}
                        label="contraseña"
                        required
                    />
                    <FormInput 
                        name="confirmPassword"
                        type="password"
                        onChange={this.handleChange}
                        value={confirmPassword}
                        label="contraseña"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Registrame!</CustomButton>
                    </div>
                </form>
            </div>            
        )
    }
};

// const SignUp = () => (
//     <div className="SignUpForm">
//         <div className="title">
//             <h1> Registrate </h1>
//         </div>
//         <form onSubmit={""}>
//             <FormInput 
//                 name="displayName"
//                 type="text"
//                 onChange=""
//                 value=""
//                 label="Nombre"
//                 required
//             />
//             <FormInput 
//                 name="email"
//                 type="email"
//                 onChange=""
//                 value=""
//                 label="email"
//                 required
//             />
//             <FormInput 
//                 name="password"
//                 type="password"
//                 onChange=""
//                 value=""
//                 label="contraseña"
//                 required
//             />
//             <FormInput 
//                 name="confirmPassword"
//                 type="password"
//                 onChange=""
//                 value=""
//                 label="contraseña"
//                 required
//             />
//             <div className="buttons">
//                 <CustomButton type="submit" value="Submit Form">Registrame!</CustomButton>
//             </div>
//         </form>
//     </div>
// )

export default SignUp;
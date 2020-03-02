import React from 'react';

import './sign-up.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    future = event => {
        console.log("Futur");
    }



    render() {
        return(
            <div className="SignUpForm">
                <form onSubmit={this.future}>
                    <FormInput
                        name="email"
                        type="email"
                        // handleChange =
                        // value=""
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        // handleChange =
                        // value=""
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <button>Hola</button>
                        <button>Adios</button>
                    </div>
                </form>
            </div>
        )
    }
}
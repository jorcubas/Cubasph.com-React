import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './buy-form.styles.scss';

import {toggleBuyForm} from '../../redux/buy-form/buy-form.actions';
import {setEmailSubmission, setBodySubmission, setSubmissionNull} from '../../redux/submission/submission.actions';
import {selectSubmissionEmail, selectSubmissionBody} from '../../redux/submission/submission.selectors';
import {addSubmission} from '../../redux/submission/submission.utils';
import {selectUserState} from '../../redux/user/user.selector';


class BuyForm extends React.Component {

    handleEmailChange = event => {
        const {value} = event.target;
        const {emailSubmission} = this.props;
        emailSubmission(value);
    }

    handleBodyChange = event => {
        const {value} = event.target;
        const {bodySubmission} = this.props;
        bodySubmission(value);
    }


    render(){
        return( 
            <div className="Buy-Form">
                <div className="Buy-Form-Window">
                    <div className="Buy-Form-Info">
                        <div 
                            className="close-button" 
                            onClick={ () => {this.props.toggleBuyFormHidden();
                                            this.props.submissionNull();
                                    }}>
                                +
                        </div>
                        <h1>{this.props.name}</h1>
                        <img src={this.props.imageUrl} alt="small buying frame"></img>


                        <input placeholder="E-mail" onChange={this.handleEmailChange} value={this.props.email}></input>
                        <input placeholder="Detalle Adicional" onChange={this.handleBodyChange} value={this.props.body}></input>
                        <p>La cotización será mandada directamente al correo del formulario. </p>
                        <button 
                            onClick={() =>{
                                addSubmission(this.props.email, this.props.body, this.props.name);
                                this.props.toggleBuyFormHidden();
                                this.props.submissionNull();
                            }}>
                            Solicitar Cotización
                        </button>
                    </div>
                </div>
            </div>
        )
    }

};

const mapStateToProps = createStructuredSelector ({
    email: selectSubmissionEmail,
    body: selectSubmissionBody,
    currentUser: selectUserState

  });

const mapDispatchToProps = dispatch => ({
    toggleBuyFormHidden: () => dispatch(toggleBuyForm()),
    emailSubmission: objects => dispatch(setEmailSubmission(objects)),
    bodySubmission: objects => dispatch(setBodySubmission(objects)),
    submissionNull: () => dispatch(setSubmissionNull())
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyForm);
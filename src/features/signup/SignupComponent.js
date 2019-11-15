import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { signup } from './SignupAction';
import './Signup.css';

class SignupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
        // this.handleLogin = this.handleLogin(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.signupSuccess){
            const { history } = this.props;
            return history.push('/stories');
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleLogin = (e) => {
        e.preventDefault();
        const { signup, history } = this.props;
        signup(this.state);
    };
    render(){
        const { error }= this.props;
        return (
            <>
            <div className="wrapper-su">
                <Form onSubmit={this.handleLogin}>
                  <div className="wrapper-login-su">
                    <h3>Stay up to date with the hotest news on the web</h3>
                    <p>Create an account now</p>
                    <div className="">
                        <span className="label">First Name</span>
                        <Input id="firstName" onChange={this.handleChange} className="input" type="text" on required/>
                    </div>
                    <div className="">
                        <span className="label">Last Name</span>
                        <Input id="lastName" onChange={this.handleChange} className="input" type="text" required/>
                    </div>
                    <div className="">
                        <span className="label">User Name</span>
                        <Input id="userName" onChange={this.handleChange} className="input" type="text" required/>
                    </div>
                    <div className="">
                        <span className="label">Email</span>
                        <Input id="email" onChange={this.handleChange} className="input" type="text" required/>
                    </div>
                    <div className="">
                        <span className="label">Password</span>
                        <Input id="password" onChange={this.handleChange} className="input2 input" type="text" required/>
                    </div>
                    <div className="">
                        <span className="label">Confirm Passowrd</span>
                        <Input id="confirmPassword" onChange={this.handleChange} className="input2 input" type="text" required/>
                    </div>
                    <div className="redirect-link"><a href="/">login?</a></div>
                    <Input
                    type="submit"
                    className="login-btn"
                    value="Submit"
                    />
                    <div className="error">
                        {error ? error : null}
                    </div>
                   </div>
                </Form>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.signup.user,
    signupSuccess: state.signup.signupSuccess,
    error: state.signup.error
  });
  
  const mapDispatchToProps = {
    signup
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignupComponent);
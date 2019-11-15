import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from './LoginAction';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.loginSuccess){
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
        const { login } = this.props;
        login(this.state);
    };
    render(){
        const { error }= this.props;
        return (
            <>
            <div className="wrapper">
                <Form onSubmit={this.handleLogin}>
                  <div className="wrapper-login">
                    <h3>Login To See the Latest Stories:</h3>
                    <div className="">
                        <span className="label">Email</span>
                        <Input id="email" onChange={this.handleChange} className="input" type="text" required/>
                    </div>
                    <div className="">

                        <span className="label">Password</span>
                        <Input id="password" onChange={this.handleChange} className="input2 input" type="text" required/>
                    </div>
                    <div className="redirect-link"><a href="/signup">create an account?</a></div>
                    <Input
                    type="submit"
                    className="login-btn"
                    value="Login"
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
    user: state.login.user,
    loginSuccess: state.login.loginSuccess,
    error: state.login.error,
  });
  
  const mapDispatchToProps = {
    login
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login);
import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { loginUser } from '../redux/ActionCreators'

const mapStateToProps = (state) => {
	return {
		login: state.login,
	}
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (username, password) => dispatch(loginUser(username, password))
})

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                    <Switch location={this.props.location}>
                        <Route path='/home' component={() => <Home loginUser={this.props.loginUser} />}/>
                        <Redirect to="/home" />
                    </Switch>
                <Footer/>
            </div>
            );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
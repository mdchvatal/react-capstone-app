import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { loginUser, logoutUser } from '../redux/ActionCreators';

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
	return {
		bankingSession: state.bankingSession,
	}
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (username, password) => dispatch(loginUser(username, password)),
    logoutUser: () => dispatch(logoutUser()),
    resetLoginForm: () => { dispatch(actions.reset('credentials'))}
})

class Main extends Component {
    constructor(props) {
        super(props);
    
        console.log('Main Component properties: ');
        console.log(this.props);
    }

    componentDidMount() {
        // Load any data here.
    }

    render() {
        return (
            <div>
                <Header loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession} />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={Home} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
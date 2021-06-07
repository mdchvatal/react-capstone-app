import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { loginUser } from '../redux/ActionCreators';

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
	return {
		token: state.token,
	}
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (username, password) => dispatch(loginUser(username, password)),
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
        const HomePage = () => {
            console.log('Home Page properties: ');
            console.log(this.props);

            return (
                <Home loginUser={this.props.loginUser} resetLoginForm={this.props.resetLoginForm} />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={ HomePage } />
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
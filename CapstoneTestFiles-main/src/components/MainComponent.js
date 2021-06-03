import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {HomePage} from './HomePageComponent';
import {Header} from './HeaderComponent';
import {Footer} from './FooterComponent';
import {AccountHolderPage} from './AccountHolderPage';

const mapStateToProps = (state) => {
	return {
        accountHolder: state.accountholder,
		login: state.login,
	}
}

const mapDispatchToProps = (dispatch) => ({
    postLogin: (username, password, role) => dispatch(postLogin(username, password, role)),
    resetLoginForm: () => {dispatch(actions.reset('login'))}
})

class MainComponent extends Component{

constructor(props) {
    super(props);
}

render() {
    return (
        <div>
                <Switch location={this.props.location}>
                    <Route path='/account-holder' component={()=> <AccountHolderPage accountHolder={this.props.accountHolder}/>}/>
                    <Route path='/home' component={() => <HomePage postLogin1={this.props.postLogin} resetLoginForm={this.props.resetLoginForm}/>}/>
                    <Redirect to="/home" />
                </Switch>
            <Footer/>
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
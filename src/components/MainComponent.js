import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { loginUser, logoutUser, fetchUsers, fetchCDOfferings, fetchAccountHolders, fetchAccountHolderData } from '../redux/ActionCreators';

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import AdminHome from './AdminHomeComponent';
import AdminUsers from './AdminUsersComponent';
import AdminCDOfferings from './AdminCDOfferingsComponent';
import AdminAccountHolders from './AdminAccountHoldersComponent';
import AccountHolderPage from './AccountHolderPageComponent';

import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
	return {
		bankingSession: state.bankingSession,
        users: state.users,
        cdOfferings: state.cdOfferings,
        accountHolders: state.accountHolders,
        accountHolderData: state.accountHolderData
	}
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (username, password) => dispatch(loginUser(username, password)),
    logoutUser: () => dispatch(logoutUser()),
    resetLoginForm: () => { dispatch(actions.reset('credentials'))},
    fetchUsers: (bankingSession) => dispatch(fetchUsers(bankingSession)),
    fetchCDOfferings: (bankingSession) => dispatch(fetchCDOfferings(bankingSession)),
    fetchAccountHolders: (bankingSession) => dispatch(fetchAccountHolders(bankingSession)),
    fetchAccountHolderData: (data) => dispatch(fetchAccountHolderData(data))
})

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Load any data here.
    }

    render() {
        console.log('Main Component Props on render:');
        console.log(this.props);

        const AdminUsersPage = () => {
            return (
                <AdminUsers 
                    bankingSession={this.props.bankingSession}
                    fetchUsers={this.props.fetchUsers}
                    users={this.props.users.model}
                    status={this.props.users.status}
                    errorMessage={this.props.users.errorMessage}
                />
            );
        }
        const AdminCDOfferingsPage = () => {
            return (
                <AdminCDOfferings 
                    bankingSession={this.props.bankingSession}
                    fetchCDOfferings={this.props.fetchCDOfferings}
                    cdOfferings={this.props.cdOfferings.model}
                    status={this.props.cdOfferings.status}
                    errorMessage={this.props.cdOfferings.errorMessage}
                />
            );
        }
        const AdminAccountHoldersPage = () => {
            return (
                <AdminAccountHolders 
                    bankingSession={this.props.bankingSession}
                    fetchAccountHolders={this.props.fetchAccountHolders}
                    accountHolders={this.props.accountHolders.model}
                    status={this.props.accountHolders.status}
                    errorMessage={this.props.accountHolders.errorMessage}
                />
            );
        }
        return (
            <div>
                <Header loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession} />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={() => <Home loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} 
                                resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession}
                                fetchAccountHolderData={this.props.fetchAccountHolderData}/>} />
                            <Route path='/account-holder' component={() => <AccountHolderPage accountHolderData={this.props.accountHolderData} fetchAccountHolderData={this.props.fetchAccountHolderData} bankingSession={this.props.bankingSession}/>}/>
                            <Route exact path='/admin/' component={AdminHome} />
                            <Route exact path='/admin/users' component={AdminUsersPage} />
                            <Route exact path='/admin/cdOfferings' component={AdminCDOfferingsPage} />
                            <Route exact path='/admin/accountHolders' component={AdminAccountHoldersPage} />
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
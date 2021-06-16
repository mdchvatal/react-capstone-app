import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { loginUser, logoutUser, fetchUsers, fetchCDOfferings, fetchAccountHolders, fetchAccountHolderData } from '../redux/ActionCreators';

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import AdminHome from './AdminHomeComponent';
import AdminUsers from './AdminUsersComponent';
import MeritSavingsPage from './MeritSavingsPageComponent';
import MeritCheckingPage from './MeritCheckingPageComponent';
import DBACheckingAccountPage from './DBACheckingAccountPageComponent'
import AdminCDOfferings from './AdminCDOfferingsComponent';
import AccountHolderPage from './AccountHolderPageComponent';
import AdminAccountHolders from './AdminAccountHoldersComponent';


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
    fetchAccountHolderData: (jwt) => dispatch(fetchAccountHolderData(jwt))
})

class Main extends Component {
    constructor(props) {
        super(props);
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
                <Header loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession} fetchAccountHolderData={this.props.fetchAccountHolderData} accountHolderData={this.props.accountHolderData}/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={() => <Home loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} 
                                resetLoginForm={this.props.resetLoginForm} bankingSession={this.props.bankingSession}
                                fetchAccountHolderData={this.props.fetchAccountHolderData} accountHolderData={this.props.accountHolderData}/>} />
                            <Route exact path='/account-holder' component={() =>  <AccountHolderPage
                                                            status={this.props.accountHolderData.status}
                                                            errorMessage={this.props.accountHolderData.errorMessage}
                                                            accountHolderData={this.props.accountHolderData} 
                                                            fetchAccountHolderData={this.props.fetchAccountHolderData} 
                                                            bankingSession={this.props.bankingSession}/>}/>
                            <Route exact path='/account-holder/merit-savings' component={() =>  <MeritSavingsPage
                                                            status={this.props.accountHolderData.status}
                                                            errorMessage={this.props.accountHolderData.errorMessage}
                                                            accountHolderData={this.props.accountHolderData} 
                                                            fetchAccountHolderData={this.props.fetchAccountHolderData} 
                                                            bankingSession={this.props.bankingSession}/>}/>
                            <Route exact path='/account-holder/merit-checking' component={() => <MeritCheckingPage/>}/>
                            <Route exact path='/account-holder/dba-checking' component={() => <DBACheckingAccountPage/>}/>                                           
                            <Route exact path='/admin' component={AdminHome} />
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
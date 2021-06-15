import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Alert, Table, Card, CardBody, CardText, Container, CardTitle, CardSubtitle} from 'reactstrap';
import SavingsAccounts from './SavingsAccountComponent';
import PersonalChecking from './PersonalCheckingComponent';
import DBAChecking from './DBACheckingComponent';
import {Loading} from './LoadingComponent'
import MeritJumbotron from './MeritJumbtronComponent';


function RenderAccount({account}) {
        return (
                <tr>
                    <th scope="row">{account.id}</th>
                    <td>{account.balance}</td>
                    <td>{account.interestRate}</td>
                </tr>
        );   
} 

class AccountHolderPage extends Component {
    constructor(props) {    
        super(props); 
    }
        

    render () {
        
        if (this.props.bankingSession.token != null) {
            ;
        }
        if (this.props.loading) {
            return(
                
                <div className="container">
                    <div className="row align-items-start">
                        <h1>Account Holders</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.errorMessage) {
                return(
                <div>
                    <MeritJumbotron/>
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Account Holders</h1>
                            <Alert color="danger">
                                {this.props.errorMessage}
                            </Alert>
                        </div>
                    </div>
                </div>    
                );
            } else {
                return(
                <div>
                    <MeritJumbotron/>
                    <Card className="text-center">
                        <h1>{this.props.accountHolderData.accountHolder.firstName} {this.props.accountHolderData.accountHolder.lastName}</h1>
                        <h2>Combined Balance: {this.props.accountHolderData.accountHolder.combinedBalance}</h2>
                        <SavingsAccounts accountHolderData={this.props.accountHolderData}/>
                        <PersonalChecking accountHolderData={this.props.accountHolderData}/>
                        <DBAChecking accountHolderData={this.props.accountHolderData}/>
                    </Card>
                </div>

                )
            }
                }
            }
}

export default AccountHolderPage;
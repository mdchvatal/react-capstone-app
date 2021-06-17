import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Alert, Table, Card, CardBody, CardText, Container, CardTitle, CardSubtitle} from 'reactstrap';
import SavingsAccounts from './MeritSavingsAccountsComponent';
import MeritCheckingAccounts from './MeritCheckingAccountsComponent';
import {Loading} from './LoadingComponent'
import MeritJumbotron from './MeritJumbtronComponent';
import DBACheckingAccounts from './DBACheckingAccountsComponent';
import CDAccounts from './CDAccountsComponent';


function RenderAccount({account}) {
        return (
                <tr>
                    <th scope="row">{account.id}</th>
                    <td>{account.balance}</td>
                    <td>{account.interestRate}</td>
                </tr>
        );   
} 
//TODO: implement error handling
class AccountHolderPage extends Component {
    constructor(props) {    
        super(props); 
    }
        
    
    render () {
        if (this.props.accountHolderData.status === 'loading') {
            return(
                
                <div className="container">
                    <MeritJumbotron/>
                    <div className="row align-items-start">
                        <h1>Account Holders</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.accountHolderData.accountHolder === null) {
                
                return(
                    <div/>    
                );
            } else {
                return(
                <div>
                    <MeritJumbotron/>
                    <Card className="text-center">
                        <h1>{this.props.accountHolderData.accountHolder.firstName} {this.props.accountHolderData.accountHolder.lastName}</h1>
                        <h2>Combined Balance: {this.props.accountHolderData.accountHolder.combinedBalance}</h2>
                        <SavingsAccounts accountHolderData={this.props.accountHolderData}/>
                        <MeritCheckingAccounts accountHolderData={this.props.accountHolderData}/>
                        <DBACheckingAccounts accountHolderData={this.props.accountHolderData}/>
                        <CDAccounts accountHolderData={this.props.accountHolderData}/>
                    </Card>
                    <div className="row justify-content-center">
                            <div className="col-2" id="transfer"></div>
                    </div>
                </div>

                )
            }
                }
            }
}

export default AccountHolderPage;
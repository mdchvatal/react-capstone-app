import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Alert, Table, Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';
import SavingsAccounts from './SavingsAccountComponent';
import {Loading} from './LoadingComponent'


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
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Account Holders</h1>
                            <Alert color="danger">
                                {this.props.errorMessage}
                            </Alert>
                        </div>
                    </div>
                );
            } else {
                return(
                <Card className="accountCard">
                    <SavingsAccounts accountHolderData={this.props.accountHolderData}/>
                </Card>

                )
            }
                }
            }
}

export default AccountHolderPage;
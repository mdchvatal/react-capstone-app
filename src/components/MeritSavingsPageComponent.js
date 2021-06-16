import React, { Component } from 'react';
import { Alert, Table, Card, CardBody, CardText, Container, CardTitle, CardSubtitle} from 'reactstrap';
import SavingsAccounts from './SavingsAccountsComponent';
import PersonalChecking from './PersonalCheckingAccountsComponent';
import DBAChecking from './DBACheckingComponent';
import {Loading} from './LoadingComponent'
import AccountDisplay from './AccountTransactionsDisplayComponent';

class MeritSavingsPage extends Component {
    constructor(props) {    
        super(props);
    }


        

    render () {
        if (this.props.loading) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>Account</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.errorMessage) {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Account</h1>
                            <Alert color="danger">
                                {this.props.errorMessage}
                            </Alert>
                        </div>
                    </div>
                );
            } else {
                return(
                
                <Card className="text-center">
                    
                    {
                        this.props.accountHolderData.accountHolder.savingsAccounts.map((account) => {
                            return (
                                <div>
                                    <h1>Merit Savings Account #{account.id}</h1>
                                    <h2>Account Balance: {account.balance}</h2>
                                    <AccountDisplay account={account} accountHolderData={this.props.accountHolderData}/>
                                </div>
                            );
                        })
                    }
                </Card>

                )
            }
        }
    }
}

export default MeritSavingsPage;
import React, { Component } from 'react';
import { Alert, Table, Card, CardBody, CardText, Container, CardTitle, CardSubtitle} from 'reactstrap';
import SavingsAccounts from './SavingsAccountComponent';
import PersonalChecking from './PersonalCheckingComponent';
import DBAChecking from './DBACheckingComponent';
import {Loading} from './LoadingComponent'
import AccountDisplay from './AccountDisplayComponent';

class MeritSavingsPage extends Component {
    constructor(props) {    
        super(props);
    }


        

    render () {
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
                <Card className="text-center">
                    {
                        this.props.accountHolderData.accountHolder.savingsAccounts.map((account) => {
                            return (
                                <AccountDisplay account={account}/>
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
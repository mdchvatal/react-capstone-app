import React, { Component } from 'react';
import { Alert,  Card} from 'reactstrap';
import MeritJumbotron from './MeritJumbtronComponent';
import AccountDisplay from './AccountTransactionsDisplayComponent';
import { Link, Redirect, withRouter} from 'react-router-dom';
import TransferButton from './TransferButtonComponent';

class CDAccountsPage extends Component {
    constructor(props) {    
        super(props);
    }


        

    render () {
        if (this.props.accountHolderData.accountHolder.cdAccounts[0] === null) {
            return(
                <Redirect to="/account-holder"/>
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
                    <div>
                        <MeritJumbotron/>
                        <Card className="text-center">
                            {
                                this.props.accountHolderData.accountHolder.savingsAccounts.map((account) => {
                                    return (
                                        <div>
                                            <h1>CD Account #{account.id}</h1>
                                            <h2>Account Balance: {account.balance}</h2>
                                            <AccountDisplay account={account} accountHolderData={this.props.accountHolderData}/>
                                        </div>
                                    );
                                })
                            }
                            <div className="row justify-content-center">
                                <div className="col-2" id="transfer"><Link to='/account-holder/transfer'><TransferButton/></Link></div>
                            </div>
                        </Card>
                        
                    </div>

                )
            }
        }
    }
}

export default withRouter(CDAccountsPage);
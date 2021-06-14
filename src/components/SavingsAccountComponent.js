import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

function RenderAccount({account}) {
    return (
            <tr>
                <th scope="row">{account.id}</th>
                <td>{account.balance}</td>
                <td>{account.interestRate}</td>
            </tr>
    );   
} 

class SavingsAccountPage extends Component {
constructor(props) {    
    super(props); 
}

render() {
    if (this.props.accountHolderData.isLoading == true) {
        return(
            <div className="container">
                <div className="row align-items-start">
                    <h1></h1>
                    <Loading />
                </div>
            </div>
        )
    } else {
        if (this.props.errorMessage) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1></h1>
                        <Alert color="danger">
                            {this.props.errorMessage}
                        </Alert>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>{this.props.accountHolderData.accountHolder.firstName} {this.props.accountHolderData.accountHolder.lastName}</h1>
                        <div className="col-12 col-md m-1">
                            <Stagger in>
                                <Fade in>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Savings Account Number</th>
                                                <th>Balance</th>
                                                <th>Interest Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.accountHolderData.accountHolder.savingsAccounts.map((account) => {
                                                    return (
                                                        <RenderAccount account={account} />
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </Fade>
                            </Stagger>
                        </div>
                    </div>
                </div>
            );    
        }
    }
}
}

export default SavingsAccountPage;

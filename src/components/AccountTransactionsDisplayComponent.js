import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

function RenderTransaction({transaction}) {
    return (
            <tr>
                <th scope="row">{transaction.id}</th>
                <td>{transaction.origin}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.transactionType}</td>
                <td>{new Date(transaction.transactionDate).toLocaleString()}</td>
                <td></td>
            </tr>
    );   
} 

class AccountDisplay extends Component {
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
                        <h1></h1>
                        <div className="col-12 col-md m-1">
                            <Stagger in>
                                <Fade in>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Transaction Number</th>
                                                <th>Transaction Origin</th>
                                                <th>Amount</th>
                                                <th>Transaction Type</th>
                                                <th>Transaction Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.account.transactions.map((transaction) => {
                                                    return (
                                                        <RenderTransaction transaction={transaction} />
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

export default AccountDisplay;

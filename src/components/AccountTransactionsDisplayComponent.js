import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';
import CurrencyFormat from 'react-currency-format';


function RenderTransaction({transaction}) {
    if (transaction.transactionType != "withdrawl") {
        return (
                <tr>
                    <th scope="row">{transaction.id}</th>
                    <td>{transaction.origin}</td>
                    <td><CurrencyFormat value={`${transaction.amount}`} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                    <td>{transaction.transactionType}</td>
                    <td>{new Date(transaction.transactionDate).toLocaleString()}</td>
                    <td></td>
                </tr>
        );
    } else {
        return (
            <tr>
                <th scope="row">{transaction.id}</th>
                <td>{transaction.origin}</td>
                <td><CurrencyFormat value={`-${transaction.amount}`} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td>{transaction.transactionType}</td>
                <td>{new Date(transaction.transactionDate).toLocaleString()}</td>
                <td></td>
            </tr>
    );
    }
} 

class AccountDisplay extends Component {
constructor(props) {    
    super(props); 
}

render() {
    if (this.props.account === null) {
        return(
            <div>
            </div>
        )
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

export default AccountDisplay;

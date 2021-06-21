import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import CurrencyFormat from 'react-currency-format';
import { Loading } from './LoadingComponent';

function RenderAccount({account}) {
    return (
            <tr>
                <th scope="row">{account.id}</th>
                <td><CurrencyFormat value={`${account.balance}`} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td>{account.interestRate}</td>
            </tr>
    );   
} 

class MeritCheckingAccounts extends Component {
constructor(props) {    
    super(props); 
}

render() {
    if (this.props.accountHolderData.accountHolder.personalCheckingAccounts == null) {
        return(
            <div >
            </div>
        )
    } else {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-12 col-md m-1">
                            <Stagger in>
                                <Fade in>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Merit Checking Account Number</th>
                                                <th>Balance</th>
                                                <th>Interest Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.accountHolderData.accountHolder.personalCheckingAccounts.map((account) => {
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


export default MeritCheckingAccounts;
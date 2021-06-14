

import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';
import SavingsAccounts from './SavingsAccountComponent';

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

    componentDidMount() {
        if (this.props.status === 'idle') {
            this.props.fetchAccountHolderData(this.props.bankingSession.token);
        }
    }
    
    render() {
        return (
            <SavingsAccounts accounts={this.props.accountHolder.SavingsAccounts}/>
        )
    }

}

export default withRouter(AccountHolderPage);
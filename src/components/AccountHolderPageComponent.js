import React, { Component } from 'react';
import { Link, Redirect, withRouter} from 'react-router-dom';
import TransferButton from './TransferButtonComponent';
import { postTransfer, fetchCDOfferings } from '../redux/ActionCreators';
import CurrencyFormat from 'react-currency-format';
import {connect} from 'react-redux';
import { Alert, Table, Card, CardBody, CardText, Container, CardTitle, CardSubtitle} from 'reactstrap';
import SavingsAccounts from './MeritSavingsAccountsComponent';
import MeritCheckingAccounts from './MeritCheckingAccountsComponent';
import {Loading} from './LoadingComponent'
import MeritJumbotron from './MeritJumbtronComponent';
import DBACheckingAccounts from './DBACheckingAccountsComponent';
import CDAccounts from './CDAccountsComponent';

const mapStateToProps = (state) => {
	return {
		jwt: state.bankingSession.token,
        accountHolder: state.accountHolderData.accountHolder,
        cdOfferings: state.cdOfferings

	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchCDOfferings: (bankingSession) => dispatch(fetchCDOfferings(bankingSession)),
})

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
    
    componentWillUnmount() {
       
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
                        <h2><CurrencyFormat value={`Combined Balance: ${this.props.accountHolderData.accountHolder.combinedBalance}`} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
                        <SavingsAccounts accountHolderData={this.props.accountHolderData}/>
                        <MeritCheckingAccounts accountHolderData={this.props.accountHolderData}/>
                        <DBACheckingAccounts accountHolderData={this.props.accountHolderData}/>
                        <CDAccounts accountHolderData={this.props.accountHolderData}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountHolderPage);
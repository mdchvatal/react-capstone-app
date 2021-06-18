import React, { Component } from 'react';
import { Button, Label, Col, Row, Card, CardTitle } from 'reactstrap';
import { Link, Redirect, withRouter} from 'react-router-dom';
import TransferButton from './TransferButtonComponent';
import { Control, Form } from 'react-redux-form';
import AccountDisplay from './AccountTransactionsDisplayComponent';
import MeritJumbotron from './MeritJumbtronComponent';
import {connect} from 'react-redux';
import { postTransfer, fetchAccountHolderData, fetchCDOfferings, postCDAccount } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
	return {
		jwt: state.bankingSession.token,
        accountHolder: state.accountHolderData.accountHolder,
        cdOfferings: state.cdOfferings

	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchAccountHolderData: (jwt) => dispatch(fetchAccountHolderData(jwt)),
    postTransfer: (jwt, fromAccountId, toAccountId, transactionAmount) => dispatch(postTransfer(jwt, fromAccountId, toAccountId, transactionAmount)),
    fetchCDOfferings: (bankingSession) => dispatch(fetchCDOfferings(bankingSession)),
    postCDAccount: (jwt, fromAccountId, cdOfferingId, transactionAmount) => dispatch(postCDAccount(jwt, fromAccountId, cdOfferingId, transactionAmount))
})



class CDAccountPage extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        //causes infinite call loop
    }

    handleSubmit(values) {
        this.props.postCDAccount(this.props.jwt, values.sourceAccount, values.offering, values.transferAmount);
        console.log(values);
        alert(`You have successfully created a new Certificate of Deposit Account with a balance of ${values.transferAmount}`);
        this.props.fetchAccountHolderData(this.props.jwt);
    }


    render() {
        if (this.props.accountHolder.cdAccounts[0] == null) {
            
            return(
                <div >
                <MeritJumbotron/>
                <div class="row justify-content-center">
                    <div class="col-8">
                        <Card className="card text-center">
                        <CardTitle><h2>Open A Certificate Of Deposit Account</h2></CardTitle>
                            <Form model="openCD" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group d-flex justify-content-center">
                                    <Label htmlFor="offering" className="col-form-label offset-2" >Transfer From Account </Label>
                                    <Col md={10}>
                                        <Control.select model=".offering" id="offering" className="form-control" name="offering">
                                            <option value='0'>Please Select a CD Offering</option>
                                            {this.props.cdOfferings.model.map((offering) =>
                                                    <option key={offering.id} value={offering.id}>CD Offering #{offering.id}: {offering.term} years, %{offering.interestRate} APY</option>)}
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group d-flex justify-content-center">
                                    <Label htmlFor="sourceAccount" className="col-form-label offset-2" >Transfer To Account </Label>
                                    <Col md={10}>
                                        <Control.select model=".sourceAccount" id="sourceAccount" className="form-control" name="sourceAccount">
                                            <option value='0'>Please Select a Transfer Account</option>
                                            {this.props.accountHolder.personalCheckingAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Merit Checking Account #{account.id}: ${account.balance}</option>)}
                                            {this.props.accountHolder.savingsAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Savings Account #{account.id}: ${account.balance}</option>)}
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group d-flex justify-content-center">
                                    <Label htmlFor="transferAmount" className="col-form-label offset-2">Amount To Transfer</Label>
                                    <Col md={10}>
                                        <Control.text model=".transferAmount" id="transferAmount" name="transferAmount" placeholder="Amount $" className="form-control" />
                                        
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Col md={10}>
                                        <Button outline id="transferSubmit" type="submit" color="secondary">
                                        <span className="fa fa-money"></span>
                                            Open Account
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>

        )
    } else {
        return(
            <div>
                <MeritJumbotron/>
                <Card className="text-center">
                    {
                        this.props.accountHolder.cdAccounts.map((account) => {
                            return (
                                <div>
                                    <h1>Certificate of Deposit Account #{account.id}</h1>
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
        );
    }
}
            

}

export default connect(mapStateToProps, mapDispatchToProps)(CDAccountPage);
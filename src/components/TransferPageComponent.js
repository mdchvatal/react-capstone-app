import React, { Component } from 'react';
import { Button, Label, Col, Row, Card, CardTitle } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import MeritJumbotron from './MeritJumbtronComponent';
import {connect} from 'react-redux';
import { postTransfer, fetchAccountHolderData } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
	return {
		jwt: state.bankingSession.token,
        accountHolder: state.accountHolderData.accountHolder
	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchAccountHolderData: (jwt) => dispatch(fetchAccountHolderData(jwt)),
    postTransfer: (jwt, fromAccountId, toAccountId, transactionAmount) => dispatch(postTransfer(jwt, fromAccountId, toAccountId, transactionAmount))

})



class TransferPage extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        this.props.postTransfer(this.props.jwt, values.fromAccount, values.toAccount, values.transferAmount);
        console.log(values);
       alert(`Transfer successful! \nYou transfered $${values.transferAmount} from account number\n${values.fromAccount} to account number ${values.toAccount}.`)
    }

    componentWillUnmount() {
        this.props.fetchAccountHolderData(this.props.jwt);
    }


    render() {
        return(
            <div >
                <MeritJumbotron/>
                <div class="row justify-content-center">
                    <div class="col-8">
                        <Card className="card text-center">
                        <CardTitle><h2>Transfer Money</h2></CardTitle>
                            <Form model="transfer" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group d-flex justify-content-center">
                                    <Label htmlFor="from-account" value="Please Select an Account" className="col-form-label offset-2" >Transfer From Account </Label>
                                    <Col md={10}>
                                        <Control.select model=".fromAccount" id="fromAccount" className="form-control" name="fromAccount">
                                            <option value='0'>Please Select Account</option>
                                            {this.props.accountHolder.personalCheckingAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Merit Checking Account #{account.id}: ${account.balance}</option>)}
                                            {this.props.accountHolder.dbaCheckingAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Business Checking Account #{account.id}: ${account.balance}</option>)}
                                            {this.props.accountHolder.savingsAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Savings Account #{account.id}: ${account.balance}</option>)}
                                            {this.props.accountHolder.iraAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>IRA Account #{account.id}: ${account.balance}</option>)}
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group d-flex justify-content-center">
                                    <Label htmlFor="to-account" className="col-form-label offset-2" >Transfer To Account </Label>
                                    <Col md={10}>
                                        <Control.select value="Please Select an Account" model=".toAccount" id="toAccount" className="form-control" name="toAccount">
                                            <option value='0'>Please Select Account</option>
                                            {this.props.accountHolder.personalCheckingAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Merit Checking Account #{account.id}: ${account.balance}</option>)}
                                            {this.props.accountHolder.dbaCheckingAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Business Checking Account #{account.id}: ${account.balance}</option>)}
                                            {this.props.accountHolder.savingsAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>Savings Account #{account.id}: ${account.balance}</option>)}
                                            {this.props.accountHolder.iraAccounts?.map((account) =>
                                                    <option key={account.id} value={account.id}>IRA Account #{account.id}: ${account.balance}</option>)}
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
                                            Transfer
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TransferPage);
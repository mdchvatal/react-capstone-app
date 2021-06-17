import React, { Component } from 'react';
import { Button, Label, Col, Row, Card, CardTitle } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import MeritJumbotron from './MeritJumbtronComponent';
import {connect} from 'react-redux';
import { loginUser, logoutUser, fetchUsers, fetchCDOfferings, fetchAccountHolders, fetchAccountHolderData } from '../redux/ActionCreators';



//validators={{required, minLength: minLength(3), maxLength: maxLength(15), isNumber}}
/*
<Errors className="text-danger" model='.phone#' show="touched" messages={{required: 'Required', minLength: 'Must be longer than 2 digits.', maxLength: 'Must be less than 15 digits', isNumber: 'Must contain only numbers'}}/>
*/

const mapStateToProps = (state) => {
	return {
		bankingSession: state.bankingSession,
        accountHolder: state.accountHolderData.accountHolder
	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchAccountHolderData: (jwt) => dispatch(fetchAccountHolderData(jwt))
})



class TransferPage extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        //not yet
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
                                    <Label htmlFor="fromAccount" className="col-form-label offset-2" >Transfer From Account </Label>
                                    <Col md={10}>
                                        <Control.select model="fromAccount" className="form-control" name="fromAccount">
                                        
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
                                    <Label htmlFor="toAccount" className="col-form-label offset-2">Transfer To Account</Label>
                                    <Col md={10}>
                                        <Control.select model="toAccount" className="form-control" name="toAccount">
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
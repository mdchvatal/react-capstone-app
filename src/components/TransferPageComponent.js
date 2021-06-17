import React, { Component } from 'react';
import { Button, Label, Col, Row, Card } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import MeritJumbotron from './MeritJumbtronComponent';
import {connect} from 'react-redux';
import { loginUser, logoutUser, fetchUsers, fetchCDOfferings, fetchAccountHolders, fetchAccountHolderData } from '../redux/ActionCreators';



const mapStateToProps = (state) => {
	return {
		bankingSession: state.bankingSession,
        accountHolderData: state.accountHolderData
	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchAccountHolderData: (jwt) => dispatch(fetchAccountHolderData(jwt))
})

function MeritCheckingOptions() {
    if (this.props.accountHolder.personalCheckingAccounts[0] == 'null') {
        return (
            <option>No Valid Merit Checking Accounts</option>
        )
    } else {
        this.props.accountHolder.personalCheckingAccounts.map((account) => {
            return(
                <option>Merit Checking #{account.id}</option>
            );
        });
    }
}

function DBACheckingOptions() {
    if (this.props.accountHolder.dbaCheckingAccounts[0] == 'null') {
        return (
            <option>No Valid Business Checking Accounts</option>
        )
    } else {
        this.props.accountHolder.dbaCheckingAccounts.map((account) => {
            return(
                <option>Business Checking #{account.id}</option>
            );
        });
    }
}

class TransferPage extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {
        //not yet
    }

    render() {
        return(
            <div >
                <MeritJumbotron/>
                <Card>
                    <Form model="transfer" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="username" className="col-form-label">From Account </Label>
                            <Col md={10}>
                                <div>
                                    <h4>{this.props.fromAccount}</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="password" className="col-form-label">Last Name</Label>
                            <Col md={10}>
                                <Control.select model="toAccount" className="form-control" name="toAccount">
                                    <MeritCheckingOptions/>
                                    <DBACheckingOptions/>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Transfer
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>

        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TransferPage);
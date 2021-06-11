import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Jumbotron, Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';
import {SavingsAccountDetails} from './AccountHolderDetailComponent';





class AccountHolderPage extends Component {
    constructor(props) {    
        super(props);
    }

  componentDidMount() {
    this.props.fetchAccountHolderData(this.props.bankingSession.token.jwt);
  }
        
        

    render () {
        return (
            <div>
                <Jumbotron className=".container-fluid">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-9">
                                <h1>LET'S ADD A PICTURE!</h1>
                            </div>
                        </div>    
                    </div>
                </Jumbotron>
                <Card className="accountCard">
                    <SavingsAccountDetails accounts={this.props.accountHolderData.accountHolder.savingsAccounts}/>
                </Card>
            </div>

        )
    }
}

export default AccountHolderPage;
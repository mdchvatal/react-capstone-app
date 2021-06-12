import { Component } from 'react';
import Header from './HeaderComponent';
import {Jumbotron, Card, CardBody, CardText, Container, CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';

function RenderAccounts(account) {
    if (account!=null){
        return(
            <Container className= "themed-container" fluid={true}>
                    <Card>
                        <CardTitle>Account</CardTitle>
                        <CardSubtitle>{account.balance}</CardSubtitle>
                        <CardBody>
                          
                        </CardBody>
                    </Card>
            </Container>
        )
    }
}

function RenderTransactions({transactions}) {
    if (transactions!=null){
        return(
            <div className="row">
                {transactions.map((item) => (
                    <div className="row">
                        <div>      
                            <li key={item.id}>{item.transactionDate}{item.transactionType}{item.origin}{item.amount}</li>   
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export const SavingsAccountDetails = (props) => {
    if (props.isLoading) {
        return(
			<div className="container">
				<div className="row">
					<Loading/>
				</div>
			</div>
			);
    }

    else {
        return(
            <div class="container">
                {props.accounts.map((account1) => (
                    <RenderAccounts key={account1.id} account={account1} />
                ))}
            </div>
        )
    }
}

export const PerosnalCheckingAccountDetails = (props) => {
    if (props.isLoading) {
        return(
			<div className="container">
				<div className="row">
					<Loading/>
				</div>
			</div>
			);
    }

    else {
        return(
            <div class="container">
                {props.accounts.map((account1) => (
                    <RenderAccounts key={account1.id} account={account1} />
                ))}
            </div>
        )
    }
}


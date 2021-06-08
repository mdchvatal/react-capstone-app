import { Component } from 'react';
import Header from './HeaderComponent';
import {Jumbotron, Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';

function RenderAccounts({account}) {
    if (account!=null){
        return(
            <Container className= "themed-container" fluid={true}>
                    <Card>
                        <CardTitle>Account</CardTitle>
                        <CardBody>{account.balance}</CardBody>
                    </Card>
            </Container>
        )
    }
}
const CheckingAccounts=(props) => {
    
    const accounts = props.accountHolder.checkingAccounts.map((account1)=>{
        return(
            <div key={account1.id}>
                <RenderAccounts account={account1}/>
            </div>
        )
    })
}
const SavingsAccounts=(props) => {
    const accounts = props.accountHolder.savingsAccounts.map((account1)=>{
        return(
            <div key={account1.id}>
                <RenderAccounts account={account1}/>
            </div>
        )
    })
}
const CDAccounts=(props) => {
    const accounts = props.accountHolder.cdAccounts.map((account1)=>{
        return(
            <div key={account1.id}>
                <RenderAccounts account={account1}/>
            </div>
        )
    })
}
class AccountHolderPage extends Component {
    constructor(props) {
        super(props);

        //this.RenderAccounts = this.RenderAccounts.bind(this);

    }

    render() {
        return(
            <>
                <Jumbotron>
                    <div className="themed-container" fluid="md">
                        STUFF HERE//add icon
                    </div>
                </Jumbotron>
                <div>{CDAccounts}</div>
                <div>{CheckingAccounts}</div>
                <div>{SavingsAccounts}</div>
            </>
        )
    }

}
export default AccountHolderPage;
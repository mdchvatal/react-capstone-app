import { Component } from 'react';
import Header from './HeaderComponent';
import {Jumbotron, Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';
import {SavingsAccountDetails} from './AccountHolderDetailComponent';

const mapStateToProps = (state) => {
	return {
		bankingSession: state.bankingSession,
        accountHolderData: state.accountHolderData
	}
}


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
    }

  componentWillMount() {
    const jwt = this.props.bankingSession.token.jwt;
    this.props.fetchAccountHolderData(jwt);
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
                <div>{CDAccounts}</div>
                <div>{CheckingAccounts}</div>
                <div>{SavingsAccounts}</div>
            </>
        )
    }
}

export default connect(mapStateToProps)(AccountHolderPage);
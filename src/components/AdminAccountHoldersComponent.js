import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import CurrencyFormat from 'react-currency-format';

import { Loading } from './LoadingComponent';

function RenderAccountHolder({accountHolder}) {
    return (
        <tr>
            <th scope="row">{accountHolder.id}</th>
            <td>{accountHolder.firstName}</td>
            <td>{accountHolder.middleName}</td>
            <td>{accountHolder.lastName}</td> 
            <td><CurrencyFormat value={accountHolder.combinedBalance} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
        </tr>
    );
}

class AdminAccountHolders extends Component {
    constructor(props) {    
        super(props); 
    }

    componentDidMount() {
        console.log('Account Holders Props:');
        console.log(this.props);
        if (this.props.status === 'idle') {
            this.props.fetchAccountHolders(this.props.bankingSession);
        }
    }
    
    render() {
        if (this.props.loading) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>Account Holders</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.errorMessage) {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Account Holders</h1>
                            <Alert color="danger">
                                {this.props.errorMessage}
                            </Alert>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Account Holders</h1>
                            <div className="col-12 col-md m-1">
                                <Stagger in>
                                    <Fade in>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>First Name</th>
                                                    <th>Middle Name</th>
                                                    <th>Last Name</th>
                                                    <th>Combined Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.accountHolders.map((accountHolder) => {
                                                        return ( 
                                                            <RenderAccountHolder accountHolder={accountHolder} />
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </Fade>
                                </Stagger>
                            </div>
                        </div>
                    </div>
                );    
            }
        }
    }

}

export default withRouter(AdminAccountHolders);
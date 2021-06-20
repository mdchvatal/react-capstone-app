import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

function RenderCDOffering({cdOffering}) {
    return (
        <tr>
            <th scope="row">{cdOffering.id}</th>
            <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
            <td>{cdOffering.term}</td>
            <td>{cdOffering.interestRate}</td>
        </tr>
    );
}

class AdminCDOfferings extends Component {
    constructor(props) {    
        super(props); 
    }

    componentDidMount() {
        console.log('CD Offerings Props:');
        console.log(this.props);

        if (this.props.status === 'idle') {
            this.props.fetchCDOfferings(this.props.bankingSession);
        }
    }
    
    render() {
        if (this.props.loading) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>CD Offerings</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.errorMessage) {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>CD Offerings</h1>
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
                            <h1>CD Offerings</h1>
                            <h5 className="list-actions"><i class="fa fa-plus" aria-hidden="true"></i>Add New</h5>
                            <div className="col-12 col-md m-1">
                                <Stagger in>
                                    <Fade in>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                    <th>Term</th>
                                                    <th>Interest Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.cdOfferings.map((cdOffering) => {
                                                        return (
                                                            <RenderCDOffering cdOffering={cdOffering} />
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

export default withRouter(AdminCDOfferings);
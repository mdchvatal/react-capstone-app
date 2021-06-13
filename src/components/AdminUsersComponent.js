import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

function RenderUser({user}) {
    return (
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.username}</td>
            <td>{user.role}</td>
        </tr>
    );
}

class AdminUsers extends Component {
    constructor(props) {    
        super(props); 
    }

    componentDidMount() {
        if (this.props.status === 'idle') {
            this.props.fetchUsers(this.props.bankingSession);
        }
    }
    
    render() {
        if (this.props.loading) {
            return(
                <div className="container">
                    <div className="row align-items-start">
                        <h1>Users</h1>
                        <Loading />
                    </div>
                </div>
            )
        } else {
            if (this.props.errorMessage) {
                return(
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Users</h1>
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
                            <h1>Users</h1>
                            <div className="col-12 col-md m-1">
                                <Stagger in>
                                    <Fade in>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Username</th>
                                                    <th>Role</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.users.map((user) => {
                                                        return (
                                                            <RenderUser user={user} />
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

export default withRouter(AdminUsers);
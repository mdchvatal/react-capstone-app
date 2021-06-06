//this should have the login form in a container - see wireframes
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, FormGroup,  
    Label, Input, Form, Row, Col} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    };

    handleLogin(values) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        //values.preventDefault();

        const [token, setToken] = useState(null);
        const fetchToken = async () => {
            process.env.REACT_APP_API_ENDPOINT = 'http://localhost:3000/Authenticate'
            console.log(process.env.REACT_APP_API_ENDPOINT);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.username.value,
                    password: this.password.value
                })
            };
            const response = await fetch(process.env.REACT_APP_API_ENDPOINT, requestOptions);
            const data = await response.json();
            console.log(data);
            
            setToken(data.token);              
        };
    }

    render () {
        return(
            <>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-9">
                                <h1>LET'S ADD A PICTURE!</h1>
                            </div>
                            <div className="col-3">
                                <Form model="login" onSubmit={(values) => this.handleLogin(values)}>
                                    <FormGroup>
                                        <Label htmlFor="username">Username</Label>
                                        <Control.text model=".username" id="username" name="username" placeholder="Username" className="form-control"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password</Label>
                                        <Control.text model=".password" id="password" name="password" placeholder="Password" className="form-control"/>
                                    </FormGroup>
                                    <Button>Log In</Button>
                                </Form>
                            </div>
                        </div>    
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Home;
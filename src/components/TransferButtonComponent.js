import { Component } from 'react';
import { Link, NavLink, Redirect, withRouter} from 'react-router-dom';
import { Button } from 'reactstrap';



class TransferButton extends Component{
    constructor(props){
        super(props);


    }

    

    render() {
        return (
            <Button outline ><span className="fa fa-money"></span>Initiate A Transfer</Button>
        );
    }
}

export default TransferButton;

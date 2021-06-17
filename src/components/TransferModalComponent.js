import { connect } from "react-redux";
import TransferForm from "./TransferFormComponent";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


const mapStateToProps = (state) => {
	return {
		bankingSession: state.bankingSession,
        accountHolderData: state.accountHolderData
	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchAccountHolderData: (jwt) => dispatch(fetchAccountHolderData(jwt))
})

class TransferModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        if (!this.state.isModalOpen) {
            this.props.resetLoginForm();
        }
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen && this.props.bankingSession.isStarting} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Initiate a Transfer</ModalHeader>
                    <ModalBody>
                        <TransferForm accountHolder={this.props.accountHolderData.accountHolder}/>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransferModal);
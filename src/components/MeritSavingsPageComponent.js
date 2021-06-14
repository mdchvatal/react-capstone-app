class AccountHolderPage extends Component {
    constructor(props) {    
        super(props);
    }


        

    render () {
        if (this.props.bankingSession.token != null) {
            ;
        }
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
                <Card className="accountCard">
                    <SavingsAccounts accountHolderData={this.props.accountHolderData}/>
                </Card>

                )
            }
                }
            }
}

export default connect(mapStateToProps)(AccountHolderPage);
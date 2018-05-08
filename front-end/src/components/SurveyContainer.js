import React, { Component } from 'react';
import '../styles/SurveyContainer.css';
import { Route, withRouter } from 'react-router-dom';
import FormContainer from "./FormContainer";
// import {Button, Modal} from 'react-bootstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card,Modal, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
const customStyles = {
    content : {
        top                   : '80%',
        left                  : '50%',
        right                 : 'auto',
        width                 : '50%',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        opacity: 0.5
    }
};
class SurveyContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeTab: '1',
            createdbyme:[
                {
                    surveyId: 1,
                    surveyName: 'Survey 1'
                },
                {
                    surveyId: 2,
                    surveyName: 'Survey 2'
                }
            ],
            sharedwithme:[
                {
                    surveyId: 3,
                    surveyName: 'Survey 3'
                },
                {
                    surveyId: 4,
                    surveyName: 'Survey 4'
                }
            ]
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    openStats = (survey) =>{
        this.props.history.push("/surveyStats", { selectedSurvey: survey })
           this.openModal();
    }

    openModal(){
        this.setState({
            show: true });
    }
    closeModal(){
        this.setState({
            show: false });
    }

    render() {
        return (
            <div className="survey-container">
                <div className="form-design-container">
                    <div className="form-container">

                        <Modal dialogClassName={customStyles} show={this.state.show} onHide={() => this.closeModal()}>
                            <Modal.Header closeButton>
                                {/*<Modal.Title>Bookmarked Success</Modal.Title>*/}
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row justify-content-md-center">
                                    <div className="form-group row">
                                        <div className="col-sm-offset-1 col-sm-10 col-sm-offset-1">
                                            <div className="alert alert-success text-center" role="alert">You first need to sign
                                                in before adding a public board to your private boards.</div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => this.closeModal}>Close</Button>
                            </Modal.Footer>
                        </Modal>


                        <Nav tabs>
                            <NavItem className='col-lg-6'>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1'})}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Created by Me
                                </NavLink>
                            </NavItem>
                            <NavItem className='col-lg-6'>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Shared with Me
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <br/>
                                {this.state.createdbyme.map((survey) =>
                                    <Row>
                                    <Col sm="12">
                                        <h6>{survey.surveyName}</h6>
                                        <button className="btn btn-primary share-button"
                                                onClick={() => {
                                                    this.openStats(survey);
                                                }}>View Stats</button>
                                    </Col>
                                </Row>)
                                }
                            </TabPane>
                            <TabPane tabId="2">
                                <br/>
                                {this.state.sharedwithme.map((survey) =>
                                    <Row>
                                        <Col sm="12">
                                           <h6>{survey.surveyName}</h6>
                                        </Col>
                                    </Row>)
                                }
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SurveyContainer);
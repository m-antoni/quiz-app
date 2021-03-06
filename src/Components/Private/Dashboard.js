import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { MiniSpinner } from '../../Layouts/Spinner';
import SetupQuiz from './SetupQuiz.modal';
import moment from 'moment';
import {  MDBCardText } from "mdbreact";
import { setModal, getCategories, getTriviaAPIToken, getAllQuiz } from '../../Redux/actions/quiz/quiz.actions';

function Dashboard({ quiz: { setup_quiz_modal, quiz_results, loading }, setModal, getCategories, getTriviaAPIToken, getAllQuiz }) {
    
    useEffect(() => {
        getCategories();
        getAllQuiz();
        getTriviaAPIToken();
    },[]);
    
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card mb-4">
                        <div className="card-image"><img src="/assets/img/quiz.jpg" className="img-fluid waves" alt="img"/></div>
                            <div className="card-body">
                                <button onClick={() => setModal('setup_quiz_modal')} className="btn btn-primary btn-block">START QUIZ</button>
                                <div className="container my-3">
                                {
                                    loading ? <MiniSpinner/> :
                                    quiz_results.length > 0 ? quiz_results.map(data => (
                                        <div><strong>Score:</strong> {data.score} <span className="float-right"><MDBCardText>{moment(data.created_at.toDate()).format('M-D-Y h:mm A')}</MDBCardText></span><hr/></div>
                                    ))
                                    : <div className="text-center mt-3">No Records Yet.</div>
                                }
                                </div>
                            </div>
                           {/* {
                               quiz_results.length > 0 &&  
                                <div className="card-footer">
                                    <a href="#" className="btn-block text-center">VIEW ALL RESULT</a>
                                </div>
                           } */}
                        </div>
                    </div>
                </div>
            </div>
            <SetupQuiz show={setup_quiz_modal} onHide={() => setModal('setup_quiz_modal', false)}/>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    quiz: state.quiz
})

export default connect(mapStateToProps, { setModal, getCategories, getTriviaAPIToken,getAllQuiz })(Dashboard)

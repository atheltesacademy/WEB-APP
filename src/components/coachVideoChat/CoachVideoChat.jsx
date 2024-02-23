import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCamera, faCog, faGreaterThan, faMicrophone, faPaperclip, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Card } from 'react-bootstrap';
import Sports from '../../assets/basketball-card1@2x.png';
import './CoachVideoChat.css'
import NavigationBar from '../navigation/NavigationBar';

//bootstrap import
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const CoachVideoChat = () => {

    const chatJson = [
        {
            id: 1,
            message: "Hello Guys! Whats your opinion?",
            type: "Receiver"
        },
        {
            id: 2,
            message: "Images are better.",
            type: "Receiver"
        },
        {
            id: 3,
            message: "Yes, It will decrease the loading",
            type: "Sender"
        },
        {
            id: 4,
            message: "Anyone is up for illustrations. I think there are less relatable images according to our brand.",
            type: "Receiver"
        },
        {
            id: 4,
            message: "Anyone is up for illustrations. I think there are less relatable images according to our brand.",
            type: "Receiver"
        },
        {
            id: 5,
            message: "Anyone is up for illustrations. I think there are less relatable images according to our brand.",
            type: "Sender"
        },
    ]

    return (
        <div>
            <NavigationBar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-4'>
                        <div className='d-flex justify-content-end align-items-center'>
                            <button type="button" id='btn' className='m-1'>Football</button>
                            <span className='m-1'><FontAwesomeIcon icon={faGreaterThan} />&nbsp;Coaches</span>
                        </div>

                        <div className='card mt-2 shadow p-3 rounded' >
                            <Card.Body>
                                <div id="msgContainer" className='d-flex justify-content-center'>
                                    Messages</div>
                                <Card.Text style={{ height: '400px', overflowY: 'scroll' }}>
                                    Messages
                                    {chatJson.map((item, index) => (
                                        <div
                                            key={index}
                                            className={item.type === 'Sender' ? 'd-flex justify-content-end align-items-end' : 'd-flex justify-content-start align-items-start'}
                                        >
                                            {item.type == "Receiver" &&
                                                <img src={Sports} height={30} width={30} style={{ borderRadius: 15 }} />
                                            }
                                            <div id={item.type === 'Sender' ? 'senderMsg' : 'receiverMsg'}>
                                                {item.message}
                                            </div>
                                        </div>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                            <div className='bottom-container rounded-top rounded-right mb-4' style={{ position: 'absolute', bottom: 0 }}>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <button className='p-2 bg-transparent' style={{ borderColor: 'transparent' }}>
                                        <FontAwesomeIcon icon={faPaperclip} color='rgba(0, 14, 8, 0.5)' />
                                    </button>
                                    <div className='p-2 input-group input-group-sm'>
                                        <input type='text' className='form-control p-2 rounded' placeholder='Write your message' color='#797C7B80' style={{ borderColor: '#FFFFFF' }} />
                                    </div>
                                    <button className='p-2 bg-transparent' style={{ borderColor: 'transparent' }}>
                                        <FontAwesomeIcon icon={faCamera} color='rgba(0, 14, 8, 0.5)' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 mt-3 col-sm-8'>
                        <div className='row'>
                            <div className='col-md-9'>
                                <img src={Sports} className="img-fluid" alt="Responsive image" />
                            </div>
                            <div className='col-md-2 d-flex justify-content-end align-items-end mb-4'>
                                <img src={Sports} alt="Responsive image" height={150} width={150} />
                            </div>
                            <div className='d-flex flex-row mt-4 justify-content-center'>
                                <button id='audioIcon' className='m-2' style={{ borderColor: 'transparent' }}></button>
                                <button id='audioIcon' className='d-flex justify-content-center align-items-center m-2'
                                    style={{ borderColor: 'transparent' }}>
                                    <FontAwesomeIcon icon={faVideo} />
                                </button>
                                <button id='callIcon' className='d-flex justify-content-center align-items-center m-2'
                                    style={{ borderColor: 'transparent' }}>
                                    <FontAwesomeIcon icon={faCalculator} />
                                </button>
                                <button id='audioIcon' className='d-flex justify-content-center align-items-center m-2'
                                    style={{ borderColor: 'transparent' }}>
                                    <FontAwesomeIcon icon={faMicrophone} />
                                </button>
                                <button id='audioIcon' className='d-flex justify-content-center align-items-center m-2'
                                    style={{ borderColor: 'transparent' }}>
                                    <FontAwesomeIcon icon={faCog} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
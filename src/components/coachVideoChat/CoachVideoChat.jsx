import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCamera,  faGreaterThan, faMessage, faMicrophone, faPaperclip, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Card } from 'react-bootstrap';
import Avatar from '../../assets/video-chat-avatar.png';
import MaleAvatar from '../../assets/videoAvatarMale.png';
import FemaleAvatar from '../../assets/femaleAvatar.png';
import OnlineProve from '../../assets/voice-graph.svg';
import NavigationBar from '../navigation/NavigationBar';
import DummyAvatar from '../../assets/maleAvatar.png'
import './CoachVideoChat.css'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const CoachVideoChat = () => {

    const chatJson = [
        {
            id: 1,
            message: "Hello Guys! Whats your opinion?",
            type: "Receiver",
            name: 'Demo',
            image: FemaleAvatar
        },
        {
            id: 2,
            message: "Images are better.",
            type: "Receiver",
            name: 'Demo',
            image: Avatar
        },
        {
            id: 3,
            message: "Yes, It will decrease the loading",
            type: "Sender",
            name: 'You',
            image: Avatar
        },
        {
            id: 4,
            message: "Anyone is up for illustrations. I think there are less relatable images according to our brand.",
            type: "Receiver",
            name: 'Demo',
            image: DummyAvatar
        },
        {
            id: 5,
            message: "Hello Guys! Whats your opinion?",
            type: "Receiver",
            name: 'Demo',
            image: FemaleAvatar
        },
        {
            id: 6,
            message: "Hello Guys! Whats your opinion?",
            type: "Receiver",
            name: 'Demo',
            image: FemaleAvatar
        },
    ]

    return (
        <div>
            <NavigationBar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-4'>
                        <div className='d-flex justify-content-end align-items-center'>
                            <button type="button" style={{backgroundColor:'rgba(37, 91, 155, 1)',borderRadius:'10px',height:'35px',width: '-webkit-fill-available',color:'#ffffff'}}>Football</button>
                            <span className='m-1'><FontAwesomeIcon icon={faGreaterThan} style={{ marginLeft: '8%'}}/>&nbsp;Coaches</span>
                        

                        </div>

                        <div className='card mt-2 shadow p-3 rounded' >
                            <Card.Body>
                                <div id="msgContainer">
                                    Messages</div>
                                <Card.Text style={{ height: '400px', overflowY: 'scroll' }}>
                                    <div className='d-flex flex-row mt-3'>
                                    </div>
                                    {chatJson.map((item, index) => (
                                        <div
                                            key={index}
                                            className={item.type === 'Sender' ? 'd-flex justify-content-end align-items-end' : 'd-flex justify-content-start align-items-start'}
                                        >
                                            {item.type == "Receiver" &&
                                                <img src={item.image} height={30} width={30} style={{ borderRadius: 15 }} />
                                            }
                                            <div id={item.type === 'Sender' ? 'senderMsg' : 'receiverMsg'}>
                                                {item.message}
                                            </div>
                                        </div>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                            <div className='bottom-container m-3'
                                style={{
                                    position: 'absolute', bottom: 0,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20
                                }}>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <button className='p-2 bg-transparent' style={{ borderColor: 'transparent' }}>
                                        <FontAwesomeIcon icon={faPaperclip} color='rgba(0, 14, 8, 0.5)' />
                                    </button>
                                    <div className='p-2 input-group input-group-sm'>
                                        <input type='text' className='form-control p-2 rounded' placeholder='Write your message' color='#797C7B80' style={{ borderColor: '#FFFFFF' }} />
                                    </div>
                                    <button className='p-2 bg-transparent' style={{ borderColor: 'transparent' }}>
                                        <FontAwesomeIcon icon={faMessage} color='rgba(0, 14, 8, 0.5)' />
                                    </button>

                                    <button className='p-2 bg-transparent' style={{ borderColor: 'transparent' }}>
                                        <FontAwesomeIcon icon={faCamera} color='rgba(0, 14, 8, 0.5)' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 mt-3 col-sm-8'>
                        <div className='row'>
                            <div className='col-md-10'>
                                <img src={Avatar} className="img-fluid" alt="Responsive image" />
                            </div>
                            <div className='col-md-2 d-flex justify-content-end align-items-end px-2'>
                                <img src={MaleAvatar} alt="Responsive image" height={160} width={180}
                                    style={{ position: 'relative' }} />
                                <div style={{
                                    position: "absolute",
                                    margin: '8px'
                                }}> <img src={OnlineProve} alt='boom' /> </div>
                            </div>
                            <div className='d-flex flex-row mt-4 justify-content-center'>
                                <button id='audioIcon' className='d-flex justify-content-center align-items-center m-2'
                                    style={{ borderColor: 'transparent' }}>
                                    <FontAwesomeIcon icon={faVideo} color='#FFFFFF' />
                                </button>
                                <button id='callIcon' className='d-flex justify-content-center align-items-center m-2'
                                    style={{ borderColor: 'transparent' }}>
                                    <FontAwesomeIcon icon={faCalculator} color='#FFFFFF' />
                                </button>
                                <button id='audioIcon' className='d-flex justify-content-center align-items-center m-2'
                                    style={{ borderColor: 'transparent' }}>
                                    <FontAwesomeIcon icon={faMicrophone} color='#FFFFFF' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
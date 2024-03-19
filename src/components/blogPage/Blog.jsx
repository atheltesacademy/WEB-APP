import React from 'react'
import NavigationBar from '../navigation/NavigationBar'
import blogImage from '../../assets/footballBlog.png'
import BlogGround from '../../assets/ground.png';
import FacebookIcon from '../../assets/facebook.png';
import TwitterIcon from '../../assets/twitter.png'
import FootballImage from '../../assets/football-card@2x.png'
import { Footer } from '../footer/Footer';
import SaveIcon from '../../assets/saveIcon.svg'
import './Blog.css'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const Blog = () => {
    return (
        <>
            <NavigationBar />
            <div className='container-fluid'>
                <section className='container d-flex align-items-center justify-content-center mt-4'
                >
                    <div className='titleText'>Football Blog:<br />
                        Title: "The Art of Striking: Mastering the Perfect Shot"
                        <hr />

                        <p className='subTitle'>
                            In the world of football, few moments rival the
                            excitement of a perfectly executed strike on goal.
                            Whether it's a thunderous shot from outside the box
                            or a delicate chip over the keeper, the art of strikeing is oneof that requires skills, precision, and fitness</p>
                    </div>
                </section>

                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <img src={blogImage} height={'300px'} width={'850px'} />
                </div>

                {/* <section className='container-fluid row mt-5 pt-5 px-5'>
                    <div className='col-md-10' style={{
                        fontSize: '15px',
                        color: "#000000",
                        fontWeight: "500"
                    }}>
                        1. *Technique Matters*: Break down the key components of a great shot, from planting your non-kicking foot to following through with your striking foot.<br /><br />
                        2. *Finding the Sweet Spot*: Explore how to consistently hit the ball with the sweet spot of your foot for maximum power and accuracy.<br /><br />
                        3. *Mind Over Matter*: Discuss the mental aspect of striking, including maintaining focus under pressure and visualizing success.<br /><br />
                        4. *Training Drills*: Share some effective drills and exercises to improve your shooting technique, from solo practice to shooting drills with teammates.
                    </div>
                    <div className='col-md-2'>
                        <img src={ImageLogo} alt="img1" width="200px" style={{ marginLeft: '3%' }} />
                    </div>
                </section> */}

                {/* <section className='container d-flex flex-row align-items-center justify-content-around mt-5'
                    style={{
                        padding: "100px 10px 100px"
                    }}>
                    <img src={BlogImageOne} alt="img1" height="320px" width="350px" />
                    <img src={BlogImageTwo} alt="img1" height="320px" width="350px" />
                    <img src={BlogImageThree} alt="img1" height="320px" width="350px" />
                </section> */}

                <section className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-8'
                            style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                color: "#000000"
                            }}>
                            Center midfielders with a high work rate mentality need to excel in both technical skills and physical endurance to effectively cover ground, maintain possession, and contribute to both defensive and offensive phases of play. Here are some key techniques and attributes they should possess:
                            <div className='m-3'>
                                1.Passing Accuracy: A high work rate midfielder needs to be able to distribute the ball effectively, whether it's short, precise passes to maintain possession or long, accurate passes to switch play or launch attacks.<br />
                                2.Vision and Awareness: Being able to read the game, anticipate movements, and identify space is crucial. They should have the vision to spot opportunities for through balls or switches of play and the awareness to maintain positional discipline.<br />
                                3.First Touch: A good first touch allows midfielders to control the ball quickly, even under pressure, enabling them to maintain possession or move the ball into space efficiently.<br />
                                4.Dribbling Skills: While not every midfielder needs to be a dribbler, having the ability to beat opponents in one-on-one situations can be invaluable, especially when trying to advance the ball up the field or evade pressure in tight spaces.<br />
                                5.Shooting Ability: Center midfielders should be capable of contributing to the attack with well-timed runs into the box and accurate shots from distance. Even if they're not prolific goal scorers, threatening the opposition's goal adds another dimension to their game.
                            </div></div>
                        <div className='col-md-4'>
                            <div className='p-3' style={{
                                backgroundColor: '#72bcd4',
                                color: '#FFFFFF',
                                fontSize: 32,
                                textAlign: 'center'
                            }}>
                                The Top five Insights
                            </div>

                            <div className='d-flex flex-row align-items-center px-4 mt-3 p-3' style={{
                                backgroundColor: '#D9D9D9',
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: 15,
                                textAlign: 'center',
                            }}>
                                <div style={{ paddingLeft: '25px' }}>
                                    <img src={SaveIcon} style={{ height: 50, width: 50 }} />
                                </div>
                                <div style={{ paddingLeft: 30 }}>
                                    Coaches are available
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center px-4 p-3' style={{
                                backgroundColor: '#F2F2F2',
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: 15,
                                textAlign: 'center',
                            }}>
                                <div style={{ paddingLeft: '25px' }}>
                                    <img src={SaveIcon} style={{ height: 50, width: 50 }} />
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center px-4 p-3' style={{
                                backgroundColor: '#D9D9D9',
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: 15,
                                textAlign: 'center',
                            }}>
                                <div style={{ paddingLeft: '25px' }}>
                                    <img src={SaveIcon} style={{ height: 50, width: 50 }} />
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center px-4 p-3' style={{
                                backgroundColor: '#F2F2F2',
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: 15,
                                textAlign: 'center',
                            }}>
                                <div style={{ paddingLeft: '25px' }}>
                                    <img src={SaveIcon} style={{ height: 50, width: 50 }} />
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center px-4 p-3' style={{
                                backgroundColor: '#D9D9D9',
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: 15,
                                textAlign: 'center',
                            }}>
                                <div style={{ paddingLeft: '25px' }}>
                                    <img src={SaveIcon} style={{ height: 50, width: 50 }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='container text-center mt-5'>
                    <div style={{
                        fontSize: "30px",
                        fontWeight: 'bold',
                        color: '#000000'
                    }}>
                        Conclusion
                        <br />
                        <div style={{
                            fontSize: "20px",
                            fontWeight: 'bold',
                            color: '#283C46',
                            textAlign: "center",
                            margin: '40px 200px'
                        }}>
                            In the world of football, few moments rival the excitement of a perfectly executed strike on goal. Whether it's a thunderous shot from outside the box or a delicate chip over the keeper, the art of strikeing is oneof that requires skills, precision, and fitness
                        </div>
                    </div>
                    <img className='mt-5 pt-5' src={BlogGround} alt="img1" height="250px" width="1100px" />

                    <div style={{ marginTop: '150px' }} className='d-flex flex-row align-items-center justify-content-center'>
                        <div className='d-flex flex-row align-items-center'>
                            <img src={FacebookIcon} alt="img1" />
                            <div style={{
                                fontSize: "10px",
                                fontWeight: '600',
                                color: '#000000'
                            }}>&nbsp; Share on Facebook</div>
                        </div>
                        <div className='d-flex flex-row align-items-center' style={{ paddingLeft: '30px' }}>
                            <img src={TwitterIcon} alt="img1" />
                            <div style={{
                                fontSize: "10px",
                                fontWeight: '600',
                                color: '#000000'
                            }}>&nbsp; Share on Twitter</div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className='container px-5'>
                    <div style={{
                        fontSize: "30px",
                        fontWeight: 'bold',
                        color: '#000000',
                        textAlign: 'center'
                    }}>Our best Coaches </div>

                    <div className='d-flex flex-row flex-wrap align-items-center justify-content-between'
                        style={{ cursor: 'pointer' }}>
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                    </div>


                    <div className='d-flex flex-row align-items-center justify-content-center mt-5'>
                        <div className='border border-dark'
                            style={{
                                padding: '40px 100px 40px',
                                color: '#090909',
                                fontWeight: "bold",
                                fontSize: "28px"
                            }}>Sign up for the newsletter
                            <div className="input-group mt-5">
                                <input type="text" className="form-control" placeholder="Enter your email..." />
                                <button className="input-group-text" id='signUp'>SIGN UP</button>
                            </div>
                        </div>

                        <div className='questionTitle border border-dark'
                        >Have Question?
                            <div className="questionContainer mt-5 pb-4"
                            >
                                Reach out to us by emailing at Team@athletesacademy.tech and we'll get back to you.
                            </div>
                        </div>
                    </div>
                    <hr id='line' />

                </section>
            </div>
            <section className='mt-5 pt-5'>
                <Footer />
            </section>
        </>
    )
}

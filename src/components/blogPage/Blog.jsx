import React from 'react'
import NavigationBar from '../navigation/NavigationBar'
import blogImage from '../../assets/footballBlog.png'
import ImageLogo from '../../assets/mainlogo.jpeg';
import BlogImageOne from '../../assets/basketball-card2@2x.png'
import BlogImageTwo from '../../assets/blogImage2.png';
import BlogImageThree from '../../assets/blogImage3.png';
import BlogGround from '../../assets/ground.png';
import FacebookIcon from '../../assets/facebook.png';
import TwitterIcon from '../../assets/twitter.png'
import FootballImage from '../../assets/football-card@2x.png'
import AvatarOne from '../../assets/min-frame@2x.png'
import AvatarTwo from '../../assets/videoAvatarMale.png'
import { Footer } from '../footer/Footer';
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
                    <div style={{
                        fontSize: '40px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: "#000000"
                    }}>Football Blog:<br />
                        Title: "The Art of Striking: Mastering the Perfect Shot"
                        <hr />

                        <p style={{
                            fontSize: '22px',
                            textAlign: 'center',
                            fontWeight: '600',
                            color: "#283C46",
                            padding: '10px 200px 10px'
                        }}>In the world of football, few moments rival the excitement of a perfectly executed strike on goal. Whether it's a thunderous shot from outside the box or a delicate chip over the keeper, the art of strikeing is oneof that requires skills, precision, and fitness</p>
                    </div>
                </section>

                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <img src={blogImage} height={'300px'} width={'850px'} />
                </div>

                <section className='container-fluid row mt-5 pt-5 px-5'>
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
                </section>

                <section className='container d-flex flex-row align-items-center justify-content-around mt-5'
                    style={{
                        padding: "100px 10px 100px"
                    }}>
                    <img src={BlogImageOne} alt="img1" height="320px" width="350px" />
                    <img src={BlogImageTwo} alt="img1" height="320px" width="350px" />
                    <img src={BlogImageThree} alt="img1" height="320px" width="350px" />
                </section>

                <section className='container text-center mt-4'>
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

                    <div className='d-flex flex-row align-items-center justify-content-between'>
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                        <img className='mt-4' src={FootballImage} alt="img1" height="200px" width="280px" />
                    </div>

                    <div className='d-flex flex-row align-items-center justify-content-between'>
                        <img className='mt-5' src={AvatarOne} alt="img1" height="280px" width="250px" />
                        <img className='mt-5' src={AvatarTwo} alt="img1" height="280px" width="250px" />
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-5'>
                        <div className='border border-dark'
                            style={{
                                padding: '30px 50px 30px',
                                color: '#090909',
                                fontWeight: "bold",
                                fontSize: "28px"
                            }}>Sign up for the newsletter
                            <div class="input-group mt-5">
                                <input type="text" className="form-control" placeholder="Enter your email..." />
                                <button className="input-group-text" id='signUp'>SIGN UP</button>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <section className='mt-5 pt-5'>
                <Footer />
            </section>
        </>
    )
}

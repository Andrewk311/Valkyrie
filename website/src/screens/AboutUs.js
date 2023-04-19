import './AboutUs.css';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import andrewPic from './../Images/Headshots/AndrewHeadshot.JPG';
import ayleenPic from './../Images/Headshots/AyleenHeadshot.jpg';
import bobbyPic from './../Images/Headshots/BobbyHeadshot2.jpg';
import sunitPic from './../Images/Headshots/SunitHeadshot.JPG';
import teamMember4 from './../Images/Dallas7.JPG';
import teamPhoto from './../Images/Dallas2.jpg';
import pharmDataChart from './../Images/PharmDataChart.png';
import pharmDataMap from './../Images/PharmData.png';
import ayleenPharm from './../Images/TeamPics/AyleenPharm.JPG';
import bobbyPharm from './../Images/TeamPics/BobbyPharm.jpg';
import andrewAyleenCode from './../Images/TeamPics/AndrewAyleenCode.jpg';
import andrewAyleenCode2 from './../Images/TeamPics/AndrewAyleenCode2.jpg';
import kieranSunitDrone from './../Images/TeamPics/KieranSunitDrone.jpg';

const images = [ayleenPharm, andrewAyleenCode, bobbyPharm, kieranSunitDrone, andrewAyleenCode2];

function AboutUs() {

    const [activeSlide, setActiveSlide] = useState(0);
    const navigate = useNavigate();
    const topRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);    

    useEffect(() => {
        topRef.current.scrollIntoView();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 6000);
        return () => clearTimeout(timer);
    }, [activeSlide]);

    function handleHowClick() {
        navigate('/HowitsBuilt')
    }

    function handleHomeClick() {
        navigate('/')
    }

    function handleGoBack() {
        navigate('/');
    }

    const prevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        console.log(activeSlide);
        console.log(images[activeSlide])
    };

    return (
        <div className="AboutUs">
            <div ref={topRef} />
            <header className="aboutUsHeader">
                <button className="button-header button-margin-about" onClick={handleGoBack}>Go Back</button>
                <p className="header-text">VALKYRIE CAPSTONE GROUP 19</p>
            </header>
            <section className="aboutUsSection">
                <h1 className="aboutUsTitle">Meet the Team</h1>
                <div className="teamMembers">
                    <div className="teamMember">
                        <img className="teamMemberImage" src={andrewPic} alt="Team Member 1" />
                        <h3 className="teamMemberName">
                            <a href="https://www.linkedin.com/in/andrew--king/" target="_blank" rel="noopener noreferrer">
                                Andrew King
                            </a>
                        </h3>
                        <p className="teamMemberRole">Backend/Frontend</p>
                    </div>
                    <div className="teamMember">
                        <img className="teamMemberImage" src={ayleenPic} alt="Team Member 2" />
                        <h3 className="teamMemberName">
                            <a href="https://www.linkedin.com/in/ayleen-durasno/" target="_blank" rel="noopener noreferrer">
                                Ayleen Durasno
                            </a>
                        </h3>
                        <p className="teamMemberRole">Frontend/UI</p>
                    </div>
                    <div className="teamMember">
                        <img className="teamMemberImage" src={bobbyPic} alt="Team Member 3" />
                        <h3 className="teamMemberName">
                            <a href="https://www.linkedin.com/in/bobby-putra/" target="_blank" rel="noopener noreferrer">
                                Bobby Putra
                            </a>
                        </h3>
                        <p className="teamMemberRole">Drone Manufacturing</p>
                    </div>
                    <div className="teamMember">
                        <img className="teamMemberImage" src={teamMember4} alt="Team Member 4" />
                        <h3 className="teamMemberName">
                            <a href="https://www.linkedin.com/in/kieran-burns-324668186/" target="_blank" rel="noopener noreferrer">
                                Kieran Burns
                            </a>
                        </h3>
                        <p className="teamMemberRole">APDS System</p>
                    </div>
                    <div className="teamMember">
                        <img className="teamMemberImage" src={sunitPic} alt="Team Member 5" />
                        <h3 className="teamMemberName">
                            <a href="https://www.linkedin.com/in/sunit-pradhan-3a7a19203/" target="_blank" rel="noopener noreferrer">
                                Sunit Pradhan
                            </a>
                        </h3>
                        <p className="teamMemberRole">Drone Flight Testing</p>
                    </div>
                </div>
            </section>
            <section className="aboutTeam">
                <div className="teamDescription">
                    <h2 className="teamDescriptionTitle">About the Team</h2>
                    <div className="statisticsContainer">
                        <p className="teamDescriptionText">
                            We are a team of five Electrical and Computer Engineering students at Rutgers University who came together with a vision to address a pressing issue in the United States that many people may not be aware of: the decline of pharmacies in rural areas. Due to small and dispersed populations, it has become increasingly difficult for pharmacies to remain profitable in these regions, leaving 1.6 million people living over 20 miles from the nearest one. Limited public transportation and reliance on personal vehicles, family, or friends for transport exacerbate the problem for those without easy access to a pharmacy. While mail-in services do exist, they can take days or even weeks to reach patients and are often subject to delays, causing major inconveniences for those in urgent need of medication. To tackle this issue, we came up with the idea of creating a pharmaceutical delivery drone called "Valkyrie." Our innovative drone aims to provide a fast and efficient method of delivering medications to people in rural areas who would otherwise have limited access to pharmacies, thus improving healthcare accessibility and enhancing the quality of life for those in underserved communities.
                        </p>
                        <div class="chartsContainer">
                            <div className="chart chartLeft">
                                <img className="chartImage1" src={pharmDataChart} alt="Pharmacy Data Chart" />
                                <p className="imageCaption1">Decline of rural independent pharmacies that were the only one in the community.</p>
                            </div>
                            <div className="chart chartRight">
                                <img className="chartImage2" src={pharmDataMap} alt="Pharmacy Data Map" />
                                <p className="imageCaption2">Colors represent the number of pharmacies in each area, red means none, yellow means only one.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="teamMoments">
                <div className="carousel-container-about">
                    <h2 className="carousel-title-about"><br></br>Team Moments</h2>
                    <div className="hero-carousel-about">
                        <div className="carousel-slides-about" 
                        style={{ 
                            transform:
                                windowWidth > 480
                                ? `translateX(-${activeSlide * 50}%)`
                                : `translateX(-${activeSlide * 0}%)`,}}>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-image-container-about ${activeSlide === index ? "active" : ""}`}
                                >
                                    <img className="carousel-image-about" src={image} alt="Team moment" />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-button prev-about" onClick={prevSlide}>
                            {'<'}--
                        </button>
                        <button className="carousel-button next-about" onClick={nextSlide}>
                            --{'>'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}



export default AboutUs;

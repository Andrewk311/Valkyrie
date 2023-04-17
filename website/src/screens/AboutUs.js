import './AboutUs.css';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import teamMember1 from './../Images/Dallas8.JPG';
import teamMember2 from './../Images/Dallas4.JPG';
import teamMember3 from './../Images/Dallas5.JPG';
import teamMember4 from './../Images/Dallas6.JPG';
import teamMember5 from './../Images/Dallas7.JPG';
import teamPhoto from './../Images/Dallas2.jpg';
import pharmDataChart from './../Images/PharmDataChart.png';
import pharmDataMap from './../Images/PharmData.png';

const images = [teamMember1, teamMember2, teamMember3, teamMember4, teamMember5];

function AboutUs() {

    const [activeSlide, setActiveSlide] = useState(0);
    const navigate = useNavigate();
    const topRef = useRef(null);

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
                        <img className="teamMemberImage" src={teamMember1} alt="Team Member 1" />
                        <h3 className="teamMemberName">
                            <a href="https://www.linkedin.com/in/andrew--king/" target="_blank" rel="noopener noreferrer">
                                Andrew King
                            </a>
                        </h3>
                        <p className="teamMemberRole">Backend/Frontend</p>
                    </div>
                    <div className="teamMember">
                        <img className="teamMemberImage" src={teamMember2} alt="Team Member 2" />
                        <h3 className="teamMemberName">
                            <a href="https://www.linkedin.com/in/ayleen-durasno/" target="_blank" rel="noopener noreferrer">
                                Ayleen Durasno
                            </a>
                        </h3>
                        <p className="teamMemberRole">Frontend/UI</p>
                    </div>
                    <div className="teamMember">
                        <img className="teamMemberImage" src={teamMember3} alt="Team Member 3" />
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
                        <img className="teamMemberImage" src={teamMember5} alt="Team Member 5" />
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
                <section classname="teamMoments">
                <div className="carousel-container-about">
                    <h2 className="carousel-title-about"><br></br>Team Moments</h2>
                    <div className="hero-carousel-about">
                        <div className="carousel-slides-about">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-image-container-about ${activeSlide === index ? "active" : ""
                                        }`}
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

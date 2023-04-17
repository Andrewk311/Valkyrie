import './How.css';
import { useNavigate } from 'react-router-dom';
import appImage from './../Images/Software.png';
import droneImage from './../Images/Drone.jpg';
import droneBoxImage from './../Images/Dallas5.JPG';
import React, { useRef, useState, useEffect } from 'react';
import appSignIn from './../Images/HowItBuiltPics/AppSignIn.png';
import appSignUp from './../Images/HowItBuiltPics/AppSignUp.png';
import pharmPortalLogin from './../Images/HowItBuiltPics/PharmPortalLogin.jpg';
import pharmPortalCreateAccount from './../Images/HowItBuiltPics/PharmPortalCreateAccount.jpg';
import cognito from './../Images/Logos/CognitoLogo.png'
import userAttributes from './../Images/HowItBuiltPics/userAttributes.jpg';
import locationConfirm from './../Images/HowItBuiltPics/LocationConfirm.PNG';
import settings from './../Images/HowItBuiltPics/Settings2.PNG';
import deliveryLocationGif from './../Images/HowItBuiltPics/DeliveryLocation.gif';
import googleMapsLogo from './../Images/HowItBuiltPics/GoogleMapsApi.png';
import expo from './../Images/Logos/ExpoLogo.png'
import productDB from './../Images/HowItBuiltPics/ProductDB.jpg';
import pharmPortalInventory from './../Images/HowItBuiltPics/PharmPortalInventory.jpg';
import browseScreenGif from './../Images/HowItBuiltPics/BrowseScreenGif2.gif';
import cartGif from './../Images/HowItBuiltPics/CartGif.gif';
import loginGif from './../Images/HowItBuiltPics/LoginGif.gif';
import webSocketAPI from './../Images/HowItBuiltPics/WebSocketAPI.jpg';
import ordersDynamo from './../Images/HowItBuiltPics/OrdersDynamo.jpg';
import connectionDynamo from './../Images/HowItBuiltPics/ConnectionDynamo.jpg';
import orderStatusGif from './../Images/HowItBuiltPics/OrderUpdateStatusGif.gif';
import restAPIs from './../Images/HowItBuiltPics/RESTAPIs.jpg';
import trackingGif from './../Images/HowItBuiltPics/TrackingGif.gif';
import missionPlannerTracking from './../Images/HowItBuiltPics/MissionPlannerTracking.png';



function How() {

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const topRef = useRef(null);
    const [selectedFeature, setSelectedFeature] = useState(null);

    useEffect(() => {
        topRef.current.scrollIntoView();
    }, []);

    function handleAboutUsClick() {
        navigate('/AboutUs')
    }

    function handleHomeClick() {
        navigate('/')
    }

    function handleCategoryClick(category) {
        setSelectedCategory(category);
    }

    function handleFeatureClick(feature) {
        setSelectedFeature(feature);
    }


    return (
        <div className="HowBuilt">
            <div ref={topRef} />
            <header className="howBuiltHeader">
                <button className="button-header button-margin-howBuilt" onClick={handleHomeClick}>
                    Go Back
                </button>
                <p className="header-text">VALKYRIE CAPSTONE GROUP 19</p>
            </header>
            <section className="howBuiltSection">
                <h1 className="howBuiltTitle">How We Built Valkyrie:</h1>

                <div className="categories">
                    <div className="category" onClick={() => handleCategoryClick({ title: 'App/Pharmacy Portal' })}>
                        <h2 className="category-title">App/Pharmacy Portal</h2>
                        <img className="category-image-app" src={appImage} alt="App" />
                        <p className="category-description">
                            App/Pharmacy Portal
                        </p>
                    </div>

                    <div className="category" onClick={() => handleCategoryClick({ title: 'The Drone' })}>
                        <h2 className="category-title">Drone</h2>
                        <img className="category-image-drone" src={droneImage} alt="Drone" />
                        <p className="category-description">
                            Drone
                        </p>
                    </div>

                    <div className="category" onClick={() => handleCategoryClick({ title: 'Drone Box System' })}>
                        <h2 className="category-title">Payload Delivery System</h2>
                        <img className="category-image-box" src={droneBoxImage} alt="Drone Box" />
                        <p className="category-description">
                            Payload System
                        </p>
                    </div>
                </div>
                {!selectedCategory && (
                    <div className='selected-category-info'>
                        <h2>Select one of the above categories to learn more about how it was made!</h2>
                    </div>
                )}
                {selectedCategory && (
                    <div className="selected-category-info">
                        <h2>{selectedCategory.title} Features:</h2>
                        <div className="features-and-tabs">
                            {selectedCategory.title === 'App/Pharmacy Portal' && (
                                <div>
                                    <div className="feature-tabs">
                                        <button onClick={() => handleFeatureClick("signup")}>Sign-up/Login</button>
                                        <button onClick={() => handleFeatureClick("delivery")}>Delivery Address Confirmation</button>
                                        <button onClick={() => handleFeatureClick("product")}>Product Screens/Cart</button>
                                        <button onClick={() => handleFeatureClick("orderStatus")}>Order Status Updates</button>
                                        <button onClick={() => handleFeatureClick("tracking")}>Tracking/Drone Flight</button>
                                    </div>
                                    {/* App/Pharmacy Portal content */}
                                    {selectedFeature === "signup" && (
                                        <div className="feature-section">
                                            <h3>Sign-up/Login:</h3>
                                            <div className="feature-content">
                                                <div className="image-container-login">
                                                    <img className="feature-image whiteAppImages" src={loginGif} alt="gif" />
                                                    <img className="feature-image whiteAppImages" src={appSignUp} alt="Image 2" />
                                                    <img className="feature-image-pharmLog" src={pharmPortalLogin} alt="Image 3" />
                                                    <img className="feature-image-pharmCreate" src={pharmPortalCreateAccount} alt="Image 3" />
                                                    <img className="feature-image" src={cognito} alt="Image 4" />
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    The Valkyrie app and Pharmacy Portal both have a seamless sign-up and login process powered by AWS Cognito. AWS Cognito is a robust authentication and user management service that offers a variety of features, such as user registration, authentication, and access control. By leveraging this, our Pharmacy Portal and App benefit from its security measures, including encryption, and multi-factor authentication. The sign-up process is quick and straightforward, allowing you to create a new account with just a few clicks. Once registered, you can access either application with your secure login credentials. In case you forget your password, the system also provides an easy-to-use password reset feature.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedFeature === "delivery" && (
                                        <div className="feature-section">
                                            <h3>Delivery Address Confirmation:</h3>
                                            <div className="feature-content">
                                                <div className="image-container">
                                                    <img className="feature-image-userAtt" src={userAttributes} alt="Image 1" />
                                                    <img className="feature-image whiteAppImages" src={settings} alt="Image 2" />
                                                    <img className="feature-image whiteAppImages" src={locationConfirm} alt="Image 3" />
                                                    <img className="feature-image whiteAppImages" src={deliveryLocationGif} alt="gif" />
                                                    <div className="logo-container">
                                                        <img className="feature-image logo-image" src={cognito} alt="Image 1" />
                                                        <img className="feature-image logo-image" src={expo} alt="Image 2" />
                                                        <img className="feature-image logo-image" src={googleMapsLogo} alt="Image 3" />
                                                    </div>
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    Users' delivery information, including address and coordinates, is saved in their Cognito user attributes for future sessions. Upon entering their address on the settings page and submitting it, the Google Maps API is used to retrieve the coordinates. An Expo mapview is then displayed with a draggable marker that allows users to fine-tune the delivery location. When the user confirms the delivery location, the new coordinates are saved to their Cognito attributes. The tracking page displays the surrounding area around the initial marker.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedFeature === "product" && (
                                        <div className="feature-section">
                                            <h3>Product Screens/Cart:</h3>
                                            <div className="feature-content">
                                                <div className="image-container">
                                                    <img className="feature-image-productDB" src={productDB} alt="Image 1" />
                                                    <img className="feature-image-productPharm" src={pharmPortalInventory} alt="Image 2" />
                                                    <img className="feature-image whiteAppImages" src={browseScreenGif} alt="gif" />
                                                    <img className="feature-image whiteAppImages" src={cartGif} alt="gif" />
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    Talk about how we load all the product, show ordering and cart stuff as well.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedFeature === "orderStatus" && (
                                        <div className="feature-section">
                                            <h3>Order Status Updates:</h3>
                                            <div className="feature-content">
                                                <div className="image-container-order">
                                                    <img className="feature-image-websocket" src={webSocketAPI} alt="Image 1" />
                                                    <img className="feature-image-orderUpdate" src={orderStatusGif} alt="gif" />
                                                    <div className="table-container">
                                                        <img className="feature-image-otherDB" src={ordersDynamo} alt="Image 1" />
                                                        <img className="feature-image-otherDB" src={connectionDynamo} alt="Image 2" />
                                                    </div>
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    The order status updates between the app and pharmacy portal are managed through an AWS API Gateway WebSocket, AWS Lambdas for routing, a DynamoDB table for orders, and a DynamoDB table for connection data. The WebSocket has a connect route to store user data, an orderStatusUpdate route for sending personalized order updates to users, an email route for processing JSON emails, and a ping route to maintain the connection. When a user places an order, the DynamoDB table updates, and a JSON with status "Order Placed" is sent to the pharmacist. The pharmacist's table refreshes and allows sending "Order Confirmed" and "Order Shipped" messages via buttons, which update the app client. Once the order is delivered, the app notifies the pharmacy, and the order becomes inactive.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedFeature === "tracking" && (
                                        <div className="feature-section">
                                            <h3>Tracking/Drone Flight:</h3>
                                            <div className="feature-content">
                                                <div className="image-container">
                                                    <img className="feature-image-rest" src={restAPIs} alt="Image 1" />
                                                    <img className="feature-image whiteAppImages" src={trackingGif} alt="gif" />
                                                    <img className="feature-image-MP" src={missionPlannerTracking} alt="Image 2" />
                                                    {/* <img className="feature-image whiteAppImages" src={locationConfirm} alt="Image 3" />
                                                    <img className="feature-image whiteAppImages" src={deliveryLocationGif} alt="gif" />
                                                    <div className="logo-container">
                                                        <img className="feature-image logo-image" src={cognito} alt="Image 1" />
                                                        <img className="feature-image logo-image" src={expo} alt="Image 2" />
                                                        <img className="feature-image logo-image" src={googleMapsLogo} alt="Image 3" />
                                                    </div> */}
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    Drone communication uses the Mavlink Python library in AWS Lambdas, connecting to MissionPlanner flight software. When the pharmacist confirms transit, an API Gateway REST API triggers an AWS Lambda, sending the drone coordinates and flightplan, including a 20-second ground pause before returning. Upon initiating transit, drone position tracking starts on the tracking page. Another API Gateway REST API, running every 3 seconds, calls a Lambda to retrieve the drone's latitude and longitude, updating the map. When the drone delivers the package, the user confirms delivery, marking it as "Order Delivered."
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="features-and-tabs">
                            {selectedCategory.title === 'The Drone' && (
                                <div>
                                    <div className="feature-tabs">
                                        <button onClick={() => handleFeatureClick("parts")}>Parts</button>
                                        <button onClick={() => handleFeatureClick("battery")}>Battery</button>
                                        <button onClick={() => handleFeatureClick("autonomous flight")}>Autonomous Flight</button>
                                    </div>
                                    {/* Drone */}
                                    {selectedFeature === "parts" && (
                                        <div className="feature-section">
                                            <h3>Parts:</h3>
                                            <div className="feature-content">
                                                <div className="image-container-login">
                                                    <img className="feature-image whiteAppImages" src={loginGif} alt="gif" />
                                                    <img className="feature-image whiteAppImages" src={appSignUp} alt="Image 2" />
                                                    <img className="feature-image-pharmLog" src={pharmPortalLogin} alt="Image 3" />
                                                    <img className="feature-image-pharmCreate" src={pharmPortalCreateAccount} alt="Image 3" />
                                                    <img className="feature-image" src={cognito} alt="Image 4" />
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    The hardware of the drone is based off of a hexacopter frame from QWinOut. The hexacopter frame was chosen for this project as research concluded it will be safer to implement with a payload delivery compared to a quadcopter frame. The drone flies with a total of six motors that are rated at 350 KV. The drone also includes six 40-amp ESC that are to control the motor’s rpm during its flight. The propellers chosen for the drone were be measured at 15 inches in diameter and are made from carbon fiber.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedFeature === "battery" && (
                                        <div className="feature-section">
                                            <h3>Battery:</h3>
                                            <div className="feature-content">
                                                <div className="image-container">
                                                    <img className="feature-image-userAtt" src={userAttributes} alt="Image 1" />
                                                    <img className="feature-image whiteAppImages" src={settings} alt="Image 2" />
                                                    <img className="feature-image whiteAppImages" src={locationConfirm} alt="Image 3" />
                                                    <img className="feature-image whiteAppImages" src={deliveryLocationGif} alt="gif" />
                                                    <div className="logo-container">
                                                        <img className="feature-image logo-image" src={cognito} alt="Image 1" />
                                                        <img className="feature-image logo-image" src={expo} alt="Image 2" />
                                                        <img className="feature-image logo-image" src={googleMapsLogo} alt="Image 3" />
                                                    </div>
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    The batteries for the prototype are 2 Lithium-Polymer Ion batteries rated at, 3200mAh. These batteries are 4 celled and when connected parallel, we calculated that the average flight time for the drone carrying a payload less than 5 pounds will be around 30 minutes before it needs to be recharged.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedFeature === "autonomous flight" && (
                                        <div className="feature-section">
                                            <h3>Autonomous Flight:</h3>
                                            <div className="feature-content">
                                                <div className="image-container">
                                                    <img className="feature-image-productDB" src={productDB} alt="Image 1" />
                                                    <img className="feature-image-productPharm" src={pharmPortalInventory} alt="Image 2" />
                                                    <img className="feature-image whiteAppImages" src={browseScreenGif} alt="gif" />
                                                    <img className="feature-image whiteAppImages" src={cartGif} alt="gif" />
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    The autonomous flight was achieved by using a PixHawk 5 and the functions that come along with it. The PixHawk allows us to use the flight-planning software, Mission Planner, which allows autonomous flight by storing missions onto the PixHawk for deliveries. The Mission Planner software is then be connected to the Pixhawk using wireless telemetry and GPS modules. The wireless telemetry module is connected via USB cable provided by the PixHawk kit.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            )}
                        </div>
                        {selectedCategory.title === 'Drone Box System' && (
                            <div>
                                
                                <div className='feature-tabs'>
                                    <button onClick={() => handleFeatureClick("Box")}>Box</button>
                                    <button onClick={() => handleFeatureClick("Electrical")}>Electrical Components</button>
                                </div>
                                {/* App/Pharmacy Portal content */}
                                {selectedFeature === "Box" && (
                                    <div className="feature-section">
                                        {/* Sign-up/Login content */}
                                    </div>
                                )}
                                {selectedFeature === "Electrical" && (
                                    <div className="feature-section">
                                        {/* Delivery Address Confirmation content */}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )
                }
            </section >
        </div >
    );
}



export default How;

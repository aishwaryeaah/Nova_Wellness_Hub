import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DomainList.css'; // Import your CSS file for component-specific styles
import DashFooter from "../../NavComponents/DashFooter";
import MentalHealthImage from '../images/mental_health_image.jpg';
import SexualHealthImage from '../images/sexual_health_image.jpg';
import CancerImage from '../images/cancer_image.jpg';
import MenstrualHealthImage from '../images/menstrual_health_image.jpg';
import ResilienceImage from '../images/resilience_image.jpg';
import WellnessImage from '../images/wellness_image.jpg';

const DomainList = () => {
    // State to keep track of visibility of text areas
    const [textAreaVisibility, setTextAreaVisibility] = useState(Array(5).fill(false));

    // Function to toggle visibility of text area based on index
    const toggleVisibility = (index) => {
        const updatedVisibility = [...textAreaVisibility];
        updatedVisibility[index] = !updatedVisibility[index];
        setTextAreaVisibility(updatedVisibility);
    };

    return (
        <div>
            <div className="learn-dashboard">
                <div className="container">
                    <div className="col-md-12 text-center heading" style={{ backgroundColor: "#ECF87F", padding: '20px', borderRadius: '10px', animation: 'fadeIn 2s ease-out' }}>
                        <h2 style={{ color: '#333', fontFamily: 'Anta, san-serif', letterSpacing: '3px' }}>Women Know Better</h2>
                        <h4 style={{ fontFamily: "Anta, san-serif", fontSize: '1rem', letterSpacing: '2px', marginTop: '-10px', color: '#333' }}>Strengthening Communities by Empowering Women</h4>

                        <p className="paragraph" style={{ color: '#333', paddingBottom: '20px', fontFamily: 'Rubik, san-serif' }}>
                            We are committed to elevating women’s knowledge with medically verified and community-driven content sourced. Our platform offers a wealth of articles covering various aspects of women's health and wellness, providing valuable insights and information on topics such as reproductive health, mental well-being, nutrition, fitness, and much more. Whether you're seeking advice, inspiration, or simply want to expand your understanding, our platform is here to support you on your journey to better health. Join us in building a community where women can access trustworthy information, support each other, and take control of their well-being.
                        </p>
                    </div>

                    <div className="domains-container">
                        <h2>All Categories</h2>
                        <div className="domain-list-container">
                            <div className="domain-box" style={{ backgroundColor: "#F6C2B3" }}>
                                <img src={MentalHealthImage} alt="Mental Health" className="domain-image" />
                                <h3>Mental Health</h3>
                                <p>A crucial aspect of overall well-being, encompassing emotional, psychological, and social well-being.</p>
                                <Link to="/mental_health">Explore</Link>
                            </div>
                            <div className="domain-box" style={{ backgroundColor: "#FB6B44" }}>
                                <img src={SexualHealthImage} alt="Sexual Health" className="domain-image" />
                                <h3>Sexual Health</h3>
                                <p>Integral to overall health and involves a positive approach to sexuality and sexual relationships.</p>
                                <Link to="/sexual_health">Explore</Link>
                            </div>
                            <div className="domain-box" style={{ backgroundColor: "#68A0D5" }}>
                                <img src={CancerImage} alt="Women-related Cancers" className="domain-image" />
                                <h3>Women-related Cancers</h3>
                                <p>Cancers that specifically affect women, such as cervical cancer, highlighting the importance of regular screenings and awareness.</p>
                                <Link to="/cancer">Explore</Link>
                            </div>
                            <div className="domain-box" style={{ backgroundColor: "#FCAC94" }}>
                                <img src={MenstrualHealthImage} alt="Women's Menstrual Health" className="domain-image" />
                                <h3>Women's Menstrual Health</h3>
                                <p>An essential aspect of women's health, involving the menstrual cycle and related issues like period pain, irregularities, and menopause.</p>
                                <Link to="/menstrual_health">Explore</Link>
                            </div>
                            <div className="domain-box" style={{ backgroundColor: "#044189" }}>
                                <img src={ResilienceImage} alt="Emotional Intelligence and Resilience" className="domain-image" />
                                <h3>Emotional Intelligence</h3>
                                <p>Key skills for navigating life's challenges, fostering self-awareness, empathy, and the ability to bounce back from adversity.</p>
                                <Link to="/resilience">Explore</Link>
                            </div>
                            <div className="domain-box" style={{ backgroundColor: "#91C6CA" }}>
                                <img src={WellnessImage} alt="Wellness" className="domain-image" />
                                <h3>Wellness & Optimal Living</h3>
                                <p>Staying healthy and well.</p>
                                <Link to="/wellness">Explore</Link>
                            </div>
                        </div>

                        <div className="faq-container">
                            <h2>Frequently Asked Questions (FAQ)</h2>
                            {/* FAQ items */}
                            {[1, 2, 3, 4, 5].map((question, index) => (
                                <div key={index} className="faq-item">
                                    <button className="openTextAreaBtn" onClick={() => toggleVisibility(index)}>
                                        {index === 0 && <b>Q1. How will I feel when I have my period?</b>}
                                        {index === 1 && <b>Q2. Can I get pregnant while on my period?</b>}
                                        {index === 2 && <b>Q3. Is my vaginal discharge normal?</b>}
                                        {index === 3 && <b>Q4. Are there specific nutritional needs that women should focus on?</b>}
                                        {index === 4 && <b>Q5. What are the signs of a urinary tract infection (UTI)?</b>}
                                    </button>
                                    {/* Conditionally rendering text area based on visibility state */}
                                    {textAreaVisibility[index] && (
                                        <div className="textAreaContainer" style={{ fontFamily: 'Rubik, san-serif' }}>
                                            {/* Custom text content for each question */}
                                            {index === 0 && (
                                                <div>
                                                    <p>
                                                        Some girls feel absolutely normal during their period, while other girls have a lot of period pain such as cramps. Some girls may have very little PMS symptoms, while others may feel tired, bloated, and more emotional. It’s important to remember that each person is different and that you can even react differently from month to month.
                                                    </p>
                                                    <p>
                                                        Things like healthy eating and exercise can help you feel better no matter where you are in your monthly cycle. Try incorporating these things into your daily routine and see how it makes you feel!
                                                    </p>
                                                </div>
                                            )}
                                            {index === 1 && (
                                                <div>
                                                    <p>
                                                        While it is possible for women to get pregnant by having sex during their period, your chances of conceiving are rather low because there’s typically no egg to be fertilized at that time. However, women tend to ovulate at different times during their cycle or have shortened cycles, so if you ovulate quickly after your cycle is over (you get your period), it may be possible for you to become pregnant.
                                                    </p>
                                                    <p>
                                                        If you don’t want to become pregnant, we recommend using a condom or alternate form of birth control, or abstaining from sexual activity.
                                                    </p>
                                                </div>
                                            )}
                                            {index === 2 && (
                                                <div>
                                                    <p>
                                                        The amount of vaginal discharge you experience typically changes with your menstrual cycle. If you are experiencing discharge that is clear with either no scent or a light musky odor, you are likely ovulating and the discharge is normal. However, other types of discharge typically signal an infection and should be checked out by your doctor, including:
                                                    </p>
                                                    <ul>
                                                        <li>If your discharge is white with a texture resembling cottage cheese and you are itchy, you could have a yeast infection.</li>
                                                        <li>If you notice a fishy-smelling discharge that may be accompanied by pain or irregular bleeding, you may have a bacterial infection. These types of infections are typically caused by regular douching or wiping from back to front after using the restroom.</li>
                                                        <li>If your discharge is foul-smelling and/or frothy, it could be a sign of a sexually transmitted infection, like chlamydia, gonorrhea, or trichomoniasis.</li>
                                                    </ul>
                                                </div>
                                            )}
                                            {index === 3 && (
                                                <div>
                                                    <p>
                                                        Women should ensure they get enough calcium and vitamin D for bone health, iron for preventing anemia, and folic acid for reproductive health, especially during pregnancy. A balanced diet rich in fruits, vegetables, lean proteins, and whole grains is important for overall well-being.
                                                    </p>
                                                </div>
                                            )}
                                            {index === 4 && (
                                                <div>
                                                    <p>
                                                        The most common symptoms of a UTI are pain or burning when you urinate, frequent urination, and cloudy or bloody urine. If you think you may have a UTI, it is important to see your doctor right away.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                <DashFooter />
        </div>

    );
}

export default DomainList;

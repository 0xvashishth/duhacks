import React from 'react';
import ReactDOM from 'react-dom';
import './theme.css';
// import anu from './images/Aneri_Sonani.jpg';


function ThemeType(props) {
    return (
        <div className="HackathonTheme">

            <div class="wrapper">

                <div class="cards_wrap">
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/env.jpg" /><br/><br/>
                            <div class="role_name">Environment</div>
                            
                            {/*<div class="film">The list of issues surrounding our environment go on.These environmental problems arise from conflicts between nature and humans. Develop a Solution to reduce Envirnmental problem.</div>*/}
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/open_inno.jpg" /><br/><br/>
                            <div class="role_name">Open Innovation</div>
                            
                            {/*<div class="film">Have any ideas that don't fit into any of the categories above? Worry not. We encourage you to test your ideas and discover solutions to problems without any limitations.</div>*/}
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/web3.jpg" /><br/><br/>
                            <div class="role_name">Web3</div>
                            
                           {/* <div class="film">Web 3.0 is the third generation of internet services for websites and apps that will focus on providing a data-driven and Semantic Web employing a machine-based understanding of data.</div>*/}
                        </div>
                    </div>
            
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/education.png" /><br/><br/>
                            <div class="role_name">Education</div>
                            
                           {/* <div class="film">Since the pandemic, the educational system has had to adjust to the new normal. As a result, we urge you to create something that modernises education and makes it accessible to everybody.</div>*/}
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src= "./images/health_care.jpg"/><br/><br/>
                            <div class="role_name">Health Care</div>
                            
                            {/*<div class="film">Develop Solution to help Society Cope with the Drastic impact. The Healthcare track strives to develop splitting initiatives that address a variety of health-related issues.</div>*/}
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/ai.jpg" /><br/><br/>
                            <div class="role_name">AI/ML</div>
                            
                            {/*<div class="film">AI is the intelligence demonstrated by computers as a result of their perception of their surroundings. Al-based devices are capable of taking independent actions in order to achieve a specific goal.</div>*/}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ThemeType;
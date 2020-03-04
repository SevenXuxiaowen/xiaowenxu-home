import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class Main extends React.Component{

    render() {
        return (
            <div id="container" ref={this.container}>
                <Fade top cascade>
                <div className="header">
                    <div className="m-box"><span className="m-text">About</span>.01</div>
                    <div className="m-box"><span className="m-text">Skills</span>.02</div>
                    <div className="m-box"><span className="m-text">Work</span>.03</div>
                    <div className="m-box"><span className="m-text">Contact</span>.04</div>
                    <br/>
                    <div className="m-box btn-cv">Resume</div>
                </div></Fade>

                <div className="page-main">
                    <Fade left>
                    <div><img className="img-pixel-1" width="450px" alt="icon" src='https://media1.giphy.com/media/EcjPLxqN30R1piUOPF/giphy.gif?cid=790b76114a8139ef07a698ca0c9f5913eaf5e739d10e23c4&rid=giphy.gif'/></div>
                    </Fade>
                    <Fade top cascade>
                    <div className="p-main">
                        <div className="name">Xu <span className="green">S</span>even</div>
                        <br/>
                        <p className="grey" style={{width:"500px"}}>I'm a <span className="green">software developer</span> based in Bay area.</p>
                        <p className="grey" style={{width:"500px"}}>Graduated from <span className="green">Carnegie Mellon University</span>, I develop and design exceptional websites and applications that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
                        <p><span className="flashing" style={{color: "rgb(0, 255, 0)"}}>_</span></p>
                        <br/>
                    </div>
                    </Fade>
                </div>


                <div className="page-main">
                    <Fade left>
                    <div><img className="img-pixel-2" width="450px" alt="icon" src="img/pixel.gif"/></div>
                    </Fade>
                    <Fade top cascade>
                    <div className="p-skill">
                        <div className="grey">I've been working with:</div>
                        <br/>
                        <div className="skills grey">
                            <div><i className="material-icons i-skill">arrow_right</i>Java</div>
                            <div><i className="material-icons i-skill">arrow_right</i>Javascript</div>
                            <div><i className="material-icons i-skill">arrow_right</i>Node.js</div>
                            <div><i className="material-icons i-skill">arrow_right</i>React</div>
                            <div><i className="material-icons i-skill">arrow_right</i>Redux</div>
                            <div><i className="material-icons i-skill">arrow_right</i>MongoDB</div>
                            <div><i className="material-icons i-skill">arrow_right</i>HTML</div>
                            <div><i className="material-icons i-skill">arrow_right</i>CSS</div>
                            <div><i className="material-icons i-skill">arrow_right</i>Bootstrap</div>
                            <div><i className="material-icons i-skill">arrow_right</i>semanticUI</div>
                            <div><i className="material-icons i-skill">arrow_right</i>d3.js</div>
                            <div><i className="material-icons i-skill">arrow_right</i>thress.js</div>
                            <div><i className="material-icons i-skill">arrow_right</i><span className="flashing" style={{color: "rgb(0, 255, 0)"}}>_</span></div>
                        </div>
                    </div>
                    </Fade>
                </div>

                <div className="page-works">
                    <Fade left cascade>
                    <div className="works-container">
                        <Flip left>
                        <div className="works-grid">
                            <div className="prgt-content grey">
                                <div className="title green">We'd</div>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/Cannabis-Annotator">GitHub</a>
                                    <a href="https://p3-oyz1d0pgp.now.sh/">Demo</a>
                                </div>
                                <p>Online free-drawing annotation tool to find cannabis anomalies</p>
                                <div><i className="material-icons i-skill">arrow_right</i>Node.js</div>
                                <div><i className="material-icons i-skill">arrow_right</i>jQuery</div>
                                <div><i className="material-icons i-skill">arrow_right</i>semantic UI</div>
                                <div><i className="material-icons i-skill">arrow_right</i>paper.js</div>
                            </div>
                        </div>
                        </Flip>
                        <Flip left>
                        <div className="works-grid">
                            <div className="prgt-content grey">
                                <div className="title green">Trauma Forest</div>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/Trauma-Forest">GitHub</a>
                                    <a href="https://sevenxu.com/">Demo</a>
                                </div>
                                <p>Web2.0 development</p>
                                <div><i className="material-icons i-skill">arrow_right</i>Node.js</div>
                                <div><i className="material-icons i-skill">arrow_right</i>Express</div>
                                <div><i className="material-icons i-skill">arrow_right</i>MongoDB</div>
                                <div><i className="material-icons i-skill">arrow_right</i>React.js</div>
                                <div><i className="material-icons i-skill">arrow_right</i>semantic UI</div>
                            </div>
                        </div>
                        </Flip>
                        <Flip left>
                        <div className="works-grid">
                            <div className="prgt-content grey">
                                <div className="title green">Smart Items</div>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/smart-items">GitHub</a>
                                    <a href="https://sevenxu.com/">Demo</a>
                                </div>
                                <p>Walmart product search and recommendation engine</p>
                                <div><i className="material-icons i-skill">arrow_right</i>Node.js</div>
                                <div><i className="material-icons i-skill">arrow_right</i>Express</div>
                                <div><i className="material-icons i-skill">arrow_right</i>MongoDB</div>
                                <div><i className="material-icons i-skill">arrow_right</i>React.js</div>
                                <div><i className="material-icons i-skill">arrow_right</i>Bootstrap</div>
                            </div>
                        </div>
                        </Flip>
                        <Flip left>
                        <div className="works-grid">
                            <div className="prgt-content grey">
                                <div className="title green">MeHungry</div>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/NPL_Bot_Development">GitHub</a>
                                    <a href="https://pure-taiga-37357.herokuapp.com/">Demo</a>
                                </div>
                                <p>Embedded NLP Chatbot</p>
                                <div><i className="material-icons i-skill">arrow_right</i>DialogFlow</div>
                                <div><i className="material-icons i-skill">arrow_right</i>Node.js</div>
                                <div><i className="material-icons i-skill">arrow_right</i>Express</div>
                                <div><i className="material-icons i-skill">arrow_right</i>React.js</div>
                                <div><i className="material-icons i-skill">arrow_right</i>materialize</div>
                            </div>
                        </div>
                        </Flip>
                    </div>
                    </Fade>
                </div>

                <div className="page-ct">
                    <div className="p-contact">
                        <div className="title green">Contact</div>
                        <br/>
                        <p>C (+1) 412 419 5890</p>
                        <p>E xiaowenxu1992@gmail.com</p>
                        <p>A Fremont, CA 94536</p>
                        <div className="hint title green flashing">⇡</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Main;
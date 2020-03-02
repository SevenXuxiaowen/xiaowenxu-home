import React from 'react';
import Fade from 'react-reveal/Fade';

class Main extends React.Component{

    render() {
        return (
            <div id="container" ref={this.container}>
                <div className="big-rec"></div>
                <div className="page">
                    <Fade top cascade>
                    <div className="p-main">
                        <img width="250px" alt="icon" src="img/pixel.gif"/>
                        <div className="title">Seven Xu</div>
                        <p>Software Developer</p>
                        <br/>
                        <p className="grey">Java Javascript Node.js React MongoDB HTML CSS</p>
                        {/* <p className="grey"></p> */}
                        <p className="grey">Redux Bootstrap semanticUI d3<span className="flashing">_</span></p>
                        
                        <div className="hint title">⇣</div>
                    </div>
                    </Fade>
                </div>

                <div className="page p-1">
                    <div className="pjct-content">
                        
                        <div className="pj-text">
                            <Fade top cascade>
                            <div>
                                <div className="title">We'd</div>
                                <p>Online free-drawing smart annotation tool to find cannabis anomalies</p>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/Cannabis-Annotator">GitHub</a>
                                    <a href="https://p3-oyz1d0pgp.now.sh/">Demo</a>
                                </div>
                                <p>node.js, jQuery, semantic UI, paper.js</p>
                                <p className="grey">Transfer the drawing concepts in Adobe Illustrator like vectors, layers, segments to build multiple drawing tools and raster filter functions.</p>
                            </div>
                            </Fade>
                        </div>
                        <Fade>
                        <div className="pj-img">
                            <img width="100%" alt="p1" src="img/1.gif"/>
                        </div>
                        </Fade>
                    </div>
                </div>

                <div className="page p-2">
                    <div className="pjct-content">
                        <div className="pj-text">
                            <Fade top cascade>
                            <div>
                                <div className="title">Trauma Forest</div>
                                <p>Web2.0 development</p>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/Trauma-Forest">GitHub</a>
                                    <a href="https://sevenxu.com/">Demo</a>
                                </div>
                                <p>Node.js, Express, MongoDB, React.js, semantic UI</p>
                                <p className="grey">Web social community to help release the pressure of group who are in the shadow of childhood trauma, where the user can create, post and edit their story as well as write comments of other’s story. </p>
                                <p className="grey">Algorithms support smart content feeding, search, user dashboard, notification badges, log-in/out, vote/tag/favorite system, natural language input searching, user-oriented suggestions.</p>
                            </div>
                            </Fade>
                        </div>
                        <Fade>
                        <div className="pj-img">
                            <img width="100%" alt="p2" src="img/2.gif"/>
                        </div>
                        </Fade>
                    </div>
                </div>

                <div className="page p-4">
                    <div className="pjct-content">
                        <div className="pj-text">
                            <Fade top cascade>
                            <div>
                                <div className="title">Smart Items</div>
                                <p> Embedded NLP Chatbot</p>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/smart-items">GitHub</a>
                                    <a href="https://sevenxu.com/">Demo</a>
                                </div>
                                <p>Node.js, Express, MongoDB, React.js, Bootstrap</p>
                                <p className="grey">Responsive web application to display Walmart product search results and rank-ordered recommendations.</p>
                            </div>
                            </Fade>
                        </div>
                        <Fade>
                        <div className="pj-img">
                            <img width="100%" alt="p4" src="img/4.gif"/>
                        </div>
                        </Fade>
                    </div>
                </div>
                
                <div className="page p-3">
                    <div className="pjct-content">
                        <div className="pj-text">
                            <Fade top cascade>
                            <div>
                                <div className="title">MeHungry</div>
                                <p> Embedded NLP Chatbot</p>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/NPL_Bot_Development">GitHub</a>
                                    <a href="https://pure-taiga-37357.herokuapp.com/">Demo</a>
                                </div>
                                <p>DialogFlow, Node.js, Express, React.js, materialize</p>
                                <p className="grey">NPL Bot who can chat with you while help you book table and order meals.</p>
                            </div>
                            </Fade>
                        </div>
                        <Fade>
                        <div className="pj-img">
                            <img width="100%" alt="p3" src="img/3.gif"/>
                        </div>
                        </Fade>
                    </div>
                </div>

                <div className="page ">
                    <div className="p-contact">
                        <div className="title">Contact</div>
                        <br/>
                        <p>C (+1) 412 419 5890</p>
                        <p>E xiaowenxu1992@gmail.com</p>
                        <p>A Fremont, CA 94536</p>
                        <div className="hint title">⇡</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Main;
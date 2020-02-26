import React from 'react'
// import ReactDOM from 'react-dom'
import ScrollSnap from 'scroll-snap'

const snapConfig = {
    scrollSnapDestination: '0% 100%',
    scrollTimeout: 50,
    scrollTime: 300,
}

class Main extends React.Component{
    container = React.createRef();
    bindScrollSnap() {
        function callback() {
          // optional callback
        }
    
        const element = this.container.current
        const snapObject = new ScrollSnap(element, snapConfig)
        snapObject.bind(callback)
    }

    componentDidMount() {
        this.bindScrollSnap()
    }

    render() {
        return (
            <div id="container" ref={this.container}>
                <div className="page">
                    <div className="p-main">
                        <div className="title">Seven Xu</div>
                        <br/>
                        <p>Software Developer</p>
                        <br/>
                        <p className="grey">Java Javascript HTML CSS</p>
                        <p className="grey">Node.js React MongoDB</p>
                        <p className="grey">Bootstrap semanticUI d3</p>
                        <div className="hint title">⇣</div>
                    </div>
                </div>

                <div className="page p-1">
                    <div className="pjct-content">
                        <div className="pj-text">
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
                        </div>
                        <div className="pj-img">image/gif</div>
                    </div>
                </div>

                <div className="page p-2">
                    <div className="pjct-content">
                        <div className="pj-text">
                            <div>
                                <div className="title">Trauma Forest</div>
                                <p>Web2.0 development</p>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/Trauma-Forest">GitHub</a>
                                    <a href="#">Demo</a>
                                </div>
                                <p>Node.js, Express, MongoDB, React.js, semantic UI</p>
                                <p className="grey">Web social community to help release the pressure of group who are in the shadow of childhood trauma, where the user can create, post and edit their story as well as write comments of other’s story. </p>
                                <p className="grey">Algorithms support smart content feeding, search, user dashboard, notification badges, log-in/out, vote/tag/favorite system, natural language input searching, user-oriented suggestions.</p>
                            </div>
                        </div>
                        <div className="pj-img white">image/gif</div>
                    </div>
                </div>
                
                <div className="page p-3">
                    <div className="pjct-content">
                        <div className="pj-text">
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
                        </div>
                        <div className="pj-img white">image/gif</div>
                    </div>
                </div>

                <div className="page p-4">
                    <div className="pjct-content">
                        <div className="pj-text">
                            <div>
                                <div className="title">Smart Items</div>
                                <p> Embedded NLP Chatbot</p>
                                <div>
                                    <a href="https://github.com/SevenXuxiaowen/smart-items">GitHub</a>
                                    <a href="#">Demo</a>
                                </div>
                                <p>Node.js, Express, MongoDB, React.js, Bootstrap</p>
                                <p className="grey">Responsive web application to display Walmart product search results and rank-ordered recommendations.</p>
                            </div>
                        </div>
                        <div className="pj-img">image/gif</div>
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
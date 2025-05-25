import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AboutOne = ({ className, inVideoBg }) => {
    return (
        <div className={`about-section pb-100 ${className}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        {
                            inVideoBg ?
                                <div className="about-wrap" data-animation="fade-zoom-in" data-aos-offset="100">
                                    <div className="about-video-wrap">
                                        <video className="about-video" src="/img/all-img/video-3.mp4" playsInline autoPlay muted loop>
                                        </video>
                                    </div>
                                </div>
                                :
                                <div className="img-wrapper" data-animation="fade-zoom-in" data-delay={0.1}>
                                    <div className="img-box">
                                        <img className="image-box-item" src="/img/all-img/about-1.png" alt="item Platform" />
                                        <img className="image-box-item" src="/img/all-img/about-3.png" alt="AI Technology Stack" />
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="about-content" data-animation="fade-up" data-delay={0.2}>
                            <div className="sub-title-2">
                                <p>What item Offers</p>
                            </div>
                            <h2>Build and Deploy AI Solutions at Scale</h2>
                            <p>Our comprehensive item provides access to cutting-edge AI agents, machine learning models, and intelligent systems. From MCP agents to RAG systems, we enable businesses to harness the power of artificial intelligence for innovation and growth.</p>
                            <ul>
                                <li><i className="bx bx-check" /> Multi-Modal Cognitive Processing (MCP) Agents</li>
                                <li><i className="bx bx-check" /> Large Language Model Fine-tuning API Hub</li>
                                <li><i className="bx bx-check" /> Retrieval-Augmented Generation (RAG) Systems</li>
                                <li><i className="bx bx-check" /> Intelligent Knowledge Base Management</li>
                                <li><i className="bx bx-check" /> AI-Powered API Hub & Integrations</li>
                            </ul>
                            <Link className="default-btn" to="/about"> <span>Explore AI Solutions</span> <i className="bx bx-chevron-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

AboutOne.propTypes = {
    className: PropTypes.string,
    inVideoBg: PropTypes.bool
}

export default AboutOne
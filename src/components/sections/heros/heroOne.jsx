// React import removed as not needed for JSX
import { Link } from 'react-router-dom'

const HeroOne = () => {
  return (
    <div className="hero-section-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content-2">
              <div className="sub-title-2" data-animation="fade-zoom-in" data-delay={0.4}>
                <p>Global AI Marketplace</p>
              </div>
              <h2>
                <span data-animation="fade-up">Discover, Trade & Deploy</span>
                <span className="sub-head" data-animation="fade-up"  data-delay={0.2}>Cutting-edge AI Solutions</span>
              </h2>
              <div className="image-generator-box">
                <div className="searchbox" data-animation="fade-zoom-in">
                  <div className="searchwrapper">
                    <div className="row align-items-center">
                      <div className="col-md-9">
                        <form>
                          <input type="text" className="form-control" placeholder="Search AI agents, models, APIs and applications..." />
                        </form>
                      </div>
                      <div className="col-lg-3">
                        <form>
                          <button className="btn" type="submit">Search</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="short-prompt" data-animation="fade-zoom-in">
                <ul>
                  <li><p>Quick Try :</p></li>
                  <li><Link className="hover-bg" to="/portfolio">Creative</Link></li>
                  <li><Link to="/portfolio">Sport</Link></li>
                  <li><Link to="/portfolio">Animation</Link></li>
                  <li><Link to="/portfolio">Fantasy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroOne
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProjectCard = ({project, index}) => {
    return (
        <div className="project-img" data-animation="fade-up" data-delay={index * 0.1}>
            <img src={project.imgSrc} alt="Project Image" />
            <div className="project-btn">
                <Link to="/portfolio-details">
                    <i className="bx bx-right-arrow-alt gradient-arrow-project" /> <span>View Project</span>
                </Link>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
}

export default ProjectCard
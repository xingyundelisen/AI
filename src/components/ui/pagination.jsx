import { Link } from 'react-router-dom'

const Pagination = () => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="blog-pagi">
                <ul className="pagination">
                    <li className="page-item"><Link className="page-link active" to="/single-products">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/single-products">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="/single-products">3</Link></li>
                    <li className="page-item">
                        <Link className="page-link" to="/single-products" aria-label="Next">
                            <span aria-hidden="true"><i className="bx bx-chevron-right gradient-arrow-pagination" /></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination
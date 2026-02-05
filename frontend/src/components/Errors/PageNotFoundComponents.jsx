import {Link} from 'react-router-dom'

function PageNotFoundComponents() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 mt-5 mb-5">
                <h1>Page Not Found</h1>
                <Link to='/'>Go to home page</Link>
            </div>
        </div>
    </div>
  )
}
export default PageNotFoundComponents
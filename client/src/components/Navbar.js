import React from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom' //withRouter??



//class Landing extends Component {
const Navbar = () => {
  let history = useHistory()
  //let match = useRouteMatch("/")
  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    history.push(`/`)
  }



  const loginRegLink =
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
          </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
          </Link>
      </li>
    </ul>

  const userLink =
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          User
          </Link>
      </li>
      <li className="nav-item">
        <a href="" onClick={logOut} className="nav-link">
          Logout
          </a>
      </li>
    </ul>


  return (
    < nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded" >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample10"
        aria-controls="navbarsExample10"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample10"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
              </Link>
          </li>
        </ul>
        {localStorage.usertoken ? userLink : loginRegLink}
      </div>
    </nav >
  )

}

export default withRouter(Navbar) //formerly withRouter(Landing)

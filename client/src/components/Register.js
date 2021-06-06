import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { register } from './UserFunctions'
import queryString from 'query-string'

const Register = () => {
  let history = useHistory()

  const [userState, setUserState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    errors: {}
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setUserState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      firstname: userState.firstname,
      lastname: userState.lastname,
      email: userState.email,
      password: userState.password
    }

    register(queryString.stringify(newUser)).then(res => {
      history.push(`/login`)
    })
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <div className="form-group">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter your first name"
                value={userState.first_name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter your lastname name"
                value={userState.last_name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={userState.email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={userState.password}
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
            >
              Register!
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

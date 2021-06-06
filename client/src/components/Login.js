import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from './UserFunctions'
import queryString from 'query-string'


const Login = () => {
  const [userState, setUserState] = useState({
    email: '',
    password: '',
    errors: {}
  })
  let history = useHistory()




  const onChange = (e) => {
    const { name, value } = e.target
    setUserState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: userState.email,
      password: userState.password
    }

    login(queryString.stringify(user)).then(res => {
      if (res) {
        history.push(`/profile`)
      }
    })
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
              Sign in
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

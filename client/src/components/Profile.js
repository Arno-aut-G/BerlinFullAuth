import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'


const Profile = () => {
  const [userState, setUserState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    errors: {}
  })


  useEffect(() => {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    setUserState(prevState => ({
      ...prevState,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    }))
  }, [setUserState])


  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Fist Name</td>
              <td>{userState.first_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{userState.last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{userState.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Profile

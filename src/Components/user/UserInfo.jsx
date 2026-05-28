import styles from "./UserInfo.module.css"
import pic from "../../assets/man.png"


const UserInfo = () =>  {
  return (
    <div className="row mb-4">
      <div className={`col-md-3 py-3 card ${styles.textCenter}`}>
        <img
          src={pic}
          alt="User Profile"
          className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
        />
        <h4>John Doe</h4>
        <p className="text-muted">John.doe@example.com</p>
        <button className="btn mt-2" style={{ backgroundColor: '#6050DC', color: 'white'}}>Edit Profile</button>
      </div>
      <div className="col-md-9">
        <div className="card">

        <div className="card-header" style={{ backgroundColor: '#6050DC', color: 'white'}}>
          <h5>Account Overview</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>Full Name:</strong>JohnDoe
              </p>
              <p>
                <strong>Email:</strong>john.doe@example.com
              </p>
              <p>
                <strong>Phone:</strong> +123 456 7890
              </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>City:</strong> New York
                </p>
                <p>
                  <strong>Country: </strong> USA
                </p>
                <p>
                  <strong>Member Since:</strong> January 2025
                </p>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default UserInfo

import React from "react";
import {Link} from "react-router-dom"
export default function Signup() {
  return (
    <div>
      <form className="d-block m-auto mt-4" style={{width:"450px",maxWidth:"92vw"}} >
        <div className=" mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto">
          Submit
        </button>
        <p>Alread have'n account <Link to='/signin'>Sign in</Link></p>
      </form>
    </div>
  );
}

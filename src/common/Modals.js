import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class Modals extends Component {
  submitLogin(e) {
    e.preventDefault();
    const req = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    axios
      .post("user/login", req)
      .then(response => {
        swal("Berhasil!", response.data.message, "success");
        setTimeout(window.location.reload(), 3000);
      })
      .catch(error => {
        swal("Maaf", error.response.data.message, "error");
      });
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="signin-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Sign-in Account
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form onSubmit={this.submitLogin}>
                <div className="modal-body">
                  <div style={{ width: "95%" }}>
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="signup-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Register Account
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div style={{ width: "95%" }}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Nama Lengkap"
                      />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

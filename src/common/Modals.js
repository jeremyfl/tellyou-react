import React, { Component } from "react";

export default class Modals extends Component {
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
              <div className="modal-body">
                <form>
                  <div style={{ width: "95%" }}>
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
                  Login
                </button>
              </div>
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

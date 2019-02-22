import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class Modals extends Component {
  constructor(props) {
    super(props);
  }

  submitLogin(e) {
    e.preventDefault();

    const req = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    axios
      .post("user/login", req)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        swal({
          title: "Maaf",
          text: error.response.data.message,
          icon: "error",
          type: "error",
          timer: 3000,
          buttons: false
        });
      });
  }

  submitSupport(e) {
    e.preventDefault();
    let url = window.location.href.split("localhost:3000/report/");

    const image = document.querySelector('input[id="image-2"]').files[0];

    const form = new FormData();
    form.append("description", e.target.description.value);
    form.append("image", image);
    form.append("report_id", url[1]);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios({
      method: "post",
      url: "/support",
      data: form,
      config: config
    })
      .then(response => {
        swal({
          title: "Terimakasih",
          text: response.data.message,
          icon: "success",
          type: "success",
          timer: 3000,
          buttons: false
        });
      })
      .catch(error => {
        swal({
          title: "Maaf",
          text: error.response.data.message,
          icon: "error",
          type: "error",
          timer: 3000,
          buttons: false
        });
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
        <div
          className="modal fade"
          id="support-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Dukung Laporan
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
              <form onSubmit={this.submitSupport}>
                <div className="modal-body">
                  <div style={{ width: "95%" }}>
                    <div className="form-group">
                      <textarea
                        name="description"
                        className="form-control"
                        placeholder="Ceritakan kisah yang anda ingin keluhkan"
                        rows="8"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="image"
                        id="image-2"
                        type="file"
                        className="form-control"
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
                    Dukung
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

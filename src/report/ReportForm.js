import React, { Component } from "react";
import axios from "axios";

export default class ReportForm extends Component {
  submitPost(e) {
    e.preventDefault();
    const image = document.querySelector('input[type="file"]').files[0];

    const form = new FormData();
    form.append("title", e.target.title.value);
    form.append("image", image);
    form.append("description", e.target.location_name.value);
    form.append("location_name", e.target.location_name.value);
    form.append("location_description", e.target.location_description.value);
    form.append("video", e.target.video.value);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios({
      method: "post",
      url: "/report",
      data: form,
      config: config
    }).then(response => {
      alert("Terimakasih telah berpartisipasi!");
    });
  }

  render() {
    return (
      <form onSubmit={this.submitPost}>
        <div className="container report-start-container">
          <div className="report-start-mobile-tab">
            <div className="report-start-mobile-tab-options">
              <div className="report-start-mobile-tab-options-1" />
              <div className="report-start-mobile-tab-options-2" />
              <div className="report-start-mobile-tab-options-3" />
            </div>
            <div className="report-start-mobile-tab-title	">
              Pilih Lokasi Laporan
            </div>
          </div>
          <div className="report-start-main-container">
            <div
              id="report-start-description"
              className="report-start-description"
            >
              <div className="report-start-bar-container">
                <div className="report-start-bar" />
                <div className="report-start-bar-number">1</div>
                <div className="report-start-bar-text">
                  Judul &amp; <br />
                  Deskripsi
                </div>
              </div>
              <div className="report-start-content">
                <div className="signin-signup-container">
                  <div className="signin-signup-image-wrapper">
                    <img src="/images/avatar.png" />
                  </div>
                  <div className="signin-signup-text">
                    <a>Masuk</a> / <a>Daftar</a> untuk melanjutkan laporan kamu
                  </div>
                </div>
                <div className="report-start-description-2">
                  <div className="report-start-card">
                    <img src="/images/how-to-report.svg" />
                  </div>
                  <div className="report-start-description-form">
                    <div className="report-start-description-form-1">
                      <div className="report-start-title">
                        Tulis Judul Laporanmu
                      </div>
                      <input
                        name="title"
                        className="report-start-input"
                        placeholder="Contoh: Jalan rusak di buahbatu"
                      />
                    </div>
                    <div className="report-start-description-form-2">
                      <div className="report-start-title">
                        Deskripsikan tempat laporanmu
                      </div>
                      <textarea
                        className="report-start-input"
                        name="description"
                        placeholder="Contoh: Jalan rusak di buahbatu sering terjadi kecelakaan..."
                        rows="10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="report-start-media" className="report-start-media">
              <div className="report-start-bar-container">
                <div className="report-start-bar" />
                <div className="report-start-bar-number">2</div>
                <div className="report-start-bar-text">Foto / Video</div>
              </div>
              <div
                id="report-start-media"
                className="report-start-media-2 report-start-content"
              >
                <div className="report-start-card">
                  <img src="/images/how-to-report.svg" />
                </div>
                <div className="report-start-media-form">
                  <div style={{ marginRight: 15 }}>
                    <div className="report-start-title">Upload Foto</div>
                    <div>
                      <input
                        type="file"
                        name="image"
                        className="report-start-input"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="report-start-title">Upload Video</div>
                    <div>
                      <input
                        name="video"
                        className="report-start-input"
                        placeholder="Masukan URL video"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="report-start-location" className="report-start-location">
              <div className="report-start-bar-container">
                <div className="report-start-bar" />
                <div className="report-start-bar-number">3</div>
                <div className="report-start-bar-text">
                  Judul &amp; <br />
                  Deskripsi
                </div>
              </div>
              <div className="report-start-content">
                <div className="report-start-location-2">
                  <div className="report-start-card">
                    <img src="/images/how-to-report.svg" />
                  </div>
                  <div className="report-start-location-form">
                    <div className="report-start-location-form-1">
                      <div className="report-start-title">Cari Lokasi</div>
                      <input
                        name="location_name"
                        className="report-start-input"
                        placeholder="Cari Alamat lokasi jalan rusak"
                      />
                    </div>
                    <div className="report-start-location-form-2">
                      <textarea
                        name="location_description"
                        className="report-start-input report-start-input-location"
                        placeholder="Contoh: Jalan rusak di buahbatu sering terjadi kecelakaan..."
                        rows="5"
                      />
                    </div>
                  </div>
                </div>
                <button className="report-start-submit-button" type="submit">
                  Selesai
                </button>
              </div>
            </div>
          </div>
          <div className="report-start-button-container">
            <div className="report-start-button report-start-button-container-back">
              &lt;
            </div>
            <div className="report-start-button report-start-button-container-next">
              Selesai
            </div>
          </div>
        </div>
      </form>
    );
  }
}

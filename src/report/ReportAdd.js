import React, { Component } from "react";

export default class ReportAdd extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
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
                  <img className="avatar" src="/images/avatar.png" />
                </div>
                <div className="signin-signup-text">
                  <a href>Masuk</a> / <a href>Daftar</a> untuk melanjutkan
                  laporan kamu
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
                      placeholder="Contoh: Jalan rusak di buahbatu sering terjadi kecelakaan..."
                      defaultValue={""}
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
                <div>
                  <div className="report-start-title">Upload Foto</div>
                  <div>input</div>
                </div>
                <div>
                  <div className="report-start-title">Upload Video</div>
                  <div>input</div>
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
                      className="report-start-input"
                      placeholder="Cari Alamat lokasi jalan rusak"
                    />
                  </div>
                  <div className="report-start-location-form-2">
                    <textarea
                      className="report-start-input report-start-input-location"
                      placeholder="Cari Alamat lokasi jalan rusak"
                    />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="Selesai"
                className="report-start-submit-button"
                defaultValue="Selesai"
              />
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
    );
  }
}

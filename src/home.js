import React, { Component } from "react";
import ReportCards from "./report/ReportCards";
import ReportCount from "./report/ReportCount";
import { Link } from "react-router-dom";

export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="head">
          <div className="text">
            <p className="text-big">
              Wadah Perbaikan infrastruktur Jalan, Laporkan jalan rusak sekarang
              juga
            </p>
            <p>
              Infrastruktur merupakan peranan penting yang ada di suatu negara,
              ketika keadaan di sebuah negeri lemah, itu berarti bahwa
              perekonomian di negara tersebtu tidaklah efisien
            </p>
            <div className="action">
              <Link className="btn btn-primary btn-mulai" to="/add/report">
                Lapor Sekarang
              </Link>
              <a className="btn btn-transparant">Pelajari lebih lanjut</a>
            </div>
          </div>
          <div className="image-wrapper">
            <div className="black" />
            <img src="images/image-1.jpg" />
          </div>
        </div>

        <React.Fragment>
          <div className="report-current container">
            <div className="content">
              <div className="title">
                <div className="text">
                  Laporan
                  <br />
                  Saat Ini
                </div>
                <div className="icon">
                  <img src="icons/report-current.svg" />
                </div>
              </div>
              <div className="text-bold section-description">
                Yukk buat akun dan laporkan masalah yang <br />
                ada di sekitarmu, kami akan meneruskan <br />
                laporanmu kepada pihak yang berwenang
              </div>
            </div>

            <ReportCount />
          </div>
          <div className="divider" />
        </React.Fragment>

        <div className="report-latest container">
          <div className="content">
            <div className="title">
              <div className="text">Laporan Terbaru</div>
              <div className="icon">
                <img src="icons/report-latest.svg" />
              </div>
            </div>
          </div>

          <ReportCards />

          {/* <a className="btn btn-primary btn-block">Cari Laporan</a> */}
        </div>
        <div className="divider" />

        {/* How To */}
        <React.Fragment>
          <div className="container">
            <div className="content how-to-title-1">
              <div className="title">
                <div className="text">
                  Bagaimana <br /> Caranya?
                </div>
                <div className="icon">
                  <img src="icons/report-latest.svg" />
                </div>
              </div>
              <div className="text-bold section-description">
                Pelajari lebih lanjut membuat laporan <br />
                jalan rusak di lingkungan sekitarmu
              </div>
            </div>
          </div>
          <div className="how-to container">
            <div className="content how-to-title-2">
              <div className="title title-2">
                <div className="text">
                  Bagaimana <br /> Caranya?
                </div>
                <div className="icon">
                  <img src="icons/report-latest.svg" />
                </div>
              </div>
            </div>
            <div className="how-to-bar">
              <div />
              <div />
              <div />
            </div>
            <div className="how-to-card how-to-card-1">
              <img
                className="how-to-card-image"
                src="images/how-to-report.svg"
              />
              <div className="how-to-card-title">Mulai Laporan</div>
              <div className="how-to-card-description section-description">
                Buat akun kamu, lalu mulai laporan kamu dan isi laporan kamu
                serta tuliskan keluhan jalan rusak yang ada di lingkungan
                sekitarmu
              </div>
            </div>
            <div className="arrow arrow-left" />
            <div className="how-to-card how-to-card-2">
              <img
                className="how-to-card-image"
                src="images/how-to-photo.svg"
              />
              <div className="how-to-card-title">Foto &amp; Rekam Laporan</div>
              <div className="how-to-card-description section-description">
                Foto dan videokan laporan kamu berupa jalan rusak yang ada di
                sekitar lingkunganmu
              </div>
            </div>
            <div className="arrow arrow-right" />
            <div className="how-to-card how-to-card-3">
              <img
                className="how-to-card-image"
                src="images/how-to-location.svg"
              />
              <div className="how-to-card-title">Foto &amp; Rekam Laporan</div>
              <div className="how-to-card-description section-description">
                Pilih lokasi dan tuliskan <br /> rincian lokasi laporanmu <br />
                misalkan: jalan dekat <br /> perempatan tugu
              </div>
            </div>
            <div className="arrow arrow-left-2" />
            <div className="report-now content">
              <div className="title">
                <div className="text">
                  Yuk Lapor <br /> Sekarang !
                </div>
              </div>
              <div className="title-small">Yuk Lapor Sekarang !</div>
              <div className="report-now-button">
                <Link
                  className="btn btn-secondary btn-mulai-secondary"
                  to="/add/report"
                >
                  Lapor Sekarang
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";

export default class ReportDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const self = this;

    axios.get(`report/${this.props.match.params.id}`).then(response => {
      self.setState({
        report: response.data
      });
    });
  }

  report() {
    if (this.state.report) {
      return this.state.report;
    }

    return 0;
  }

  render() {
    const report = this.report();
    const opts = {
      height: "260",
      width: "100%"
    };

    return (
      <div className="details">
        <div className="details-main-title">{report.title}</div>
        <div className="container">
          <div className="details-1">
            <div className="details-image-wrapper">
              <img src="/images/image-1.jpg" />
            </div>
            <div className="details-container-mobile mobile">
              <div className="details-container-mobile-title">
                {report.title}
              </div>
              <div className="details-container-mobile-support">
                {report.description}
              </div>
              <div className="details-container-mobile-support-bar">
                <div className="details-container-mobile-support-bar-20" />
              </div>
              <div className="details-container-mobile-support-count">
                1 Pendukung
              </div>
              <a
                className="details-support-this-button
                  details-support-this-button-support"
              >
                Dukung laporan ini
              </a>
            </div>
            <div className="description-tab mobile">
              <div
                className="description-tab-active"
                id="details-description-button"
              >
                Deskripsi
              </div>
              <div id="details-location-button">Lokasi</div>
              <div id="details-support-button">Pendukung</div>
            </div>
            <div>
              <div
                className="details-reported-by-container"
                id="details-description"
              >
                <div className="details-reported-by">
                  <div className="details-reported-by-image-profile-wrapper">
                    <img src="/images/image-1.jpg" />
                  </div>
                  <div className="details-reported-by-text">
                    <span className="details-reported-by-text-more">
                      Di Laporkan oleh
                    </span>
                    <span className="details-reported-by-text-name">
                      Jeremy
                    </span>
                  </div>
                </div>
                <div className="details-description">
                  Jalan rusak di daerah buahbatu merugikan pengendara yang
                  melalui jalan tersebut, beberapa kecelakaan pernah terjadi di
                  sekitar jalan buahbatu. bantu dukung perbaikkan jalan tersebut
                  agar kecelakaan tidak terjadi lagi.
                </div>
                <div className="details-video details-video-mobile mobile">
                  <YouTube
                    videoId={report.video} // defaults -> null
                    opts={opts}
                  />
                </div>
                <div className="details-support-this-mobile mobile">
                  <div className="details-title">Dukung laporan ini</div>
                  <div>
                    Mengalami hal yang sama?, Bantu dan bagikan Laporan. Setiap
                    dukunganmu akan mempercepat infrastruktur di perbaiki
                  </div>
                  <a
                    className="details-support-this-button
                          details-support-this-button-support"
                  >
                    Dukung laporan ini
                  </a>
                  <a
                    className="details-support-this-button
                          details-support-this-button-facebook"
                  >
                    Bagikan ke facebook
                  </a>
                </div>
              </div>
            </div>
            <div
              className="details-location-container hidden"
              id="details-location"
            >
              <div className="details-location">
                <div className="details-title desktop">Lokasi</div>
                <div className="details-maps">
                  <img src="/images/image-1.jpg" />
                  <div className="btn btn-primary">Lihat Lokasi</div>
                </div>
              </div>
              <div className="details-location-more">
                <div className="details-title">Detail lokasi</div>
                <div className="details-location-more-container">
                  Di sekitar depan perempatan buahbatu, di dekat transmart
                  buahbatu perbatasan antara kabupaten bandung dan kota bandung,
                  jawa barat
                </div>
              </div>
            </div>
            <div className="details-report-support hidden" id="details-support">
              <div className="details-title desktop">Laporan Pendukung (1)</div>
              <div className="details-report-support-profile-date">
                <div className="details-report-support-profile">
                  <div className="details-report-support-profile-picture">
                    <img src="/images/image-1.jpg" />
                  </div>
                  <div className="details-report-support-profile-name">
                    Adi nurcahyo
                  </div>
                </div>
                <div className="details-report-support-date">
                  1 hari yang lalu
                </div>
              </div>
              <div className="details-report-support-description">
                <div className="details-report-support-description-text">
                  Saya mendukung laporan ini karena di sekitar depan perempatan
                  buahbatu, sering terdapat genangan air ketika hujan sehingga
                  membahayakan pengendara motor ataupun mobil
                </div>
                <div className="details-report-support-description-image-wrapper">
                  <img src="/images/image-1.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="details-2">
            <div className="details-video">
              <div className="details-title">Lihat Video</div>
              <YouTube
                videoId={report.video} // defaults -> null
                opts={opts}
              />
            </div>
            <div className="details-report-update">
              <div className="details-title">Update Laporan</div>
              <div className="details-report-update-description">
                Membutuhkan 9 dukungan lagi untuk laporan di teruskan kepada
                Pemerintah
              </div>
              <div className="details-report-update-progress-bar">
                <div className="details-report-update-progress-bar-20" />
                <div className="details-report-update-progress-bar-percentage">
                  20%
                </div>
              </div>
            </div>
            <div className="details-support-this">
              <div className="details-title">Dukung laporan ini</div>
              <div>
                Mengalami hal yang sama?, Bantu dan bagikan Laporan. Setiap
                dukunganmu akan mempercepat infrastruktur di perbaiki
              </div>
              <a
                className="details-support-this-button
                  details-support-this-button-support"
              >
                Dukung laporan ini
              </a>
              <a
                className="details-support-this-button
                  details-support-this-button-facebook"
              >
                Bagikan ke facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

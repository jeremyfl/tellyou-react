import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import ReportSupports from "./ReportSupports";
import ReportUpdate from "./ReportUpdate";

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

    if (!report) {
      return <h1>Loading</h1>;
    }

    return (
      <React.Fragment>
        <div className="details">
          <div className="details-main-title">{report.title}</div>
          <div className="container">
            <div className="details-1">
              <div className="details-image-wrapper">
                <img src={axios.defaults.baseURL + "image/" + report.image} />
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
                  1 ReportSupports
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
                <div id="details-support-button">ReportSupports</div>
              </div>
              <div>
                <div
                  className="details-reported-by-container"
                  id="details-description"
                >
                  <div className="details-reported-by">
                    <div className="details-reported-by-image-profile-wrapper">
                      <img className="avatar" src={report.user.avatar} />
                    </div>
                    <div className="details-reported-by-text">
                      <span className="details-reported-by-text-more">
                        Di Laporkan oleh
                      </span>
                      <span className="details-reported-by-text-name">
                        {" " + report.user.name}
                      </span>
                    </div>
                  </div>
                  <div className="details-description">
                    Jalan rusak di daerah buahbatu merugikan pengendara yang
                    melalui jalan tersebut, beberapa kecelakaan pernah terjadi
                    di sekitar jalan buahbatu. bantu dukung perbaikkan jalan
                    tersebut agar kecelakaan tidak terjadi lagi.
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
                      Mengalami hal yang sama?, Bantu dan bagikan Laporan.
                      Setiap dukunganmu akan mempercepat infrastruktur di
                      perbaiki
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
                  <div className="details-title desktop">
                    Lokasi: {report.location_name}
                  </div>
                  <div className="details-maps">
                    <img src="/images/image-1.jpg" />
                    <div className="btn btn-primary">Lihat Lokasi</div>
                  </div>
                </div>
                <div className="details-location-more">
                  <div className="details-title">Detail lokasi</div>
                  <div className="details-location-more-container">
                    {report.location_description}
                  </div>
                </div>
              </div>
              <ReportSupports support={report.support} />
            </div>
            <div className="details-2">
              <div className="details-video">
                <div className="details-title">Lihat Video</div>
                <YouTube
                  videoId={report.video} // defaults -> null
                  opts={opts}
                />
              </div>
              <ReportUpdate support={report.support} />
              <div className="details-support-this">
                <div className="details-title">Dukung laporan ini</div>
                <div>
                  Mengalami hal yang sama?, Bantu dan bagikan Laporan. Setiap
                  dukunganmu akan mempercepat infrastruktur di perbaiki
                </div>
                <a
                  className="details-support-this-button details-support-this-button-support"
                  data-toggle="modal"
                  data-target="#support-modal"
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
      </React.Fragment>
    );
  }
}

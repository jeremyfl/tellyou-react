import React, { Component } from "react";
import Moment from "react-moment";
import "moment/locale/id";

export default class ReportSupports extends Component {
  render() {
    const support = this.props.support;

    return (
      <div className="details-report-support hidden" id="details-support">
        <div className="details-title desktop">
          Laporan Pendukung ({support.length})
        </div>

        {support.map((support, index) => {
          return (
            <React.Fragment key={index}>
              <div className="details-report-support-profile-date">
                <div className="details-report-support-profile">
                  <div className="details-report-support-profile-picture">
                    <img src={support.user.avatar} />
                  </div>
                  <div className="details-report-support-profile-name">
                    {support.user.name}
                  </div>
                </div>
                <div className="details-report-support-date">
                  <Moment locale="id" fromNow>
                    {support.created_at}
                  </Moment>
                </div>
              </div>
              <div className="details-report-support-description">
                <div className="details-report-support-description-text">
                  {support.description}
                </div>
                <div className="details-report-support-description-image-wrapper">
                  <img src={support.image} />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

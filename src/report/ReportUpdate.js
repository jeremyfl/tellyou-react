import React, { Component } from "react";

export default class ReportUpdate extends Component {
  constructor(props) {
    super(props);
    this.support = this.props.support;
  }

  countSupport() {
    if (this.support.length <= 3) {
      return 20;
    } else if (this.support <= 5) {
      return 40;
    } else if (this.support <= 7) {
      return 60;
    } else if (this.support <= 9) {
      return 80;
    }

    return 100;
  }

  render() {
    const support = this.support;
    const supportPercentage = this.countSupport();

    return (
      <div className="details-report-update">
        <div className="details-title">Update Laporan</div>
        <div className="details-report-update-description">
          Membutuhkan {10 - support.length} dukungan lagi untuk laporan di
          teruskan kepada Pemerintah
        </div>
        <div className="details-report-update-progress-bar">
          <div
            className={
              "details-report-update-progress-bar-" + supportPercentage
            }
          />
          <div className="details-report-update-progress-bar-percentage">
            {supportPercentage}%
          </div>
        </div>
      </div>
    );
  }
}

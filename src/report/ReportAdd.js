import React, { Component } from "react";
import ReportForm from "./ReportForm";

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

        <ReportForm />
      </div>
    );
  }
}

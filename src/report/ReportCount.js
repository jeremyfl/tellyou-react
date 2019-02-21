import React, { Component } from "react";
import axios from "axios";

export default class ReportCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportCount: null
    };
  }

  componentDidMount() {
    const self = this;

    axios.get("count/report").then(response => {
      self.setState({
        stats: response.data
      });
    });
  }

  countStats() {
    if (this.state.stats) {
      return this.state.stats;
    }

    return 0;
  }

  render() {
    const count = this.countStats();

    return (
      <div className="boxes">
        <div className="box">
          <div className="number">{count.report}</div>
          <div className="text">Laporan Terkumpul</div>
        </div>
        <div className="box">
          <div className="number">{count.user}</div>
          <div className="text">Partisipan</div>
        </div>
        <div className="box">
          <div className="number">{count.solved}</div>
          <div className="text">Laporan Selesai</div>
        </div>
      </div>
    );
  }
}

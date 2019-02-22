import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/id";

export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: []
    };
  }

  componentDidMount() {
    const self = this;

    axios.get("report").then(response => {
      self.setState({
        reports: response.data
      });
    });
  }

  reports() {
    if (this.state.reports) {
      return this.state.reports;
    }

    return [];
  }

  render() {
    const reports = this.reports();

    if (!reports) {
      return <h1>Loading</h1>;
    }

    return (
      <React.Fragment>
        <div className="card-container">
          {reports.map((report, index) => {
            return (
              <div className="card" key={index}>
                <div className="image-container">
                  <img src={axios.defaults.baseURL + "image/" + report.image} />
                </div>
                <div className="content-container">
                  <div className="card-name">{report.location_name}</div>
                  <div className="card-title">
                    <Link to={`report/${report.id}`}>{report.title}</Link>
                  </div>
                  <div className="card-description">{report.description}</div>
                  <div className="bar">
                    <div
                      className={"bar-percentages-" + report.support.length}
                    />
                  </div>
                  <div className="card-footer">
                    <div className="supporter">
                      {report.support.length} Pendukung
                    </div>
                    <div className="date">
                      <Moment locale="id" fromNow>
                        {report.created_at}
                      </Moment>
                    </div>
                  </div>
                </div>

                <div className="card-read-more">Read More</div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

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

    return (
      <React.Fragment>
        <div className="card-container">
          {reports.map((reports, index) => {
            return (
              <div className="card" key={index}>
                <div className="image-container">
                  <img src="images/image-1.jpg" />
                </div>
                <div className="content-container">
                  <div className="card-name">{reports.location_name}</div>
                  <div className="card-title">
                    <Link to={`report/${reports.id}`}>{reports.title}</Link>
                  </div>
                  <div className="card-description">{reports.description}</div>
                  <div className="bar">
                    <div className="bar-percentages-9" />
                  </div>
                  <div className="card-footer">
                    <div className="supporter">5 Pendukung</div>
                    <div className="date">
                      <Moment locale="id" fromNow>
                        {reports.created_at}
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

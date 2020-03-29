import React from "react";
import "../css/App.css";

import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";
import { findIndex } from "lodash";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      lastIndex: 0,
      formDisplay: false,
      orderBy: "petName",
      orderDir: "asc",
      queryText: ""
    };
  }
  componentDidMount() {
    // API GOES GERE
    fetch("./data.json")
      .then(response => {
        return response.json();
      })
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({
            lastIndex: this.state.lastIndex + 1
          });
          return item;
        });
        this.setState({
          myAppointments: apts
        });
      });
  }
  deleteAppointment = item => {
    let aptCopy = this.state.myAppointments;
    let aptsMinusSelected = aptCopy.filter(itemToRemove => {
      return item !== itemToRemove;
    });
    this.setState({
      myAppointments: aptsMinusSelected
    });
  };
  toggleForm = () => {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  };
  addAppointment = apt => {
    let aptCopy = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;
    aptCopy.unshift(apt);
    this.setState({
      myAppointments: aptCopy,
      lastIndex: this.state.lastIndex + 1
    });
  };
  changeOrder = (orderBy, orderDir) => {
    this.setState({
      orderBy,
      orderDir
    });
  };
  changeFilter = e => {
    this.setState({
      queryText: e.target.value
    });
  };
  updateInfo = (name, value, id) => {
    let tempApts = this.state.myAppointments;
    let aptIndex = findIndex(this.state.myAppointments, {
      aptId: id
    });
    tempApts[aptIndex][name] = value;
    this.setState({
      myAppointments: tempApts
    });
  };
  render() {
    let order;
    let filtered = this.state.myAppointments;
    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }
    filtered = filtered
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter(item => {
        return (
          item["petName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item["ownerName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item["aptNotes"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div>
                <AddAppointments
                  addAppointment={this.addAppointment}
                  toggleForm={this.toggleForm}
                  formDisplay={this.state.formDisplay}
                />
              </div>
              <div>
                <SearchAppointments
                  changeFilter={this.changeFilter}
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                />
              </div>
              <div>
                <ListAppointments
                  updateInfo={this.updateInfo}
                  deleteAppointment={this.deleteAppointment}
                  appointments={filtered}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

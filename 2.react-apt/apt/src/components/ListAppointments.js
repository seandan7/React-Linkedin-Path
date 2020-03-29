import React from "react";
import { FaTimes } from "react-icons/fa";
//import Moment from "react-moment"; TODO: Fix this

class ListAppointments extends React.Component {
  render() {
    return (
      <div className="appointment-list item-list mb-3">
        {this.props.appointments.map(item => (
          <div key={item.aptId} className="pet-item col media py-3">
            <div className="mr-3">
              <button
                onClick={() => this.props.deleteAppointment(item)}
                className="pet-delete btn btn-sm btn-danger"
              >
                <FaTimes />
              </button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span
                  className="pet-name"
                  contentEditable
                  suppressContentEditableWarnin
                  onBlue={e =>
                    this.props.updateInfo(
                      "petName",
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.petName}
                </span>
                <span className="apt-date ml-auto">
                  {/*
                  <Moment 
                  data={item.aptDate} 
                  parse="MM-D h:mma"
                  format="MMM-D h:mma" />
                  */}
                  {item.aptDate}
                </span>
              </div>

              <div className="owner-name">
                <span className="label-item">Owner: </span>
                <span
                  contentEditable
                  suppressContentEditableWarnin
                  onBlue={e =>
                    this.props.updateInfo(
                      "owenerName",
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.ownerName}
                </span>
                <div
                  className="apt-notes"
                  contentEditable
                  suppressContentEditableWarnin
                  onBlue={e =>
                    this.props.updateInfo(
                      "aptNotes",
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.aptNotes}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListAppointments;

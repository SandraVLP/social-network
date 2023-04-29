import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  handleChange = (e) => {

    this.setState(
       {status: e.currentTarget.value}
    )
 }

 componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {

        this.setState(
           {status: this.props.status}
        )
    }
 }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div className="profile__status-container">
            <p className="profile__status">Статус:</p>
            <span className="profile__status-text" onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
            className="profile__status-text"
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              onChange={this.handleChange}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

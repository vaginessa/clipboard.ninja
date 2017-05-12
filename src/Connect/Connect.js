// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

const style = {
  button: {
    margin: 12,
  },
};

class Connect extends Component {
  props: {
    ownRoomNumber: number,
    connectedToRoom: string,
    connectToRoom: (number) => void,
    muiTheme: Object,
  };
  state = {
    roomNumber: '',
  };
  state: {
    roomNumber: number,
  };

  connectToRoom = () => {
    if (this.state.roomNumber === '') {
      return null;
    }
    this.props.connectToRoom(this.state.roomNumber);
  };

  handleChange = (event: Object) => {
    this.setState({
      roomNumber: event.target.value,
    })
  };

  render() {
    if (this.props.connectedToRoom !== '') {
      return null;
    }
    return (
      <div>
        <h3>
          Device ID:&nbsp;
          <span style={{color: this.props.muiTheme.palette.accent1Color}}>
            <strong>
              {this.props.ownRoomNumber}
            </strong>
          </span>
        </h3>
        <p>
          Use this Device ID to connect to the other device.<br />
          Or enter the Device ID of the other device below.
        </p>
        <TextField
          type="number"
          floatingLabelText="Enter the device ID"
          value={this.state.roomNumber}
          onChange={this.handleChange}
        />
        <RaisedButton
            label="Connect"
            primary={true}
            style={style.button}
            onClick={() => this.connectToRoom()}
            disabled={this.state.roomNumber === ''}
          />
      </div>
    );
  }
}

export default muiThemeable()(Connect);
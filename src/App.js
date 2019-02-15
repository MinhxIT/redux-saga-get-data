import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    const { fetching, info, fetchInfo, error } = this.props;
    console.log("Fetching: ",fetching,"info: ", info, "fetch info: ",fetchInfo,"error:" ,error );
    return (
      <div className="App">
      {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={fetchInfo}>Fetch Info</button>
        )}

        {error && <p style={{ color: "red" }}>something went wrong!</p>}

        {info ? (
          <div className="container">
            <p className="App-intro">Info</p>
            
              <table className="table table-dark">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Team name</th>
                  <th scope="col">Games played</th>
                </tr>
              </thead>
              <tbody>
              {info.map((detailInfo, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{detailInfo.name}</td>
                  <td>{detailInfo.team_name}</td>
                  <td>{detailInfo.games_played}</td>
                </tr>
                ))}
              </tbody>
            </table>
            
        </div>
        ):
        (
          <p className="App-intro">No Info</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    info: state.info,
    error: state.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => {
      dispatch({ type: "API_CALL_REQUEST" });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
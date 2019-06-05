import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
  };

  render() {
    // const bands = this.props.bands.map(band =>
    //   (<Band
    //     delete={this.props.delete}
    //     key={band.id}
    //     band={band.name}
    //   />));
    // console.log('bands',bands);
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: band => {
    console.log('band', band);
    return dispatch({type: 'DELETE_BAND', band })}
});



export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

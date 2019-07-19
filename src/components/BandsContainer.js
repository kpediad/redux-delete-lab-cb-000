import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
  delete: id => dispatch({type: "DELETE_BAND", payload: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

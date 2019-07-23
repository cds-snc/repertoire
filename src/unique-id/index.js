import { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

export class UniqueID extends Component {
  render() {
    return this.props.children('id-' + v4())
  }
}

UniqueID.propTypes = { children: PropTypes.func.isRequired }

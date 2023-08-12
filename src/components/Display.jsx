import React from 'react'
import PropTypes from 'prop-types'

const Display = (props) => {
  return (
    <div>
        {props.name}
    </div>
  )
}

Display.propTypes = {
    name: PropTypes.number
};

Display.defaultProps = {
    name: 'Zach',
};

export default Display

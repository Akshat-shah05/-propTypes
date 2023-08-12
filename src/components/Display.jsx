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

// you can make a prop required --> children: PropTypes.element.isRequired
// Typescript is "better", but technically they have differnet use cases
// --> Typescript checks at compile time, propTypes checks at run time
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ContactFilter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
  }
}

export default ContactFilter;

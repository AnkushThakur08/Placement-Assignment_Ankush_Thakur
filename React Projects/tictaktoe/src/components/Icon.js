import React, { Component } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';

class Icon extends Component {
  render() {
    const { name } = this.props;

    switch (name) {
      case 'circle':
        return <FaCircle className="icon" />;

      case 'cross':
        return <GiCrossMark className="icon" />;

      default:
        return <BsFillPencilFill className="icon" />;
    }
  }
}

export default Icon;

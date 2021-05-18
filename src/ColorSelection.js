import React from 'react';
import { Link } from 'react-router-dom';
import './ColorSelection.css';

const ColorSelection = ({colors}) => {


  return (
    <div className="ColorSelection">
      <div className="ColorSelection-adder">
        <p>Welcome to the color factory</p>
        <h1 className="ColorSelection-adder-link"><Link to={'/colors/new'}>Add a color</Link></h1>
      </div>
      <div className="ColorSelection-colorList">
        <p>Please select a color.</p>
        <ul>{Object.keys(colors).map(color => (<li key={color}><Link  to={`/colors/${color}`}>{color}</Link></li>))}</ul>
      </div>
    </div>
  )
}

export default ColorSelection;
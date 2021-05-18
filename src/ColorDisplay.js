import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import './ColorDisplay.css';

const ColorDisplay = ({colors}) => {
  const { color } = useParams();
  const colorKeys = Object.keys(colors);


  return (
    <div>
      {colorKeys.indexOf(color)===-1 ?
         <Redirect to="/colors" />
      :
      <div className="ColorDisplay" style={{backgroundColor: `${colors[color]}` }}>
        <h1>{`This is ${color}! `} </h1>
        <h1>Isn't it beautiful?</h1>
        <p><Link to="/colors">Go Back</Link></p>
      </div>
      }
    </div>

  )
}
export default ColorDisplay;

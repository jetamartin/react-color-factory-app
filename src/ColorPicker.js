import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './ColorPicker.css';
const ColorPicker = ({  addColor }) => {
  const INITIAL_STATE = {
    colorName: "",
    colorValue: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (formData.colorName && formData.colorValue) {
      addColor({[formData.colorName]: formData.colorValue})
      history.push("/colors");
    } else {
      alert("Both Color Name and Color Value are required for a color to be added")
    }
  };

  return (
    <div className="ColorPicker">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="colorName">Color name</label>
          <input  name="colorName" type='text' value={formData.colorName} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="field"> 
          <label htmlFor="colorValue">Color Value</label>
          <input name="colorValue" type='color' value={formData.colorValue} onChange={(e) => handleChange(e)}/>
        </div>

        <button className="ui button">Add Color</button>
      </form>
    </div>
  )
}

export default ColorPicker;
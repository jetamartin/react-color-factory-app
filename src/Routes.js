
import React, {useState} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import ColorSelection from './ColorSelection';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';


const Routes = () => {
  const INITIAL_COLOR_STATE = {
    red: "#FF0000",
    green: "#00FF00", 
    blue: "#0000FF"
  };
  const [colors, setColors ] = useState(INITIAL_COLOR_STATE);

  const addColor = (newColor) => {
    setColors(currentColors => ({...currentColors, ...newColor}));
  }
  
  return (
  <Switch>
    <Route exact path="/colors" >
      <ColorSelection colors={colors} /> 
    </Route>
    <Route exact path="/colors/new" >
      <ColorPicker addColor={addColor} /> 
    </Route>
    <Route path="/colors/:color" >
      <ColorDisplay colors={colors} />
    </Route>
    <Redirect to="/colors" />
  </Switch>
  )
}

export default Routes; 


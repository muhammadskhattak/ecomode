import React from 'react';
import EcomodeNav from '../GlobalComponents/EcomodeNav';
import '../Stylesheets/App.css'

const about = (props) => {
  return (
    <div>
      <EcomodeNav />
      <h1 className='header'>About the Team</h1>
      <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, lorem sed rhoncus eleifend, arcu felis sodales justo, nec sollicitudin eros nibh eu ex. Ut tortor ex, malesuada sed dapibus eget, iaculis id urna. Cras cursus purus non arcu molestie pharetra. Duis eu condimentum magna. Donec pulvinar neque lacus, eu placerat elit euismod a. Nam pulvinar ex id tellus posuere, sed vehicula nisi facilisis. Ut at vulputate augue. Sed id eros porttitor, dapibus enim semper, euismod eros. Aenean urna lectus, tincidunt eu lacus et, volutpat semper libero. Vivamus congue malesuada pharetra. Donec neque felis, bibendum ut risus vel, placerat pretium ligula. Nunc sagittis in nisi eu fringilla. Vivamus urna nulla, fringilla feugiat tortor eu, eleifend commodo nisl. Ut convallis orci sed magna ullamcorper, in dictum metus tincidunt. Suspendisse eget dictum sem, vel consequat dui. Suspendisse sodales urna lorem, id fringilla leo euismod nec. </p>
    </div>
  );
}

export default about;

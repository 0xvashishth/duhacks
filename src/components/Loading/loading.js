import React from 'react';
import loadergif from '../Loading/preloader.gif';
import './Loading.css';

export default function LOADER(props) {
  return (
    <div class="load">
      <img src={loadergif} alt="loader" />
    </div>
  );
}

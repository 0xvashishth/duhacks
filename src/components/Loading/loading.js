import React from 'react';
import loadergif from '../Loading/preloader.gif';
import './loading.css';

export default function LOADER(props) {
  return (
    <div class="load">
      <img src={loadergif} alt="loader" />
    </div>
  );
}

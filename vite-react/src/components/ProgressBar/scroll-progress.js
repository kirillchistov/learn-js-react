import React from 'react';
import './progbar.module.css';

export const ScrollBarProgress = ({ progress }) => {
  return <div className='progress-fill' style={{ width: `${progress}%` }}></div>
};

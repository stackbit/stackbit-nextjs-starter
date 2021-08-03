import React from 'react';
import Debug from './Debug';

const ComponentWrapper = (props) => (
  <div className="component-wrapper relative">
    <Debug {...props} />
    <div className="component border border-red-400 border-dashed relative z-0">
      {props.children}
    </div>
  </div>
);

export default ComponentWrapper;

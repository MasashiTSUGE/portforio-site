import React from 'react';
import Top from './hero';
import About from './about';
import Works from './works';
import ReturnTop from './ReturnTop';
const main = () => {
  return (
    <>
      <Top />
      <div className="bg-body-tertiary" style={{ height: '80px' }}></div>
      <About />
      <div className="bg-body-tertiary" style={{ height: '80px' }}></div>
      <Works />
      <div className="bg-body-tertiary d-none d-md-block" style={{ height: '80px' }}></div>
      <ReturnTop />
    </>
  );
};

export default main;

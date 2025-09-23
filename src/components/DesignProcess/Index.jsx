// src/components/DesignProcess/index.jsx
import React from 'react';
import Empathise from './Empathise';
import Define from './Define';
import Ideate from './Ideate';
import Prototype from './Prototype';
import Testing from './Testing';

const DesignProcess = () => {
  return (
    <section id="design" className="py-20">
      <div className="container mx-auto px-6">
        
        <Empathise />
        <Define />
        <Ideate />
        <Prototype />
        <Testing />
      </div>
    </section>
  );
};

export default DesignProcess;
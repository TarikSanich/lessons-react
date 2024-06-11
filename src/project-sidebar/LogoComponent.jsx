import React from 'react';
import { ReactComponent as LogoIcon } from './logo.svg'; // замените на путь к вашей svg

const LogoComponent = () => (
  <div className="logo-component">
    <LogoIcon />
    <h1>My App</h1>
  </div>
);

export default LogoComponent;

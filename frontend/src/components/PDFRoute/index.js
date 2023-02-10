import React from 'react';
import { Route } from 'react-router-dom';

const PDFRoute = () => (
  <Route exact path="/pdf" render={() => (
    <object data="Duong_Vo_Resume.pdf" type="application/pdf">
      <p>It appears you don't have a PDF plugin for this browser.</p>
    </object>
  )} />
);

export default PDFRoute;
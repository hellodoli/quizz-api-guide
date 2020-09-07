import React from 'react';
import { MainTitle } from '../../theme/CommonStyle';
import resource from '../../ultil/codeout/index';
import HightLight from '../../components/HightLight';

function Model() {
  return (
    <div>
      <div className="container">
        <main className="pb-5">
          <MainTitle>Model</MainTitle>
          <p>
            Column required is mark with <strong>*required</strong> (Must has
            when create new quizz).
          </p>
          <p>Other column's value is default.</p>
          <HightLight content={resource.model} />
        </main>
      </div>
    </div>
  );
}

export default Model;

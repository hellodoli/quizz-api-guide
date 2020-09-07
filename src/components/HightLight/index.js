import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import { HightLightWrapper } from './styled';

function HightLight({ content }) {
  const container = useRef();
  useEffect(() => {
    const parentBlock = container.current;
    if (parentBlock) {
      const codeBlocks = parentBlock.querySelectorAll('code');
      codeBlocks.forEach((codeBlock) => {
        hljs.highlightBlock(codeBlock);
      });
    }
  });

  return (
    <HightLightWrapper
      ref={container}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

HightLight.propTypes = {
  content: PropTypes.string,
};

export default HightLight;

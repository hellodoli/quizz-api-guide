import styled from 'styled-components';

export const HightLightWrapper = styled.div`
  margin: 1rem 0;

  pre,
  code {
    display: block;
    font-size: 100%;
    color: #333;
    margin: 0;
  }

  pre + pre {
    margin-top: 1rem;
  }

  code {
    padding: 2rem;
  }
`;

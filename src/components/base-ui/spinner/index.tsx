import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import styled from 'styled-components';

import SpinnerProps from '../../../types/props/spinner';

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Spinner: React.FC<SpinnerProps> = (
  props: SpinnerProps
) => (
    <Div className="spinner-wrapper">
      <SpinnerCircular {...props} />
    </Div>
  );

export default Spinner;

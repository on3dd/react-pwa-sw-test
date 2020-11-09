import React from 'react';

import SpinnerProps from '../../../types/props/spinner';
import BaseSpinner from '../../base-ui/spinner';

const CardSpinner: React.FC<SpinnerProps> = ({
  color = "rgba(41,128,185,1.0)",
  secondaryColor = "rgba(0,0,0,0.20)",
  size = 75,
  thickness = 100,
  ...props
}: SpinnerProps) => (
    <BaseSpinner
      color={color}
      secondaryColor={secondaryColor}
      size={size}
      thickness={thickness}
      {...props}
    />
  );

export default CardSpinner;

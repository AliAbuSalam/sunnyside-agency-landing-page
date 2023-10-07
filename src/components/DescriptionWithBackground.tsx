import React, { FC, ReactNode } from 'react';
import { StaticImageData } from "next/image";

type DescWithBackgroundProps = {
  title: string;
  background: StaticImageData;
  children: ReactNode;
}

const DescriptionWithBackground:FC<DescWithBackgroundProps> = ({ title, background, children }) => {
  return(
  <div>
    <h1>
      {title}
    </h1>
    <div>
      {children}
    </div>
  </div>);
};

export default DescriptionWithBackground;
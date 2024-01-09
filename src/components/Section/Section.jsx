// import { HeaderTwo } from 'components/App.styled';
import React from 'react';
import { HeaderTwo } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <HeaderTwo>{title}</HeaderTwo>
      {children}
    </>
  );
};

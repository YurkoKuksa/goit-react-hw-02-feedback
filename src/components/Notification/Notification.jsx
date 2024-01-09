import React from 'react';
import { HeaderTwo } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <div>
      <HeaderTwo>{message}</HeaderTwo>
    </div>
  );
};

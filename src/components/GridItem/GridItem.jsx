import css from './GridItem.module.css';
// import { Children } from 'react';

export const GridItem = ({ children }) => {
  return <div className={css.item}>{children}</div>;
};

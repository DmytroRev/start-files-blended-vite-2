import css from './GridItem.module.css';
// import { Children } from 'react';

export const GridItem = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

import React from 'react';
import Link from './link.js';
import { FilterType } from '../../contants.js';

import './styles.css';

const Filter = (props) => {
  return (
    <p className="filters">
      {
        Object.values(FilterType).map((elem) => {
          return (
            <Link filter={elem} key={elem}>{elem}</Link>
          );
        })
      }
    </p>
  )
}

export default Filter;

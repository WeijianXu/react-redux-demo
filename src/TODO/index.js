import React from 'react';
import { Component as Todos } from './todo/';
import { Component as Filter } from './filter/';
import store from './Store.js';

const Index = () => {
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  );
};

export default {
  store,
  Component: Index,
};

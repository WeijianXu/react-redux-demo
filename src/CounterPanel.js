import React from 'react';
import Counter from './widgets/Counter';

export default class CounterPanel extends React.Component {

  render() {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" initValue={10} />
        <Counter caption="Third" initValue={20} />
      </div>
    );
  }
}

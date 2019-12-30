import React, { Component } from 'react';
import Faq from 'react-faq-component';
import { data } from '../utilities/data';
import { styles } from '../utilities/styles';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Faq data={data} styles={styles} />
      </React.Fragment>
    );
  };
};

export default App;

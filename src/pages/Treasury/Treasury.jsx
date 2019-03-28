import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/Layout/FeatureBar';
import TabsBar from '../../components/Layout/TabsBar';

// Containers
import BankAccounts from './BankAccounts';

class Treasury extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Cuentas bancarias'];
    return (
      <Fragment>
        <FeatureBar title="Tesorería" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <BankAccounts />}
      </Fragment>
    );
  }
}

export default Treasury;

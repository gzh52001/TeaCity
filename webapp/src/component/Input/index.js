import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarExample extends React.Component {
  state = {
    value: '美食',
  };
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div>
      <SearchBar placeholder="Search" maxLength={8} />
      <WhiteSpace />
    </div>);
  }
}

// ReactDOM.render(<SearchBarExample />, mountNode);
export default SearchBarExample;
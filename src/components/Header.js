import React from 'react';

const Header = props => (
  <table>
    <thead>
      <tr>
        {props.headerItems.map(headerItems => (
          <th key={headerItems.index}>{headerItems.title}</th>
        ))}
      </tr>
    </thead>
  </table>
);

Header.propTypes = {
  headerItems: React.PropTypes.arrayOf(React.PropTypes.object),
};

Header.defaultProps = {
  headerItems: [],
};

export default Header;

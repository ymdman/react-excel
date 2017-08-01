import React from 'react';

const headers = ['タイトル', '著者', '言語', '出版年', '売り上げ部数'];

const Header = () => (
  <table>
    <thead>
      <tr>
        <th>{this.props}</th>
      </tr>
    </thead>
  </table>
);

Header.defaultProps = headers;

export default Header;

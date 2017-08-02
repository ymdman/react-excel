import React from 'react';

// const headers = ['タイトル', '著者', '言語', '出版年', '売り上げ部数'];

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ['タイトル', '著者', '言語', '出版年', '売り上げ部数'],
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>{this.state.headers}</th>
          </tr>
        </thead>
      </table>
    );
  }
}

// const Header = () => (
//   <table>
//     <thead>
//       <tr>
//         <th>{this.props}</th>
//       </tr>
//     </thead>
//   </table>
// );

// Header.defaultProps = headers;

// export default Header;

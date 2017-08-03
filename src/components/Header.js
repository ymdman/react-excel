import React from 'react';

// export default class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>{this.props.headers}</th>
//           </tr>
//         </thead>
//       </table>
//     );
//   }
// }

const Header = props => (
  <table>
    <thead>
      <tr>
        <th>{props.headers}</th>
      </tr>
    </thead>
  </table>
);

Header.propTypes = {
  headers: React.PropTypes.arrayOf(React.PropTypes.string),
};

Header.defaultProps = {
  headers: [],
};

export default Header;

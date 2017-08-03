import React from 'react';
import Header from './Header';

// export default class App extends React.Component {
//   render() {
//     return (
//       <h1>fuga</h1>
//     );
//   }
// }

const headers = ['タイトル', '著者', '言語', '出版年', '売り上げ部数'];

const App = () => (
  <Header headers={headers} />
);

export default App;

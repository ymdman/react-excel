import React from 'react';
import Header from './Header';

const headerItems = [
  { title: 'タイトル', index: 0 },
  { title: '著者', index: 1 },
  { title: '言語', index: 2 },
  { title: '出版年', index: 3 },
  { title: '売り上げ部数', index: 4 },
];

const App = () => (
  <Header headerItems={headerItems} />
);

export default App;

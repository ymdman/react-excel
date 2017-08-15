import React from 'react';
import Table from './Table';

const headerItems = [
  'タイトル',
  '著者',
  '言語',
  '出版年',
  '売り上げ部数',
];

const tableData = [
  ['The Lord of the Rings', 'J. R. R. Tolkien', 'English', '1954-1955', '150 million'],
  ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry', 'French', '1943', '140 million'],
  ['Harry Potter and the Philosophers Stone', 'J. K. Rowling', 'English', '1997', '107 million'],
  ['And Then There Were None', 'Agatha Christie', 'English', '1939', '100 million'],
  ['Dream of the Red Chamber', 'Cao Xueqin', 'Chinese', '1754-1791', '100 million'],
  ['The Hobbit', 'J. R. R. Tolkien', 'English', '1937', '100 million'],
  ['She: A History of Adventure', 'H. Rider Haggard', 'English', '1887', '100 mixllio'],
];

const App = () => (
  <Table headerItems={headerItems} tableData={tableData} />
);

export default App;

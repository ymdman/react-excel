import React from 'react';
import Table from './Table';

const headerItems = [
  { title: 'タイトル', index: 0 },
  { title: '著者', index: 1 },
  { title: '言語', index: 2 },
  { title: '出版年', index: 3 },
  { title: '売り上げ部数', index: 4 },
];

const tableData = [
  { data: ['The Lord of the Rings', 'J. R. R. Tolkien', 'English', '1954-1955', '150 million'], index: 0 },
  { data: ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry', 'French', '1943', '140 million'], index: 1 },
  { data: ['Harry Potter and the Philosophers Stone', 'J. K. Rowling', 'English', '1997', '107 million'], index: 2 },
  { data: ['And Then There Were None', 'Agatha Christie', 'English', '1939', '100 million'], index: 3 },
  { data: ['Dream of the Red Chamber', 'Cao Xueqin', 'Chinese', '1754-1791', '100 million'], index: 4 },
  { data: ['The Hobbit', 'J. R. R. Tolkien', 'English', '1937', '100 million'], index: 5 },
  { data: ['She: A History of Adventure', 'H. Rider Haggard', 'English', '1887', '100 mixllio'], index: 6 },
];

const App = () => (
  <Table headerItems={headerItems} tableData={tableData} />
);

export default App;

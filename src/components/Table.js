import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.sort = this.sort.bind(this);
    this.state = {
      tableData: this.props.tableData,
      sortBy: null,
      descending: false,
    };
  }

  sort(e) {
    const column = e.target.cellIndex;
    const tableData = this.state.tableData.slice();
    const descending = this.state.sortBy === column && !this.state.descending;
    tableData.sort((a, b) => {
      let data;

      if (descending) {
        data = (a[column] < b[column] ? 1 : -1);
      } else {
        data = (a[column] > b[column] ? 1 : -1);
      }

      return data;
    });

    this.setState({
      tableData,
      sortBy: column,
      descending,
    });
  }

  render() {
    return (
      <table className="table" role="grid">
        <thead>
          <tr>
            {this.props.headerItems.map((headerItems, index) => {
              let newHeaer = headerItems;

              if (this.state.sortBy === index) {
                newHeaer += this.state.descending ? ' \u2191' : ' \u2193';
              }
              return <th key={newHeaer} onClick={this.sort} role="gridcell">{newHeaer}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.tableData.map(tableData => (
            <tr key={tableData}>
              {tableData.map(data => (
                <td key={data}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  headerItems: React.PropTypes.arrayOf(React.PropTypes.string),
  tableData: React.PropTypes.arrayOf(React.PropTypes.array),
};

Table.defaultProps = {
  headerItems: [],
  tableData: [],
};

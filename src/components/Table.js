import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.sort = this.sort.bind(this);
    this.state = {
      tableData: this.props.tableData,
    };
  }

  sort(e) {
    const column = e.target.cellIndex;
    const tableData = this.state.tableData.slice();

    tableData.sort((a, b) => {
      const data = a[column] > b[column] ? 1 : -1;

      return data;
    });

    this.setState({ tableData });
  }

  render() {
    return (
      <table className="table" role="grid">
        <thead>
          <tr>
            {this.props.headerItems.map(headerItems => (
              <th key={headerItems} onClick={this.sort} role="gridcell">
                {headerItems}
              </th>
            ))}
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

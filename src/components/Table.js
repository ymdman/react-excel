import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: this.props.tableData,
    };
  }


  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            {this.props.headerItems.map(headerItems => (
              <th key={headerItems.index}>{headerItems.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.tableData.map(tableData => (
            <tr key={tableData.index}>
              {tableData.data.map(data => (
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
  headerItems: React.PropTypes.arrayOf(React.PropTypes.object),
  tableData: React.PropTypes.arrayOf(React.PropTypes.object),
};

Table.defaultProps = {
  headerItems: [],
  tableData: [],
};

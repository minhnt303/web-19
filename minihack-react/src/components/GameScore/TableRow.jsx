import React from 'react';
import { Input } from 'reactstrap';

// props
//   values: array
//   rowIndex: number;
//   handleInputChange: (value, row, col) => void;
const TableRow = (props) => {
  return (
    <tr>
      <td>Round {props.rowIndex + 1}</td>
      <td>
        <Input
          value={props.values[0]}
          type='number'
          onChange={(e) => {
            props.handleInputChange(e.target.value, props.rowIndex, 0);
          }}
        />
      </td>
      <td>
        <Input
          value={props.values[1]}
          type='number'
          onChange={(e) => {
            props.handleInputChange(e.target.value, props.rowIndex, 1);
          }}
        />
      </td>
      <td>
        <Input
          value={props.values[2]}
          type='number'
          onChange={(e) => {
            props.handleInputChange(e.target.value, props.rowIndex, 2);
          }}
        />
      </td>
      <td>
        <Input
          value={props.values[3]}
          type='number'
          onChange={(e) => {
            props.handleInputChange(e.target.value, props.rowIndex, 3);
          }}
        />
      </td>
    </tr>
  );
};

export default TableRow;
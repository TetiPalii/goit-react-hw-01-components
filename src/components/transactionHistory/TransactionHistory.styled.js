import styled from 'styled-components';

export const TableContainer = styled.div`
  margin-top: 25px;
`;

export const Table = styled.table`
  width: 380px;
  border: 1px solid grey;
  border-collapse: collapse;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  margin: 0 auto;

  text-align: center;
`;

// export const TableHead = styled.thead`
//   border: solid 1px grey;
// `;

export const TableRow = styled.tr`
  background-color: #8ebde0;
  color: #fff;
  padding: 10px 0;
  text-transform: uppercase;
`;

export const TbodyRow = styled.tr`
  &:nth-child(2n + 2) {
    background-color: #c2dbed;
  }
  border: solid 2px grey;
`;

export const Td = styled.td`
  border: solid 1px #718ea3;
`;

import styled from 'styled-components';

export const StatsSection = styled.section`
  width: 380px;
  background-color: #fff;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const StatsTitle = styled.h2`
  font-size: 25px;
  color: rgb(144, 142, 142);
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const StatListItem = styled.li`
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

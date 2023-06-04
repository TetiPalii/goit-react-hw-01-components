import styled from 'styled-components';

export const FriendListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const Status = styled.span`
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
  border-radius: 50%;
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

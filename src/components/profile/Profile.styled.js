import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  background-color: #fff;
  border: 1px;
  padding: 15px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  border: 1px solid grey;
  border-radius: 50%;
  padding: 30px;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: 600;
`;

export const TagLokation = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  color: rgb(144, 142, 142);
`;
export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-weight: 600;
  padding: 0;
`;

export const StatsListItem = styled.li`
  border: 1px solid grey;
  padding: 10px;
  background-color: rgba(51, 40, 145, 0.11);
`;
export const Label = styled.span`
  margin-right: 10px;
  color: rgb(144, 142, 142);
  font-weight: 400;
`;

import styled from 'styled-components';

export const Box = styled.View`
  width: 100%;
  height: 10%;
`;

export const ContainerChat = styled.View`
  background-color: #f6f7fd;
  height: 80%;
`;

export const ContainerMessageSend = styled.View`
  width: 80%;
  height: auto;
  min-height: 30px;
  background-color: #e65a0d;
  margin: 10px 0;
  margin-left: 15%;
  border-radius: 10px;
  padding: 10px;
`;
export const ContainerMessageRecive = styled.View`
  width: 80%;
  height: auto;
  min-height: 30px;
  background-color: #fefffe;
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px;
  margin-left: 3%;
`;

export const TextMessage = styled.Text`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 600;
`;
export const BoxHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  margin-left: 12px;
`;

export const TextName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: black;
  margin-left: 12px;
`;

export const TextNick = styled.Text``;

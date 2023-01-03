import styled from 'styled-components';

export const Box = styled.View`
  width: 100%;
  height: 10%;
  background-color: white;
  min-height: 60px;
`;

export const ContainerMessage = styled.View`
  width: 80%;
  height: auto;
  min-height: 30px;
  background-color: ${props => (props.recive ? 'white' : '#e65a0d')};
  margin: 5px 0;
  margin-left: ${props => (props.recive ? '3%' : '15%')};
  border-radius: 10px;
  padding: 10px;
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

export const TextHora = styled.Text`
  font-size: 10px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-weight: 700;
`;

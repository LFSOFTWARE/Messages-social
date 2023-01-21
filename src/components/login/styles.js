import styled from 'styled-components';

export const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 40%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerLogin = styled.View`
  width: 100%;
  height: 70%;
  background-color: white;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;
export const InputTextField = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #f3f5f7;
  border-radius: 30px;
  margin-top: 10px;
  padding: 10px 20px;
`;

export const ButonLogin = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  background-color: green;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
`;

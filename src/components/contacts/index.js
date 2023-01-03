import {
  Container,
  HeaderNav,
  PerfilPictureCircle,
  SubTitle,
  TextName,
} from '../global/style';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import {BoxRwContact} from './style';
const ContactRow = ({user, navigation}) => {
  return (
    <BoxRwContact onPress={() => navigation.navigate('Profile', {user})}>
      <PerfilPictureCircle
        source={{
          uri: user?.img,
        }}
      />
      <View>
        <TextName>{user?.name}</TextName>
        <SubTitle>{user?.last}</SubTitle>
      </View>
    </BoxRwContact>
  );
};
export const Contacts = ({navigation}) => {
  const [users, setUsers] = useState([
    {
      name: 'Elon Musk',
      last: 'message',
      img: 'https://i.pinimg.com/736x/0f/91/77/0f917784d7c0a244e2256e2744fce88c.jpg',
    },
    {
      name: 'luiz',
      last: 'message',
      img: 'https://thumbs.dreamstime.com/b/mulher-que-faz-o-selfie-e-que-mostra-l%C3%ADngua-77768926.jpg',
    },
    {
      name: 'Gustavo',
      last: 'message',
      img: 'https://m.media-amazon.com/images/M/MV5BZTlhM2NmOTctMGNiZS00ZjUwLTkzM2EtNzdjNTU1ZWI3Y2Q1XkEyXkFqcGdeQXVyMTExNzkxOTY@._V1_.jpg',
    },
  ]);
  return (
    <Container>
      <HeaderNav />
      <FlatList
        data={users}
        renderItem={user => (
          <ContactRow user={user?.item} navigation={navigation} />
        )}
      />
    </Container>
  );
};

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
    <BoxRwContact onPress={() => navigation.navigate('Chat', {user})}>
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
      name: 'Lau',
      last: 'message',
      img: 'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/313035711_1912069085802783_3307213251270506624_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ilgWSYIhBpQAX-cA4WZ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjk2MDgxNjU1MTE2MzUxOTg4NA%3D%3D.2-ccb7-5&oh=00_AfB9CVaJIBKvARUYoSse2yeRbKAeW1RV1-8n4HfWw6DjaA&oe=63C88E7E&_nc_sid=1527a3',
    },
    {
      name: 'Elon Musk',
      last: 'message',
      img: 'https://i.pinimg.com/736x/0f/91/77/0f917784d7c0a244e2256e2744fce88c.jpg',
    },
    {
      name: 'Gustavo',
      last: 'message',
      img: 'https://m.media-amazon.com/images/M/MV5BZTlhM2NmOTctMGNiZS00ZjUwLTkzM2EtNzdjNTU1ZWI3Y2Q1XkEyXkFqcGdeQXVyMTExNzkxOTY@._V1_.jpg',
    },
    {
      name: 'Ana',
      last: 'Bloqueado',
      img: 'https://thumbs.dreamstime.com/b/mulher-que-faz-o-selfie-e-que-mostra-l%C3%ADngua-77768926.jpg',
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

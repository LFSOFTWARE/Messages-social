import React, {Fragment, useContext, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {AppStateContext} from '../../context';
import {Container, PerfilPictureCircle, TextName} from '../global/style';
import {Box, TextMessage, BoxHeader, ContainerMessage, TextHora} from './style';

const ChatFeedAndSender = () => {
  let refList = useRef(null);
  const {messages} = useContext(AppStateContext);
  return (
    <Fragment>
      <FlatList
        ref={ref => (refList = ref)}
        onContentSizeChange={() => refList.scrollToEnd()}
        data={messages}
        renderItem={({item}) => {
          var horas = item?.date?.getHours();
          var minutos = item?.date?.getMinutes();
          if (item?.type === 'recive') {
            return (
              <ContainerMessage recive key={Math.random()}>
                <TextMessage color="black">{item?.message}</TextMessage>
                <TextHora>{`${horas}:${minutos}`}</TextHora>
              </ContainerMessage>
            );
          }
          return (
            <ContainerMessage key={Math.random()}>
              <TextMessage color="white">{item?.message}</TextMessage>
              <TextHora>{`${horas}:${minutos}`}</TextHora>
            </ContainerMessage>
          );
        }}
      />
    </Fragment>
  );
};

export const Chat = () => {
  const [message, setMessage] = useState('');
  const {setMessages} = useContext(AppStateContext);

  const KEYBOARD_AVOIDING_BEHAVIOR = Platform.select({
    ios: 'padding',
    android: 'height',
  });

  const styles = StyleSheet.create({
    container: {
      marginTop: 16,
      marginHorizontal: 16,
    },
    scrollViewContainer: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      top: 10,
    },
    sendButton: {
      backgroundColor: 'black',
      color: 'white',
      height: 40,
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 5,
    },
    messageTextInputContainer: {
      justifyContent: 'flex-end',
      paddingHorizontal: 5,
      paddingVertical: 5,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    messageTextInput: {
      flex: 1,
      minHeight: 40,
      maxHeight: 90,
      paddingHorizontal: 12,
      fontSize: 17,
      paddingTop: 8,
      marginHorizontal: 5,
      backgroundColor: '#F6F7FD',
      borderRadius: 10,
    },
    chatBoxInput: {
      backgroundColor: 'white',
    },
  });

  const handleClick = () => {
    var str = message.replace(/( ){2,}/g, '$1');
    function isSameAnswer(el, index, arr) {
      if (el === ' ') {
        return false;
      }

      return true;
    }
    if (str.length > 0 && str.split().every(isSameAnswer)) {
      setMessages(prev => [...prev, {message, type: 'send', date: new Date()}]);
      setMessage('');
    }
  };

  return (
    <Container>
      <Box heigth border>
        <BoxHeader>
          <PerfilPictureCircle
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BZTlhM2NmOTctMGNiZS00ZjUwLTkzM2EtNzdjNTU1ZWI3Y2Q1XkEyXkFqcGdeQXVyMTExNzkxOTY@._V1_.jpg',
            }}
          />
          <View>
            <TextName>Gustavo</TextName>
            <Text>@Polos</Text>
          </View>
        </BoxHeader>
      </Box>
      <ChatFeedAndSender />
      <KeyboardAvoidingView
        behavior={KEYBOARD_AVOIDING_BEHAVIOR}
        keyboardVerticalOffset={76}>
        <SafeAreaView style={styles.chatBoxInput}>
          <View style={styles.messageTextInputContainer}>
            <TextInput
              style={styles.messageTextInput}
              placeholder="Digite sua mensagem..."
              placeholderTextColor={'black'}
              multiline
              value={message}
              onChangeText={text => setMessage(text)}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleClick}>
              <Text style={{color: 'white'}}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Container>
  );
};

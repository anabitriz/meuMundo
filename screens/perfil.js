import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

import {
  getAuth,
  signOut,
  updatePassword
} from "firebase/auth";

export default function Perfil({ navigation }) {

  const auth = getAuth();

  const [novaSenha, setNovaSenha] = useState('');

  function sair() {

    signOut(auth)

      .then(() => {

        navigation.navigate("Login");

      });

  }

  function alterarSenha() {

  if(novaSenha.length < 6) {

    alert("Senha precisa ter 6 caracteres");

    return;

  }

  alert("Faça login novamente para alterar a senha");

  navigation.navigate("Login");

}

  return (

    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Text>
        {auth.currentUser?.email}
      </Text>

      <TextInput

        placeholder="Nova senha"

        value={novaSenha}

        onChangeText={setNovaSenha}

        secureTextEntry

        style={{
          borderWidth: 1,
          width: 220,
          margin: 10,
          padding: 10
        }}

      />

      <Button
        title="Alterar senha"
        onPress={alterarSenha}
      />

      <View style={{ marginTop: 20 }}>

        <Button
          title="Sair"
          onPress={sair}
        />

      </View>

    </View>

  );

}
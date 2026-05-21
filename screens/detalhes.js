import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

export default function Detalhes({ route }) {

  const { pais } = route.params;

  return (

    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Image

        source={{ uri: pais.flags.png }}

        style={{
          width: 200,
          height: 120,
          marginBottom: 20
        }}

      />

      <Text>
        País: {pais.name.common}
      </Text>

      <Text>
        Capital: {pais.capital?.[0]}
      </Text>

    </View>

  );

}
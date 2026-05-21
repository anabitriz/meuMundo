import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from "react-native";

import axios from "axios";

export default function Home({ navigation }) {
  const [paises, setPaises] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    buscarPaises();
  }, []);

  async function buscarPaises() {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags",
      );

      setPaises(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const paisesFiltrados = paises.filter((item) =>
    item.name.common.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#164bdd",
      }}
    >
      <TextInput
        placeholder="Pesquisar país"
        value={busca}
        onChangeText={setBusca}
        style={{
          borderWidth: 2,
          marginBottom: 10,
          padding: 10,
          borderRadius: 15,
          backgroundColor: "white",
        }}
      />

      <FlatList
        data={paisesFiltrados}
        keyExtractor={(item) => item.name.common}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
              borderWidth: 2,
              padding: 10,
              borderRadius: 15,
              backgroundColor: "white",
            }}
            onPress={() => navigation.navigate("Detalhes", { pais: item })}
          >
            <Image
              source={{ uri: item.flags.png }}
              style={{
                width: 60,
                height: 40,
                marginRight: 10,
                borderWidth: 1,
                borderRadius: 7,
              }}
            />

            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.name.common}
              </Text>
              <Text style={{ fontSize: 14 }}>{item.capital?.[0]}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Button  title="perfil" onPress={() => navigation.navigate("Perfil")}
      style={{
        
        


       }}
      />

      <Button
        title="Favoritos"
        onPress={() => navigation.navigate("Favoritos")}
      />
    </View>
  );
}

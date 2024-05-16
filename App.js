import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoDestaque}>Esse é o meu texto principal</Text>
      <Text style={[styles.textoCentralizado, styles.textoGeral]}>paragrafo 1</Text>
      <Text style={[styles.textoCentralizado, styles.textoGeral]}>paragrafo 2</Text>
      <Text style={styles.textoGeral}>paragrafo 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },

  textoCentralizado:{
  textAlign: 'center',

  },

  textoDestaque:{
    fontSize: 36,
    fontWeight: 'bold',
    color: 'red'

  },

  textoGeral: {
    fontSize:21,
    fontWeight:'bold'

  },
  
  
});

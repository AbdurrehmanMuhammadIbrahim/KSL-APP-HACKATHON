
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { getAuth, signInWithEmailAndPassword } from '../../Navigator/Firebase';



export default function Login({ navigation }) {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const Login = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);


      // go to selection
     
      navigation.navigate('Selection')

    } catch (err) {
      console.log(err.message)

    }
  }



  return (

    <View style={styles.container}>
      <Image source={require('../../assets/kahana.png')} style={styles.image} />
      <TextInput style={styles.input} onChangeText={(email) => { setemail(email) }} placeholder="Enter your email" />
      <TextInput secureTextEntry={true} style={styles.input} onChangeText={(password) => { setpassword(password) }} placeholder="Enter password" />
      <Pressable style={styles.button} onPress={Login} >
        <Text style={styles.text}>Login As Manager</Text>
      </Pressable>

      {/* <Pressable style={styles.button}  >
        <Text style={styles.text}>Login As Manager</Text>
      </Pressable> */}

      {/* <Pressable style={styles.button} >
        <Text style={styles.text} onPress={() => navigation.navigate("Signup")}>Create account</Text>
      </Pressable> */}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  image: {
    height: 100,
    width: 200,
    marginBottom:140,
  },
  button: {

    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 15,
    margin: 5,
    width: 260
  },
  accbutton: {

  },
  input: {
    height: 40,
    width: 250,
    margin: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    backgroundColor: "green",
    color: "white",
    borderRadius: 15,
  }
});
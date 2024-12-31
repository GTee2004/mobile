import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';
export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại!');
    } else {
      Alert.alert('Số điện thoại của bạn', phoneNumber);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đăng nhập</Text>
      <Text style={styles.text2}>Nhập số điện thoại</Text>
      <Text style={styles.text3}>Dùng số điện thoại để đăng nhập
         hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        value={phoneNumber}/>
        <View style={styles.buttonContainer}>
          <Button title="Tiếp Tục" onPress={handleContinue} color="gray" />
       </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 30,
    fontSize: 22,
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: 'gray',
  },

  text2: {
    marginTop: 30,
    paddingLeft: 10,
    fontSize: 15,
    marginLeft: 20,
  },

  text3: {
    fontSize: 13,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 20,
  },

  input: {
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    color: 'black',
    overflow: 'hidden',
    marginLeft: 20,
    marginRight: 20,
  },
});

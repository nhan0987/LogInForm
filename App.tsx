import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {style} from './home/style/style';




export default function App() {
  return (
    <View style={style.container}>
      <View style={style.subcontainer}>
        <View style={style.item}>
          <Text style={style.title}>Đăng nhập</Text>
          <View style={style.inputItem}>
            <TextInput style={[style.input,style.shadow]}
              placeholder='Tên đăng nhập'
            />
            <TextInput style={[style.input,style.shadow]}
              placeholder='Mật khẩu'
            />
            
          </View>
          <TouchableOpacity style={style.buttonLogin}>
            <Text style={style.textLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

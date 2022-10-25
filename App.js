import {StyleSheet, View, Text} from 'react-native';
import Card from './component/card';

export default function App() {
  return (
    <View style={styles.base}>
      <Text>리액트 네이티브로 샘플앱만들기_쏘냐</Text>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#c1e3e3',
    height: '100%',
  },
});

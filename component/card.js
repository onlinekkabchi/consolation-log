import {useEffect, useState} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

export default function Card() {
  const [txt, setTxt] = useState('first');
  const [ticket, setTicket] = useState(0);
  const [data, setData] = useState(null);

  const getMovieList = async () => {
    await fetch(
      'https://data.mongodb-api.com/app/application-1-qqykd/endpoint/sender',
    )
      .then(res => res.json())
      .then(res => JSON.parse(res))
      .then(ressult => setData(ressult))
      .catch(err => console.log(err));
  };

  const clickandchange = () => {
    if (ticket > data.length - 2) {
      setTicket(0);
    } else {
      setTicket(t => t + 1);
    }
    setTxt(data[ticket].fullplot);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <Pressable
        onPress={clickandchange}
        style={({pressed}) => [
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
            backgroundColor: pressed ? '#c1efff' : '#c1e3e3',
          },
        ]}>
        <View style={styles.card}>
          <Text>{txt}</Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 'auto',
    borderRadius: 15,
    padding: 15,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView from './MapView';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView/>
      <StatusBar style="auto" />
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
  map: {
    width: '100%',
    height: '100%',
  },
});


const points = [{latitude: 6.83646681, longitude: 79.77121907},
  {latitude: 6.82776681, longitude: 79.871319},
  {latitude: 6.82176681, longitude: 79.871319},
  {latitude: 6.83776681, longitude: 79.871319},
  {latitude: 6.83176681, longitude: 79.871319},
  {latitude: 6.83976681, longitude: 79.861319},
  {latitude: 6.83076681, longitude: 79.861319},
  {latitude: 6.82776681, longitude: 79.861319},
  {latitude: 6.82076681, longitude: 79.871319},
  {latitude: 6.82076681, longitude: 79.861319},
  {latitude: 6.81076681, longitude: 79.861319},
  {latitude: 6.83776681, longitude: 79.869319},
  {latitude: 6.83276681, longitude: 79.869319},
  {latitude: 6.81976681, longitude: 79.869319},
  {latitude: 6.83776681, longitude: 79.867319},
  {latitude: 6.83776681, longitude: 79.865319},
  {latitude: 6.83646681, longitude: 79.77121907},
  {latitude: 6.82776681, longitude: 79.871319},
  {latitude: 6.82176681, longitude: 79.871319},
  {latitude: 6.83776681, longitude: 79.871319},
  {latitude: 6.83176681, longitude: 79.871319},
  {latitude: 6.83976681, longitude: 79.861319},
  {latitude: 6.83076681, longitude: 79.861319},
  {latitude: 6.82776681, longitude: 79.861319},
  {latitude: 6.82076681, longitude: 79.871319},
  {latitude: 6.82076681, longitude: 79.861319},
  {latitude: 6.81076681, longitude: 79.861319},
  {latitude: 6.83776681, longitude: 79.869319},
  {latitude: 6.83276681, longitude: 79.869319},
  {latitude: 6.81976681, longitude: 79.869319},
  {latitude: 6.83776681, longitude: 79.867319},
  {latitude: 6.83776681, longitude: 79.865319},
  {latitude: 6.84076681, longitude: 79.871319},
  {latitude: 6.83646681, longitude: 79.77121907},
  {latitude: 6.82776681, longitude: 79.871319},
  {latitude: 6.82176681, longitude: 79.871319},
  {latitude: 6.83776681, longitude: 79.871319},
  {latitude: 6.83176681, longitude: 79.871319},
  {latitude: 6.83976681, longitude: 79.861319},
  {latitude: 6.83076681, longitude: 79.861319},
  {latitude: 6.82776681, longitude: 79.861319},
  {latitude: 6.82076681, longitude: 79.871319},
  {latitude: 6.82076681, longitude: 79.861319},
  {latitude: 6.81076681, longitude: 79.861319},
  {latitude: 6.83776681, longitude: 79.869319},
  {latitude: 6.83276681, longitude: 79.869319},
  {latitude: 6.81976681, longitude: 79.869319},
  {latitude: 6.83776681, longitude: 79.867319},
  {latitude: 6.83776681, longitude: 79.865319},
  {latitude: 6.84076681, longitude: 79.871319},
  {latitude: 6.841776681, longitude: 79.869319},
  {latitude: 6.83646681, longitude: 79.77121907},
  {latitude: 6.82776681, longitude: 79.871319},
  {latitude: 6.82176681, longitude: 79.871319},
  {latitude: 6.83776681, longitude: 79.871319},
  {latitude: 6.83176681, longitude: 79.871319},
  {latitude: 6.83976681, longitude: 79.861319},
  {latitude: 6.83076681, longitude: 79.861319},
  {latitude: 6.82776681, longitude: 79.861319},
  {latitude: 6.82076681, longitude: 79.871319},
  {latitude: 6.82076681, longitude: 79.861319},
  {latitude: 6.81076681, longitude: 79.861319},
  {latitude: 6.83776681, longitude: 79.869319},
  {latitude: 6.83276681, longitude: 79.869319},
  {latitude: 6.81976681, longitude: 79.869319},
  {latitude: 6.83776681, longitude: 79.867319},
  {latitude: 6.83776681, longitude: 79.865319},
  {latitude: 6.84076681, longitude: 79.871319},
  {latitude: 6.841776681, longitude: 79.869319},
  {latitude: 6.84076681, longitude: 79.871319},

];

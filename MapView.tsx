import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Mapview, {Heatmap, Polygon, PROVIDER_GOOGLE, Marker} from "react-native-maps"

export default function MapView() {
  return (
    <View style={styles.container}>
      <Mapview
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        key={"AIzaSyBYFvgPfkNTntWllsf-To4l9xPGoR0UhT0"}
        initialRegion={{
          latitude: 6.83646681, 
          longitude: 79.77121907,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      >
        {/* <Marker
          coordinate={{latitude: 6.82776681, longitude: 79.871319}}
          onPress={() => console.log('suhsuhsush')}
        > */}
          <Polygon
            coordinates={points}
            fillColor='#bf0000'
            // onPress={() => {console.log("sujhshuhu")}}
            tappable={true}
            onPress={() => console.log("sosiohnion")}
            // opacity={1}
            // radius={25}
            // maxIntensity={100}
            // gradientSmoothing={10}
            // heatmapMode={"POINTS_DENSITY"}
          />
        {/* </Marker> */}
      </Mapview>
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

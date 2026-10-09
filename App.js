import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import utility from "./utils"
import TopBar from "./components/topBar"
import TopUsers from './components/topUsers/topUsers';
import FeedCard from './components/feedCard/feedCard';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <TopBar/>
      <TopUsers/>
      </View>
      <FeedCard/>
      {/* <StatusBar style="auto" /> */}
      <Text>bottom bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor: utility.darkTheme.backgroundColor,
    alignItems: 'center',
    color: utility.darkTheme.color,
    justifyContent:"space-between",
    height:"100%",
    paddingTop:40
  },
  text:{
   color:utility.darkTheme.color
  }
});

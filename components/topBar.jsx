import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity} from "react-native";
import { useFonts } from "@expo-google-fonts/playwrite-cu-guides";
import { PlaywriteAUQLD_400Regular } from "@expo-google-fonts/playwrite-au-qld"; 
import { Bell, EllipsisVertical } from "lucide-react-native";
export default function TopBar() {
    const [fontsLoaded] = useFonts({PlaywriteAUQLD_400Regular})
    if(!fontsLoaded) return null
    return (
        <View style={styles.topContainer}>
            <Text style={styles.topHead}>Compi</Text>
            <View style={styles.rightContainer}>
                <Image style={styles.icons}
                source={{uri:"https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/bell-icon.png"}}
                />
                <Bell color={"white"}/>
                <Pressable onPress={()=> console.log("menu is opened")}>

                <EllipsisVertical color={"white"}/>
                </Pressable>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    whiteText:{
        color:"white"
    },
    icons:{
        height:"20px",
        width:"20px",
        filter:"invert(100%)"
       
    },
    topHead:{
        color:"white",
        fontFamily: "PlaywriteAUQLD_400Regular",
        fontSize:24
    },
    rightContainer:{
        display:"flex",
        flexDirection:"row",
        gap:20
    },
    topContainer:{
        width:"100%",
        display:"flex",
        // borderWidth:1,
        borderColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:10,
        paddingLeft:10,
        alignItems:"center"
  
    }
})
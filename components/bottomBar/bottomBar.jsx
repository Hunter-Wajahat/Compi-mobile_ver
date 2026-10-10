import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { Home, CircleUser, UserPlus, Shield } from "lucide-react-native";


export default function BottomBar(){
    return (
        <View style={bottomStyles.bottomBarContainer}>
            <Text><Home color={"white"}/></Text>
            <Text><CircleUser color={"white"}/></Text>
            <Text><UserPlus color={"white"}/></Text>
            <Text><Shield color={"white"}/></Text>
        </View>
    )
}

const bottomStyles = StyleSheet.create({
    bottomBarContainer: {
        borderWidth:1,
        borderColor:"white",
        width:"90%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        position:"absolute",
        bottom:20
    }
})
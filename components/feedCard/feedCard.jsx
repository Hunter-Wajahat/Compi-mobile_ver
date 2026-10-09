import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import { EllipsisVertical } from "lucide-react-native";

export default function FeedCard (){
    const bothUsers = [
        {
            image: ""
        }
    ]
    return (
        <View style={feedStyles.feedContainer}>
            <View style={feedStyles.cardTop}><Text style={feedStyles.texts}>10min ago</Text> <Text><EllipsisVertical color={"white"}/></Text></View>
            <View></View>
        </View>
    )
}

const feedStyles = StyleSheet.create({
    feedContainer :{
        width:"90%",
        height:"auto",
        borderWidth:1,
        borderColor:"white",
        padding:1

    },
    cardTop: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    texts:{
        color:"white"
    }
}) 
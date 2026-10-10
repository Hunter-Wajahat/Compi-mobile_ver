import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import { EllipsisVertical, ThumbsUp, MessageCircle, Share2 } from "lucide-react-native";
import utility from "../../utils";

export default function FeedCard() {
    const bothUsers = [
        {
            image: "https://instagram.fskt12-1.fna.fbcdn.net/v/t51.82787-19/799296744_17969075361170744_1808208635312346044_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42NDAuQzMifQ%3D%3D&_nc_ohc=cAcKky52QnsQ7kNvwEyb5k2&_nc_oc=AdrgvfYWPR-e0ZlqmDA_w6xi2IV2G0xOfQg134KHjgzm7t7ysTh4wcifbmTAaW9lKjRWhK2SyAPPtMMi4skALZp_&_nc_zt=24&_nc_ht=instagram.fskt12-1.fna&_nc_gid=Q5X2SsWbrDzi7j7VkfEObg&_nc_ss=7b6a8&oh=00_AQMqFn9tilKcD43lRgtVayK3Q85NzpHd2MHqABPeBhMTsQ&oe=6ACEE7B7",
            name: "Mujaheed",
            key: 1
        },
        {
            image: "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Black widow",
            key: 2
        }
    ]
    return (
        <View style={feedStyles.feedContainer}>
            <View style={feedStyles.cardTop}><Text style={feedStyles.texts}>10min ago</Text> <Text><EllipsisVertical color={"white"} /></Text>
            </View>

                <View style={feedStyles.userInFeedContainer}>

            {bothUsers.map((induser) => (
                    <View style={{gap:15, alignItems:"center"}} key={induser.key}>
                          <View style={{borderWidth:1, borderColor:"white", borderRadius:50, overflow:"hidden", height:70, width:70}}>
                        <Image style={{ width: 70, height: 70, objectFit:"cover" }}
                            source={{ uri: induser.image }}
                            />
                            </View>
                        <Text style={{color:"white", fontSize:15}}>
                            {induser.name}
                        </Text>
                    </View>
))}
                </View>
                <View style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-around", marginTop:20, marginBottom:10, borderTopWidth:0.5, borderColor:"white", alignItems:"center"}}>
                <Text><ThumbsUp height={40} color={"white"} /></Text>
                <Text><MessageCircle height={40} color={"white"}/></Text>
                <Text><Share2 height={40} color={"white"}/></Text>
                </View>
        </View>
    )
}

const feedStyles = StyleSheet.create({
    feedContainer: {
        width: "250px",
        height: "180px",
        borderWidth: 1,
        borderColor: "grey",
        padding:5,
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        backgroundColor: utility.cardTheme,
        marginTop:20

    },
    cardTop: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%"
    },
    texts: {
        color: "white"
    },
    userInFeedContainer: {
        display: "flex",
        flexDirection: "row",
        width:"80%",
        justifyContent:"space-between",
        alignItems:"center"

    }
}) 
import { View, Image, Pressable, Text, FlatList, StyleSheet } from "react-native"

export default function TopUsers(){
    const imagesUrls = [
        {
            img: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: 1
        },
        {
            img: "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id:2
        },
        {
            img: "https://instagram.fskt12-1.fna.fbcdn.net/v/t51.82787-19/799296744_17969075361170744_1808208635312346044_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42NDAuQzMifQ%3D%3D&_nc_ohc=cAcKky52QnsQ7kNvwEyb5k2&_nc_oc=AdrgvfYWPR-e0ZlqmDA_w6xi2IV2G0xOfQg134KHjgzm7t7ysTh4wcifbmTAaW9lKjRWhK2SyAPPtMMi4skALZp_&_nc_zt=24&_nc_ht=instagram.fskt12-1.fna&_nc_gid=Q5X2SsWbrDzi7j7VkfEObg&_nc_ss=7b6a8&oh=00_AQMqFn9tilKcD43lRgtVayK3Q85NzpHd2MHqABPeBhMTsQ&oe=6ACEE7B7",
            id:3
        },
        {
            img: "https://images.unsplash.com/vector-1756134095703-459bd2d1a671?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
            id:4
        }
    ]
  return (
    <View style={topUserStyles.conainer}>
        {imagesUrls.map((image)=> (

        <View key={image.id} style={topUserStyles.imageContainer}>
            <Image style={{width:75, height:75, objectFit:"cover center",}}
            source={{uri: image.img}}
            />
        </View>
        ))}
    </View>
  )
}

const topUserStyles = StyleSheet.create({
    conainer:{
        width:"100%",
        marginTop:20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    imageContainer:{
        borderWidth:3,
        borderColor:"linear-gradient(120deg, rgb(195, 24, 95), yellow)",
        borderRadius:50,
        overflow:"hidden"
    }
})
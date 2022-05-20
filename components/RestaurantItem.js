import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
    <View style={{marginTop: 10, padding:15, backgroundColor:'white'}}>
      <RestaurantImage/>
      <RestaurantInfo/>
    </View>
    </TouchableOpacity>
  );
}

//component inside other component

 const RestaurantImage = () => {
 return(
   <View>
    <Image
      source={{
        uri: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/25/15614775255199.jpg", 
      }}
      style={{ width: "100%", height: 180 }}
    />

    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>

    </View>
 );
};

const RestaurantInfo =() => {

  return(
<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop:10}}>

<View>
<Text style={{fontSize:15, fontWeight: 'bold'}}> FormHouse kitchen the cuisine</Text>
<Text style={{fontSize:13, color:'gray'}}> 30-45 min</Text>
</View>
<View style={{ backgroundColor: 'white', height:30, width:30, alignItems:'center', justifyContent:'center', borderRadius:15}}>
<Text> 4.5</Text>
</View>

</View>

  )
}
 
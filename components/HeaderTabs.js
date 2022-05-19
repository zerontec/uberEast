import { View, Text, TouchableOpacity, styleheet } from 'react-native'
import React,{ useState} from 'react'




export default function HeaderTabs() {

const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <View style={{flexDirection: "row", alignSelf: "center"}}>
     <HeaderButton 
     text= 'Delivery' 
     btnColor='black' 
     textColor='white' 
     activeTab={activeTab} 
     setActiveTab={setActiveTab} />

     <HeaderButton  
     text = 'Pickup' 
     btnColor='white' 
     textColor='black'
     activeTab={activeTab} 
     setActiveTab={setActiveTab} />

    </View>
  );
}

//add props to the button

/* Buttons  */
const HeaderButton = (props)=>( 

<TouchableOpacity 
style={{backgroundColor: props.activeTab ===  props.text ? 'black' : 'white',
paddingVertical:6, 
paddinHorizontal:16, 
borderRadius:30,
}}
 onPress={() => props.setActiveTab(props.text)}   >

<Text style={{color: props.activeTab === props.text ? 'white' : 'black', 
fontSize:15, 
fontWeight:'900' }}>{props.text} </Text>
</TouchableOpacity>



);





/*  <View style={style.container}> */



  


/* Porsp tetColor btnColor para el cambio dinamico cuando tocas uno  */
import { Text, View } from 'react-native'
import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/antDesign';

export default function SearchBar () {


  
    return (
      <View style={{marginTop:15, flexDirection:'row'}}>
       <GooglePlacesAutocomplete placeholder='Search'
       style = {{
          textInput:{
            backgroundColor: '#eee',
            borderRadius:20,
            fontWeight:'700',
            marginTop:7,
          },
          textInputContainer:{


            backgroundColor: '#eee',
            borderRadius:50,
            flexDirection:'row',
            alignItems:'center',
            marginRight:10,
          },

        }}
          renderLeftButton={()=>(

            <View style={{marginLeft:10}}>
            <Ionicons name='location-sharp' size={24}/> {/* icon location */}
            
            </View>


          )}

          renderRightButton={()=> (

            <View style={{flexDirection:'row',
            marginRight:8,
            backgroundColor: 'white',
            padding:9,
            borderRadius:30,
            alignItems:'center'
            
            
            
            }}>

              <AntDesign name='clockcircle' size={11} style={{ marginRight:6}}/>

              <Text>Search</Text>
              
              </View>


          )}

       />
      </View>
    )
  }

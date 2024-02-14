import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ProductByCategory = ({item ,selectedProductId}) => {
  return (
    <Pressable onPress={()=>selectedProductId(item.id)} style={styles.container}>
      <Text style={styles.text}> {item.nombre}</Text>
      <Image style={styles.image} source={{uri:item.imagen}} resizeMode="cover"/>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.catego,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        marginVertical:10,
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center",
        
        gap:20
    },
    text:{
        width:"60%",
        fontSize:20,
        fontFamily:fonts.ProtestRevolution,
        
    },
    image:{
        minWidth:90,
        minHeight:90,
        borderRadius:5
    }
})
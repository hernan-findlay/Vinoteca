import { StyleSheet, Text, View, Image, Pressable, handlerKeyword  } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import Header from '../components/Headers'
import fonts from '../utils/globals/fonts'

const ProductDetail = ({ productId, portrait }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    
    const productFound = products.find(product => product.id === productId);
    
    setProduct(productFound);
  }, [productId]);


  
  return (
    <View style={styles.container}>
      <Header title="Detalle del vino" />
      <View style={[styles.content, !portrait && { flexDirection: "row", gap: 10, padding: 20 }]} >
        <Image
          style={[styles.image, !portrait && { width: "40%", height: 200 }]}
          source={{ uri: product.imagen  }}
          resizeMode='cover'
        />
        <View style={[styles.containerText, !portrait && { width: "30%" }]}>
          <Text style={styles.nombre}>{product.nombre}</Text>
        </View>
        <View style={[styles.containerPrice, !portrait && { width: "20%", flexDirection: "column" }]}>
          <Text style={styles.precio}>$ {product.precio}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Comprar ahora</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.volver}>
            <Text style={styles.volvertext}>Volver</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },
  content:{
    width:"100%"
  },

  image:{
    width:"100%",
    height:300
  },
  containerText:{
    gap:25,
    paddingHorizontal:40,
    paddingVertical:25,
    backgroundColor:colors.text
  },

  containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:10,
      
  },
  nombre:{
    fontSize:20,
    fontFamily:fonts.ProtestGuerrilla
  },
  precio:{
    fontSize:30
  },
  buyNow:{
    backgroundColor:colors.primary,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  buyNowText:{
    color:"white"
  },
  volver:{
    backgroundColor:colors.primary,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  volvertext:{
    color:"black"
  }
})
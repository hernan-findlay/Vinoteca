import { StyleSheet, Text, View, Image, } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';
import { useGetProductQuery } from '../app/services/shop'
import Counter from '../components/Counter'
import { useEffect,useState } from 'react'


const ProductDetail = ({route}) => {
  const dispatch = useDispatch()
  const {productId} = route.params
  const {data:product} = useGetProductQuery(productId)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if(isLoading) return <View style={styles.container}>
                          <Spinner
                            visible={true}
                            textContent={'Cargando...'}
                            textStyle={styles.spinnerTextStyle}
                            color="white"
                            
                          /></View>

  return (
    <View style={styles.container}>
    <View style={styles.content} >
        <Image
          style={styles.image}
          source={{uri:product.imagen}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.nombre}>{product.nombre}</Text>
        </View>
        <View style={styles.containerPrice }>
          <Text style={styles.precio}>$ {product.precio}</Text>
          <Counter 
            initialValue={1}
            product={product} 
            textButton="Carrito" />
          
        </View>
      </View>
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
    gap:20,
    alignItems:"center",
    paddingHorizontal:20,
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
    fontSize:30,
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
  spinnerTextStyle:{
    color:"white"
  }
  
})
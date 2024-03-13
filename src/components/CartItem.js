import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem ,addCartItem } from '../features/cart/cartSlice'
import CounterCart from './CounterCart' 


const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({...item,quantity}))
      }
  return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.nombre}</Text>
                
                <CounterCart item={item} />
                <Text style={styles.text2}>Precio: ${item.precio} </Text>
            </View>
            <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                <Fontisto name="trash" size={24} color="black" />
            </Pressable>
            
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.tabtext,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.tabicon,
        fontSize:19,
        fontFamily:fonts.ProtestRevolution
    },
    text2:{
        color:colors.tabicon,
        fontSize:14,
        fontFamily:fonts.ProtestRevolution
    }
})
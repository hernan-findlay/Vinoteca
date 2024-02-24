import { StyleSheet, Text, View,Pressable } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'




const CartItem = ({item}) => {
  const dispatch = useDispatch()
return (
      <View style={styles.card}>
          <View style={styles.textContainer}>
              <Text style={styles.text}>{item.nombre}</Text>
              <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
              <Text style={styles.text2}>Precio: ${item.precio} </Text>
          </View>
          <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
              <EvilIcons name="trash" size={40} color="white" />
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
        height:100,
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
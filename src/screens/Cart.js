import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import fonts from '../utils/globals/fonts'
import { useSelector,useDispatch} from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'
import ConfirmButton from '../components/ConfirmButton'

const Cart = ({navigation}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    const localId = useSelector((state)=> state.auth.localId)
    const [triggerAddOrder] = usePostOrderMutation()

    const handlerAddOrder = async () => {
        const createdAt = new Date().toLocaleString()
        const order = {
            createdAt,
            ...cart
        }
         await triggerAddOrder({localId,order})
         dispatch(deleteCart())
         navigation.navigate("OrdersStack")
        }
  return (
    <View style={styles.container}>
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <ConfirmButton title="Confirmar compra" onPress={handlerAddOrder}/>
                
            <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:100,
        
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"gray",
       padding:5,
        justifyContent:"space-around",
        alignItems:"center"
    },
    confirmText:{
        fontFamily:fonts.Sixtyfour,
        fontSize:10,
        color:"white"
    }
})
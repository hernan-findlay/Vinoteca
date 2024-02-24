import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import fonts from '../utils/globals/fonts'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector((state)=> state.cart)

  return (
    <View style={styles.container}>
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
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
        marginBottom:100
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"gray",
        padding:10,
        justifyContent:"space-between",
    },
    confirmText:{
        fontFamily:fonts.Sixtyfour,
        fontSize:10,
        color:"white"
    }
})
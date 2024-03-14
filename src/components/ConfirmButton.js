import { StyleSheet, Text, View,Pressable } from 'react-native'
import colors from '../utils/globals/colors'


const AddButton = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}


export default AddButton


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.tabback,
        width:"30%",        
        margin:5
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:15
    }
})
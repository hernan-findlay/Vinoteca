import { StyleSheet, View } from 'react-native'

const ShadowPrimary = ({style,children}) => {

  return (
    <View style={[styles.container,style]}>
      {children}
    </View>
  )
}

export default ShadowPrimary

const styles = StyleSheet.create({
    container:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
    }
})
import { StyleSheet, Text, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';


const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
    <Spinner
      visible={true}
      textContent={'Cargando...'}
      textStyle={styles.spinnerTextStyle}
      color="white"
      
    /></View>

  )
}
export default LoadingSpinner
const styles = StyleSheet.create({})
import { View , Text ,StyleSheet,Platform ,StatusBar } from "react-native"
import colors from "../utils/globals/colors"
import fonts from "../utils/globals/fonts"

const Header = ({title="Vinoteca"}) => {

    return  <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:100,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        
    },
    text:{
        fontSize:30,
        fontFamily:fonts.Sixtyfour
    }
})
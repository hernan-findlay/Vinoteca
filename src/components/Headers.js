import { View , Text ,StyleSheet,Platform ,StatusBar, Pressable } from "react-native"
import colors from "../utils/globals/colors"
import fonts from "../utils/globals/fonts"
import {AntDesign} from "@expo/vector-icons"

const Header = ({title="Vinoteca",navigation}) => {

    return  <View style={styles.container}>
            {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={25} color="black"/>
                </Pressable>}
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
    },
    goBack:{
        position:"absolute",
        left:10,
        bottom:28

    }
})
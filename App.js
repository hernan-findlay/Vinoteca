import { StyleSheet,SafeAreaView ,useWindowDimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import ProductDetail from './src/screens/ProductDetail'
import colors from './src/utils/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'



const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  if(!fontsLoaded) return null

  
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <MainNavigator/>
    </>
    
  )
}

export default App


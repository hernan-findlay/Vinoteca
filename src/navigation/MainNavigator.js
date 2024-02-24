import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native-web'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import colors from '../utils/globals/colors'



const Tab = createMaterialBottomTabNavigator();


const MainNavigator = () => {
  return (
        <NavigationContainer>
           <Tab.Navigator
            initialRouteName="ShopStack"
            activeColor= {colors.tabicon}
            inactiveColor={colors.tabtext}
            barStyle={{ backgroundColor: colors.tabback,
                        position:'absolute',
                        }}
            >
                <Tab.Screen name='ShopStack'
                            component={ShopStack} 
                            options={{
                                    tabBarLabel: 'Productos',
                                    tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                    ),
                                    }}
                />
                <Tab.Screen name='CartStack' 
                            component={CartStack}   
                            options={{
                                    tabBarLabel: 'Carrito',
                                    tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="cart" color={color} size={26} />
                                    ),
                                    }}
                />                                      
                <Tab.Screen name='OrdersStack'
                            component={OrdersStack}
                            options={{
                                    tabBarLabel: 'Ordenes',
                                    tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="order-numeric-ascending" color={color} size={26} />
                                    ),
                                    }}
                />

           </Tab.Navigator>
        </NavigationContainer>
  )
}

export default MainNavigator


import { StyleSheet} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import colors from '../utils/globals/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileStack from './ProfileStack';





const Tab = createMaterialBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
            initialRouteName="ShopStack"
            activeColor= {colors.tabicon}
            inactiveColor={colors.tabtext}
            barStyle={{ backgroundColor: colors.tabback,
                        position:'absolute',
                        }}>
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
                <Tab.Screen name='ProfileStack'
                            component={ProfileStack}
                            options={{
                                    tabBarLabel: 'Perfil',
                                    tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="stamper" color={color} size={26} />
                                    ),
                                    }}
                />

           </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
   
})
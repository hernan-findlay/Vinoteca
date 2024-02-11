import { StyleSheet, Text, View,FlatList,handlerKeyword } from 'react-native'
import Header from '../components/Headers'
import Categories from '../components/Categories'
import Search from '../components/Search'

const Home = ({selectedCategoryState}) => {
    
  return (
    <>
        <Header title="Bienvenidos"/>
        <Search handlerKeyword={handlerKeyword}/>
        <Categories selectedCategoryState={selectedCategoryState}/>
    </>
  )
}
export default Home
const styles = StyleSheet.create({
  
})
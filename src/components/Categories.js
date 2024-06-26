import { StyleSheet, Text, View,FlatList } from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'
import CardCategory from './CardCategory'
import LoadingSpinner from './LoadingSpinner'
import Error from './Error'
import EmptyListComponent from './EmptyListComponent'




const Categories = ({navigation}) => {
  
  const {data:categories,isError,isLoading,isSuccess} = useGetCategoriesQuery()

  const onRetry = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="¡Ups! Algo salió mal." textButton="Recargar" onRetry={onRetry}/>
  if(isSuccess && categories === null) return <EmptyListComponent message="Sin Categorias"/>

  return (
    
    <FlatList
    data={categories}
    keyExtractor={item => item}
    renderItem={({item})=> <CardCategory item={item} navigation={navigation}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({})
import { FlatList, StyleSheet, Text, View ,handlerKeyword} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  const {data:products} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")
  const [isLoading, setIsLoading] = useState(true);

  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(()=>{
   
   
    setProductsFiltered(products)



   if(keyword) setProductsFiltered(products.filter(product => {
        const productTitleLower = product.nombre.toLowerCase()
        const keywordLower = keyword.toLowerCase()
    return productTitleLower.includes(keywordLower)
  }))
  },[categorySelected,keyword,products])

 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if(isLoading) return <View style={styles.container}>
                          <Spinner
                            visible={true}
                            textContent={'Cargando...'}
                            textStyle={styles.spinnerTextStyle}
                            color='white'
                          /></View>
  return (
    <>
        
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory navigation={navigation} item={item} />}
        />
    </>
  )
}

export default ProductsByCategory
const styles = StyleSheet.create({
  spinnerTextStyle:"white"
})
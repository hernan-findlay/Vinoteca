import { FlatList, StyleSheet, Text, View ,handlerKeyword} from 'react-native'
import products from '../utils/data/products.json'
import Header from '../components/Headers'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(() => {
    let filteredProducts = products;
  
    if (categorySelected) {
      filteredProducts = filteredProducts.filter(product => product.categoria === categorySelected)
    }
  
    if (keyword) {
      const keywordLower = keyword.toLowerCase();
      filteredProducts = filteredProducts.filter(product => {
        const productTitleLower = product.nombre.toLowerCase();
        return productTitleLower.includes(keywordLower);
      });
    }
  
    setProductsFiltered(filteredProducts);
  }, [categorySelected, keyword]);

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
const styles = StyleSheet.create({})
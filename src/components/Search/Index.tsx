import { MagnifyingGlass } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { useQueryProductsQuery } from '../../graphql/generated'
import { Product } from '../Product/Index'
import styles from './styles.module.scss'

export function Search() {

  const {data} = useQueryProductsQuery()
  console.log(data)

  const [searchProduct, setSearchProduct] = useState('')
  function handleSearchProduct(event: FormEvent) {
    event.preventDefault()
    setSearchProduct(event.target.value)
    console.log(searchProduct)
  }

  const lowerSearch = searchProduct.toLocaleLowerCase()

  const filterProducts = data?.produtos.filter((product) => product.nomeDoProduto.toLowerCase().includes(lowerSearch))
  console.log(filterProducts)  

  const isSearchInputEmpty = searchProduct.length === 0
  const isSearchInputNotEmpty = searchProduct.length > 0

  return (
    <>
      <form action="" className={styles.searchContainer} >
        <label htmlFor="">
          <MagnifyingGlass/>
          <input type="search" name="searchProducts" id="searchProducts" placeholder='Buscar' onChange={handleSearchProduct}/>
        </label>
      </form>
      <div className={styles.filterProduct}>
        {isSearchInputEmpty 
          ? <div className={styles.displayNone}/>
          : filterProducts.map(products => {
            return (
              <Product 
                key={products.id}
                title={products.nomeDoProduto}
                price={products.preco}
                createdAt={new Date(products.createdAt)}
                productImgUrl={products.imgUrl}
                isSearchInputNotEmpty= {isSearchInputNotEmpty}
              />
            )
            })
        }
    </div>
    </>
  )
}
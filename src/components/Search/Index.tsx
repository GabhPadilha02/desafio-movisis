import { Divide, MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { Produto, useQueryProductsQuery } from '../../graphql/generated'
import { Product } from '../Product/Index'
import { ProductsGalery } from '../ProductsGalery/Index'
import styles from './styles.module.scss'

export function Search() {
  const {data} = useQueryProductsQuery()
  console.log(data)
  const [searchProduct, setSearchProduct] = useState('')
  function handleSearchProduct(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setSearchProduct(event.target.value)
    console.log(searchProduct)
  }
  const lowerSearch = searchProduct.toLocaleLowerCase()
  const filterProducts = data?.produtos.filter((product) => product.nomeDoProduto.toLowerCase().includes(lowerSearch)) 
  const isSearchInputEmpty = searchProduct.length === 0
    
  return (
    <main className={styles.displayMainContainer}>
      <form action="" className={styles.searchContainer} >
        <label htmlFor="">
          <MagnifyingGlass/>
          <input type="search" 
            name="searchProducts"
            id="searchProducts" 
            placeholder='Buscar' 
            onChange={handleSearchProduct}
          />
        </label>
      </form>

      <div className={styles.galery}>
        {isSearchInputEmpty 
          ? <ProductsGalery/>
          : <div className={styles.filterProduct}>
              {filterProducts.map(products => {
            return (
              <Product 
                key={products.id}
                title={products.nomeDoProduto}
                price={products.preco}
                createdAt={new Date(products.createdAt)}
                productImgUrl={products.imgUrl}
              /> 
            )
            })}
            </div>
        }
      </div>
    </main>
  )
}
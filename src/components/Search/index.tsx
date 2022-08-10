import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { useApp } from '../../contexts/AppContext'
import { Product } from '../Product'
import styles from './styles.module.scss'

export function Search() {
  const { searchProductsByName, searchProduct, handleSearchProduct } = useApp()


  return (
    <main className={styles.displayMainContainer}>
      <form action="" className={styles.searchContainer} >
        <label htmlFor="">
          <MagnifyingGlass />
          <input type="search"
            name="searchProducts"
            id="searchProducts"
            placeholder='Buscar'
            onChange={handleSearchProduct}
          />
        </label>
      </form>

      <div className={styles.galery}>
        {searchProduct.length !== 0 &&
          <div className={styles.filterProduct}>
            {searchProductsByName.map(products => {
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
import { useEffect, useState } from 'react'
import { QueryProductsQuery, useQueryProductsQuery } from '../../graphql/generated'
import { FiltersBySelect } from '../FiltersBySelect/Index'
import { Product } from '../Product/Index'
import { Search } from '../Search/Index'
import styles from './styles.module.scss'

export function FiltersByPrice() {
  const { data } = useQueryProductsQuery()
  const [minPriceFilter, setMinPriceFilter] = useState('')
  const [maxPriceFilter, setMaxPriceFilter] = useState('')

  const [filteredProducts, setFilteredProducts] = useState<QueryProductsQuery[]>([])
  const [error, setError] = useState<null | "max" | "min">(null)

  useEffect(() => filterProducts(), [minPriceFilter, maxPriceFilter])

  console.log(minPriceFilter)

  function filterProducts() {
    if (parseFloat(minPriceFilter) !== 0 && parseFloat(minPriceFilter) > parseFloat(maxPriceFilter)) {
      setError("min")
    }

    if (parseFloat(minPriceFilter) !== 0 && parseFloat(maxPriceFilter) > parseFloat(minPriceFilter)) {
      setError("max")
    }

    if (minPriceFilter && maxPriceFilter) {
      return setFilteredProducts(data?.produtos.filter((product) => product.preco >= parseFloat(minPriceFilter) && product.preco <= parseFloat(maxPriceFilter)))
    }

    if (maxPriceFilter) {
      return setFilteredProducts(data?.produtos.filter((product) => product.preco <= parseFloat(maxPriceFilter)) || [])
    }

    if (minPriceFilter) {
      return setFilteredProducts(data?.produtos.filter((product) => product.preco >= parseFloat(minPriceFilter)) || [])
    }
  }

  console.log(`ola ${filteredProducts}`)
  console.log("error", error)

  return (
    <main className={styles.container}>
      <aside className={styles.sidebarContainer}>
        <h1>Filtrar</h1>
        <h2>Preço</h2>
        <form action="" className={styles.priceFilterContainer} >
          <label htmlFor="">De
            <input
              type="number"
              placeholder='R$ 0,00'
              name="minPrice"
              id="minPrice"
              onChange={(e) => setMinPriceFilter(e.target.value)}
            />
            {error === "min" && <span>Valor mínimo é maior que o valor máximo!</span> || error === "max" && <div />}
          </label>
          <label htmlFor="">Até
            <input
              type="number"
              placeholder='R$ 0,00'
              name="maxPrice"
              id="maxPrice"
              onChange={(e) => setMaxPriceFilter(e.target.value)}
            />
          </label>
        </form>
        <FiltersBySelect />
      </aside>
      <div className={styles.searchAndGaleryContainer}>
        {filteredProducts.length === 0
          ? <Search />
          : <div className={styles.productsFilteredByPrice}>
            {filteredProducts?.map(products => {
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
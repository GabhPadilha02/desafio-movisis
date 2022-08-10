import { useApp } from '../../contexts/AppContext'
import { Product } from '../Product'
import styles from './styles.module.scss'

export function Filters() {
  const { setMinPriceFilter, setMaxPriceFilter, filteredProducts, error } = useApp()

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
        <form action="" className={styles.orderFilterContainer}>
          <h1>Ordenar</h1>
          <label htmlFor="price"> Preço
            <select name="price" id="priceOption">
              <option value="Menor preço" selected>Menor preço</option>
              <option value="Maior preço">Maior preço</option>
            </select>
          </label>
          <label htmlFor="date">Data de inclusão
            <select name="date" id="date">
              <option value="Mais recente" selected>Mais recente</option>
              <option value="Menos recente">Menos recente</option>
            </select>
          </label>
        </form>
      </aside>
      <div className={styles.searchAndGaleryContainer}>
        {filteredProducts.length !== 0 &&
          <div className={styles.productsFilteredByPrice}>
            {filteredProducts?.map(product => {
              return (
                <Product
                  key={product.id}
                  title={product.nomeDoProduto}
                  price={product.preco}
                  createdAt={new Date(product.createdAt)}
                  productImgUrl={product.imgUrl}
                />
              )
            })}
          </div>
        }
      </div>
    </main>

  )
}
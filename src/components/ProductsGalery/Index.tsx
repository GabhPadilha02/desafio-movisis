import { Product } from "../Product/Index";
import style from './styles.module.scss'

export function ProductsGalery() {
  return (
    <main className={style.productsGaleryContainer}>
      <h1>
        Produtos
      </h1>
      <div className={style.gridGaleryProducts}> 
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
      
    </main>
  )
}
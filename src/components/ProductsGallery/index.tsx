import { Product } from "../Product";
import { useApp } from '../../contexts/AppContext'
import style from './styles.module.scss'

export default function ProductsGallery() {
  const { products, searchProduct, filteredProducts } = useApp()

  return (
    <main className={style.productsGaleryContainer}>
      {searchProduct.length === 0 && filteredProducts.length === 0 &&
          <div>
            <h1>Produtos</h1>
            <div className={style.gridGaleryProducts}>
              {products.map(p => {
                return (
                  <Product
                    key={p.id}
                    title={p.nomeDoProduto}
                    price={p.preco}
                    createdAt={new Date(p.createdAt)}
                    productImgUrl={p.imgUrl}
                  />
                )
              })}
            </div>
          </div>
         
      }
    </main>
  )
}
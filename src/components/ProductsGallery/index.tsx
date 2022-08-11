import { Product } from "../Product";
import { useApp } from '../../contexts/AppContext'
import style from './styles.module.scss'

export default function ProductsGallery() {
  const { filteredProducts } = useApp()
  
  return (
    <main className={style.productsGaleryContainer}>
      <div>
        <h1>Produtos</h1>
        <div className={style.gridGaleryProducts}>
          {filteredProducts.map(p => {
            return (
              <Product
                key={p.id}
                title={p.nomeDoProduto}
                price={p.preco}
                createdAt={new Date(p.createdAt)}
                productImgUrl={p.imgUrl}
                id={p.id}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
import { useQueryProductsQuery } from "../../graphql/generated";
import { Product } from "../Product/Index";
import style from './styles.module.scss'

export function ProductsGalery() {
  const {data} = useQueryProductsQuery()

  return (
    <main className={style.productsGaleryContainer}>
      <h1>
        Produtos
      </h1>
      <div className={style.gridGaleryProducts}> 
      {data?.produtos.map(products => {
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
      
    </main>
  )
}
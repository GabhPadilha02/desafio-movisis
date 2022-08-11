import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { Search } from "../components/Search";
import ProductsGallery from "../components/ProductsGallery";
import styles from "./Home.module.scss"

export function Home() {
   return (
      <>
         <Header />
         <div className={styles.container}>
            <Filters />
            <div className={styles.productsContainer}>
               <Search />
               <ProductsGallery />
            </div>
         </div>
      </>
   )
}
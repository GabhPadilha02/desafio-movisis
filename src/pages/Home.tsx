import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { Search } from "../components/Search";
import ProductsGallery from "../components/ProductsGallery";
import styles from "./Home.module.scss"
import { useApp } from "../contexts/AppContext";

export function Home() {
   const {filteredProducts} = useApp()
   const filteredProductsEmpty = filteredProducts.length === 0
   return (
      <>
         <Header />
         <div className={styles.container}>
            <Filters />
            <div className={styles.productsContainer}>
               {filteredProductsEmpty && <Search/>}
               <ProductsGallery/>  
            </div>
            
         </div>
      </>
   )
}
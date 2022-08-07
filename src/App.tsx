import { Header } from "./components/Header/Index";
import { Search } from "./components/Search/Index";
import { SidebarFilters } from "./components/SidebarFilters/Index";
import styles from './App.module.scss'
import { ProductsGalery } from "./components/ProductsGalery/Index";

export function App() {

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <SidebarFilters/>
        <div className={styles.contentContainer}>
          <Search/>
          <ProductsGalery/>
        </div>
      </main>
    </>
    
  )
}


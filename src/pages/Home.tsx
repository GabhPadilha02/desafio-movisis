import { Header } from "../components/Header/Index";
import { Search } from "../components/Search/Index";
import { SidebarFilters } from "../components/SidebarFilters/Index";
import styles from  './Home.module.scss'

export function Home() {
  return (
     <>
        <Header />
        <main className={styles.mainContainer}>
          <SidebarFilters/>
          <div className={styles.contentContainer}>
            <Search/>
          </div>
        </main>
     </>
      
  )
}
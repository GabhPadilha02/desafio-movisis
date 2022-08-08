import { Header } from "./components/Header/Index";
import { Search } from "./components/Search/Index";
import { SidebarFilters } from "./components/SidebarFilters/Index";
import styles from './App.module.scss'
import { ProductsGalery } from "./components/ProductsGalery/Index";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";

export function App() {

  return (
    <ApolloProvider client={client}>
      <Header />
      <main className={styles.mainContainer}>
        <SidebarFilters/>
        <div className={styles.contentContainer}>
          <Search/>
        </div>
      </main>
    </ApolloProvider>
    
  )
}


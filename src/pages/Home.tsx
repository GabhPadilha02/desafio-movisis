import { Header } from "../components/Header/Index";
import {FiltersByPrice} from "../components/FiltersByPrice/Index";
import styles from  './Home.module.scss'

export function Home() {
  return (
     <>
        <Header />
        <FiltersByPrice/>
     </>
      
  )
}
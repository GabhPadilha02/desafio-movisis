import { useState } from 'react'
import styles from './styles.module.scss'

export function FiltersBySelect() {

  return (
    <form action="" className={styles.orderFilterContainer}>
      <h1>Ordenar</h1>
      <label htmlFor="price"> Preço
        <select name="price" id="priceOption">
          <option value="Menor preço" selected>Menor preço</option>
          <option value="Maior preço">Maior preço</option>
        </select>
      </label>
      <label htmlFor="date">Data de inclusão
        <select name="date" id="date">
          <option value="Mais recente" selected>Mais recente</option>
          <option value="Menos recente">Menos recente</option>
        </select>
      </label>
    </form>
  )
}
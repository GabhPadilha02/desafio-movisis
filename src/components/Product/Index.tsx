import { Plus } from "phosphor-react";
import style from './styles.module.scss'

export function Product() {
  return (
    <div className={style.productContainer}>
      <img src="https://media.1815.io/topgear/i/width=892&height=502/2018/08/mansory-lamborghini-aventador-s-3-scaled.jpg" alt="" />
      <div className={style.infoProduct}>
        <p>Produto nome</p>
        <div className={style.displayPrice}>
          <span>R$119,90</span>
          <button className="backgroundPlus">
            <Plus size={24}/>
          </button>
        </div>
      </div>
    </div>
  )
}
import { Plus } from "phosphor-react";
import { FormEvent, useState } from "react";
import style from './styles.module.scss'

interface ProductProps{
  title: string
  price: number
  createdAt: Date
  productImgUrl?: string
};

export function Product(props: ProductProps) {
  return (
    <>
          <div className={style.productContainer}>
            <img src={props.productImgUrl} alt="" />
            <div className={style.infoProduct}>
              <p>{props.title}</p>
              <div className={style.displayPrice}>
                <span>{new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(props.price)}</span>
                <button className="backgroundPlus">
                  <Plus size={24}/>
                </button>
              </div>
            </div>
          </div>
    </>
  )
}
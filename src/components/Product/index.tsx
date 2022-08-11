import { Plus } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useApp } from '../../contexts/AppContext'
import style from './styles.module.scss'

interface ProductProps {
  id: string
  title: string
  price: number
  createdAt: Date
  productImgUrl?: string
};

export function Product(props: ProductProps) {
  const { id, title, price, createdAt, productImgUrl } = props;
  const { cart, setCart } = useApp();

  const handleAddProduct = () => {
    const hasProduct = cart.find((p) => p.id === id);

    if (hasProduct) {
      setCart([
        ...cart.filter((p) => p.id !== id),
        {
          ...props,
          quantity: hasProduct.quantity + 1
        }
      ])
    } else {
      setCart([
        ...cart,
        {
          ...props,
          quantity: 1
        }
      ])
    }
  }

  return (
    <>
      <div className={style.productContainer}>
        <img src={productImgUrl} alt="" />
        <div className={style.infoProduct}>
          <p>{title}</p>
          <div className={style.displayPrice}>
            <span>{new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(price)}</span>
            <button className="backgroundPlus" onClick={handleAddProduct}>
              <Plus size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
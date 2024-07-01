import Product from "./product-interface"

interface OrderInterface {
  products: Product[],
  date: string,
  time: string,
  total: number,
  paymentMethod: number
}

export default OrderInterface;
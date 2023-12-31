export interface Items {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
}


export interface SalesItem {
  title: string;
  items: Items[]
}
import { Header } from "../../components/Header";
import { Information } from "../../components/Information";
import './styles.css'

export function Home() {
  return (
    <div classname="container">
      <Header />
      <Information />
    </div>
  )
}
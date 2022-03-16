import { Header } from "../../components/Header";
import { Information } from "../../components/Information";
import { InfoTable } from "../../components/InfoTable";
import { InputsContainer } from "../../components/InputsContainer";
import './styles.css';

export function Home() {
  return (
    <div className="container-main">
      <Header />
      <Information />
      <InputsContainer />
      <InfoTable />
    </div>
  )
}
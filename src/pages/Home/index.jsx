import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Information } from "../../components/Information";
import { InfoTable } from "../../components/InfoTable";
import { InputsContainer } from "../../components/InputsContainer";
import { api } from "../../services/api";
import './styles.css';

export function Home() {
  const [listaContas, setListaContas] = useState([]);

  useEffect(() => {
    api.get('/listar/conta', {
      "limite": 100,
      "pagina": 0
    }).then(res => {
      setListaContas(res.data.rows);
    })
  }, [])//verificar execução de conta que só aparece no refresh
  function handleSaveItems(item) {
    const data = item.dados;
    console.log(data);


    api.post('/criar/conta', data).then(res => {
      console.log({ msg: "Conta Criada!", Dados: res.data });
    });
    api.get('/listar/conta', {
      "limite": 10,
      "pagina": 0
    }).then(res => {
      setListaContas(res.data.rows);
    })
  }
  function handlePesquisarContasData(data) {
    api.post(`/listar/conta/data`, {
      data: {
        limite: 10,
        pagina: 0,
        dataInicial: data.dataInicial,
        dataFinal: data.dataFinal
      }
    }).then(res => {
      setListaContas(res.data.rows);
    })
  }

  return (
    <div className="container-main">
      <Header />
      <Information listaContas={listaContas} onSearch={handlePesquisarContasData} />
      <InputsContainer addItems={handleSaveItems} />
      <InfoTable listaContas={listaContas} />
    </div>
  )
}
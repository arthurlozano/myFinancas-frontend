import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './styles.css'

export function Information({ listaContas, onSearch }) {
  const [receita, setReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);
  const [balanco, setBalanco] = useState(0);

  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  function PesquisarContas() {
    onSearch({ dataInicial, dataFinal });
  }

  useEffect(() => {
    let valorReceita = 0;
    let valorDespesa = 0;
    listaContas.map(conta => {
      if (conta.Categorium.descricao === 'Receita') {
        valorReceita += conta.valor;
      }
      if (conta.Categorium.descricao === 'Despesa') {
        valorDespesa += conta.valor;
      }


    })

    setDespesa(valorDespesa);
    setReceita(valorReceita);
    setBalanco(valorReceita - valorDespesa);
  }, [listaContas])




  return (
    <section>
      <div className="input-date">
        <div className="container-input">
          <label htmlFor="initial-date">Data Inicial</label>
          <input
            type="date"
            name="initial-date"
            value={dataInicial}
            onChange={e => setDataInicial(e.target.value)}
          />
        </div>

        <div className="container-input">
          <label htmlFor="final-date">Data Final</label>
          <input
            type="date"
            name="final-date"
            value={dataFinal}
            onChange={e => setDataFinal(e.target.value)}
          />
        </div>

        <div className="container-input">
          <button onClick={PesquisarContas}>Buscar</button>
        </div>
      </div>

      <div className="info-values">
        <p>Receita</p>
        <span className="span-green">R$ {receita}</span>
      </div>

      <div className="info-values">
        <p>Despesas</p>
        <span className="span-red">R$ {despesa}</span>
      </div>

      <div className="info-values">
        <p>Balanço</p>
        <span className="span-green">R$ {balanco}</span>
      </div>
    </section>
  )
}
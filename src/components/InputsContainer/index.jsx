import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './styles.css'

export function InputsContainer({ addItems }) {

  const [data, setData] = useState('');
  const [categoria_id, setCategoria_id] = useState('');
  const [titulo, setTitulo] = useState('');
  const [valor, setValor] = useState('');

  const [nameCategoria, setNameCategoria] = useState([]);

  useEffect(() => {
    api.get('/listar/categoria').then(res => {
      setNameCategoria(res.data.rows);
    })
  }, [])

  function handleAddItems() {
    const dados = {
      data,
      categoria_id,
      titulo,
      valor
    }
    console.log({ "Dados_handleAddItems": dados });
    addItems({ dados });
  }

  function setCorretamenteData(data) {
    console.log(data);
    setData(data);
  }

  return (
    <section className="inputs-container">
      <div className="container-input">
        <label htmlFor="data">Data</label>
        <input
          type="date"
          value={data}
          onChange={e => setCorretamenteData(e.target.value)}
        />
      </div>

      <div className="container-input">
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          value={categoria_id}
          onChange={e => setCategoria_id(e.target.value)}
        >

          {nameCategoria.map(item => (
            <option key={item.id} value={item.id}>{item.descricao}</option>
          ))}
        </select>
      </div>

      <div className="container-input">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
      </div>

      <div className="container-input">
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          value={valor}
          onChange={e => setValor(e.target.value)}
        />
      </div>

      <div className="container-input">
        <button onClick={handleAddItems} >Adicionar</button>
      </div>

    </section>
  )
}
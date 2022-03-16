import './styles.css'

export function Information() {
  return (
    <section>
      <div className="input-date">
        <div className="container-input">
          <label htmlFor="initial-date">Data Inicial</label>
          <input type="date" name="initial-date" />
        </div>

        <div className="container-input">
          <label htmlFor="final-date">Data Final</label>
          <input type="date" name="final-date" />
        </div>

        <div className="container-input">
          <button>Buscar</button>
        </div>
      </div>

      <div className="info-values">
        <p>Receita</p>
        <span className="span-green">R$ 500</span>
      </div>

      <div className="info-values">
        <p>Despesas</p>
        <span className="span-red">R$ 500</span>
      </div>

      <div className="info-values">
        <p>Balanço</p>
        <span className="span-green">R$ 500</span>
      </div>
    </section>
  )
}
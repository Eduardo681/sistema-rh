import Header from "../../components/Header";

const CadastroVaga = () => {
    return <>
        <Header />
        <div className="container">
            <div className="title">
                Dados vaga
            </div>
            <form>
                <div className="form-control">
                    <label htmlFor="vaga">Nome da vaga</label>
                    <input type="text" name="vaga" />
                </div>
                <div className="form-control">
                    <label htmlFor="requisitos">Requisitos</label>
                    <select type="text" name="requisitos">
                        <option value="teste">teste</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="carreita">Plano de carreira</label>
                    <textarea type="text" name="carreira" />
                </div>
            </form>
        </div>
    </>
}

export default CadastroVaga;
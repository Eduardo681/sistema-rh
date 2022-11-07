import Header from "../../components/Header";
import { useState} from "react";
import axios from "axios";


const CadastroVaga = () => {
    const [vaga, setVaga] = useState({
        nome_vaga: '',
        salario: 0,
        plano_de_carreira: '',
        descricao: '',
        perc_acerto_logico: 0,
        perc_acerto_interpertacao: 0,
        perc_acerto_tecnico: 0,
        requisitos: '',
        diferenciais: '',
        empresa: 1
    });

    const salvarVaga = () => {
        console.log(vaga)
        axios.post("/vaga", vaga).then((r) => {
            alert(r.data)
        }).catch((e) => console.log(e))
    }
    return <>
        <Header />
        <div className="container">
            <div className="title">
                Dados vaga
            </div>
            <form>
                <div className="side">
                    <div className="form-control">
                        <label htmlFor="vaga">Nome da vaga</label>
                        <input type="text" name="vaga"
                            onChange={t => setVaga({...vaga, nome_vaga: t.target.value})} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="requisitos">Requisitos</label>
                        <select type="text" name="requisitos" onChange={t => setVaga({...vaga, requisitos: t.target.value})}>
                            <option value="teste">teste</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="vaga">Plano de carreira</label>
                        <input type="text" name="vaga" 
                            onChange={t => setVaga({...vaga, plano_de_carreira: t.target.value})}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="vaga">Percentual de acerto do teste de interpretacao (%)</label>
                        <input type="number" name="vaga"
                            onChange={t => setVaga({...vaga, perc_acerto_interpertacao: t.target.value})} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="vaga">Percentual de acerto do teste de logico (%)</label>
                        <input type="number" name="vaga" 
                            onChange={t => setVaga({...vaga, perc_acerto_logico: t.target.value})}/>
                    </div>
                </div>
                <div className="side">
                    <div className="form-control">
                        <label htmlFor="vaga">Salario</label>
                        <input type="number" name="vaga" 
                            onChange={t => setVaga({...vaga, salario: t.target.value})}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="requisitos">Diferencias</label>
                        <select type="text" name="requisitos" onChange={t => setVaga({...vaga, diferencias: t.target.value})}>
                            <option value="teste">alt</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="vaga">Descricao</label>
                        <input type="text" name="vaga"
                            onChange={t => setVaga({...vaga, descricao: t.target.value})}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="vaga">Percentual de acerto do teste tecnico (%)</label>
                        <input type="number" name="vaga" 
                            onChange={t => setVaga({...vaga, perc_acerto_tecnico: t.target.value})}/>
                    </div>
                    
                <button type={"button"} onClick={salvarVaga}> Salvar</button>   
                </div>
            </form>
        </div>
    </>
}

export default CadastroVaga;
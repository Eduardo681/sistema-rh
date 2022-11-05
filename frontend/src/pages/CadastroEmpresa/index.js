import Header from "../../components/Header";
import {useEffect, useState} from "react";
import axios from "axios";

const CadastroEmpresa = () => {
    const [empresa, setEmpresa] = useState({
        id: '',
        nome: '',
        missao: '',
        visao: '',
        valores: ''
    });

    useEffect(() => {
        axios.get("/empresa/1").then((r) => {
            setEmpresa(r.data)
        })
    }, [])

    const salvarEmpresa = () => {
        console.log(empresa)
        axios.put("/empresa", empresa).then((r) => {
            alert(r.data)
        }).catch((e) => console.log(e))
    }

    return <>
        <Header/>
        <div className="container">
            <div className="title">
                Dados empresa
            </div>
            <form>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" value={empresa.nome}
                           onChange={t => setEmpresa({...empresa, nome: t.target.value})}/>
                </div>
                <div className="form-control">
                    <label htmlFor="missao">Missão</label>
                    <textarea type="text" name="missao" value={empresa.missao}
                              onChange={t => setEmpresa({...empresa, missao: t.target.value})}/>
                </div>
                <div className="form-control">
                    <label htmlFor="visao">Visão</label>
                    <textarea type="text" name="visao" value={empresa.visao}
                              onChange={t => setEmpresa({...empresa, visao: t.target.value})}/>
                </div>
                <div className="form-control">
                    <label htmlFor="valores">Valores</label>
                    <textarea type="text" name="valores" value={empresa.valores}
                              onChange={t => setEmpresa({...empresa, valores: t.target.value})}/>
                </div>
                <div className="form-control">
                    <label htmlFor="politica">Politica</label>
                    <textarea type="text" name="politica" value={empresa.politica}
                              onChange={t => setEmpresa({...empresa, politica: t.target.value})}/>
                </div>
                <div className="form-control">
                    <label htmlFor="penalidades">Penalidades</label>
                    <textarea type="text" name="penalidades" value={empresa.penalidades}
                              onChange={t => setEmpresa({...empresa, penalidades: t.target.value})}/>
                </div>
                <button type={"button"} onClick={salvarEmpresa}>Salvar</button>
            </form>
        </div>
    </>
}

export default CadastroEmpresa;
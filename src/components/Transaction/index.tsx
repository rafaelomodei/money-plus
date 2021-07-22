import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactioTable(){

    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data));    
    },[]);

    return(
        <Container>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposit">R$ 200</td>
                        <td>Desenvolvimento</td>
                        <td>12/07/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="winthdraw">- R$ 200</td>
                        <td>Desenvolvimento</td>
                        <td>26/07/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposit">R$ 200</td>
                        <td>Desenvolvimento</td>
                        <td>23/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
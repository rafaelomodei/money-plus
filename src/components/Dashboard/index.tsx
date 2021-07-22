import { Summary } from "../Summary";
import { TransactioTable } from "../Transaction";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransactioTable/>
        </Container>
    );
}
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyled } from "./styles/global";
import { useState } from 'react';

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
     <Header onOpenNewtransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar transação</h2>
      </Modal>
     <GlobalStyled />
    </>
  );
}

export default App;

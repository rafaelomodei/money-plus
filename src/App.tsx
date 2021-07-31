import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyled } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider >
     <Header onOpenNewtransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen}  onRequestClose={handleCloseNewTransactionModal}/>
     <GlobalStyled />
    </TransactionsProvider>
  );
}

export default App;

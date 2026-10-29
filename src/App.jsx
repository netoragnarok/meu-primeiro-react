import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header';
import Projeto from './components/Projeto';
import Footer from './components/Footer';


function App() {
  return (
       // <h1> Meus projetos </h1>
       <main>
        <Header/>

        <section>

        
        <br/>
        <br/>
        <Projeto
        nome="Site Institucional"
        descricao="HTML e CSS"
        />

       <br/>
       <br/>

        <Projeto
          nome="Cadastro de Clientes"
          descricao="JavaScript"
        />
        </section>



        <Projeto
          nome="Teste"
          descricao="Teste Descrição"
        />

        <Footer/>
        
       </main>

  );
  
}

export default App

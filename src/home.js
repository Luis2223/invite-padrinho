import logo from './logo.svg';
import './App.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react'
import { useParams } from "react-router-dom";
import newborn from './newborn.png'

const Home = () => {
  let params = useParams();
  const name = params.name
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = {
    'displayBasic': setDisplayBasic,
  }
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true); 
  }

  const footer = (
    <div>
      <img src={newborn} width="100" height="100"/>
    </div>
  );
  return (
    <div className='main'>
      <div className='grid'>
        <Dialog 
          visible={displayBasic} 
          closable={false}
          style={{ width: '80vw' }}
          footer={footer}  
        >
          {name === 'alice' && 
            <div>
                <p className='title-h4'>Parabéns titia!</p> 
                <p className='content-text'>Você foi intimada para ser minha madrinha!</p>
            </div>
          }
          {name === 'leandro' && 
            <div>
                <p className='title-h4'>Parabéns titio!</p> 
                <p className='content-text'>Você foi intimado a ser o meu padrinho!</p>
            </div>
          }
          <p className='content-text'>O seu desafio é:</p>
          <div className='text'>
            <p>* Sempre me amar.</p>
            <p>* Esta comigo nos momentos dificeis.</p>
            <p>* Ser como um pai e uma mãe para mim.</p>
            <p>* Me aconselhar.</p>
            <p>* Ajudar mamãe e papai na missão de criar o meu carater</p>
            <p>* Brincar muitooo comigo!</p>
            <p>* Me ajudar a levantar quando eu cair, tentando dar meus primeiros passos.</p>
            <p>* Me contar historias para dormir.</p>
            <p>* Me levar para passear.</p>
          </div>
        </Dialog>
        <div className='col-12'>
          <h1 className='title-h1'>Oi, {name.charAt(0).toUpperCase() + name.substr(1)}...</h1>
        </div>
        {name === 'alice' && 
            <div className='col-12 content-text'>
                <p>
                    Venho te observando a alguns dias e percebi em você, qualidades nas quais nem todos tem o privilegio de ter.
                </p>
                <p>
                    Você é carinhosa, atenciosa, companheira, tolerante, focada, extrovertida, honesta, educada, humilde, otimista, determinada e altruista
                    é uma pessoa madura em suas decisões.
                </p>
                <p>
                    Confiarei a você os meus segredos, irei dar varias risadas ao seu lado, nossos momentos serão insubstituíveis,
                    espero retribuir todo o carinho que você me dá, mas não será facil para isso exige um desafio, você aceita?
                </p>
            </div>
        }
        {name === 'leandro' && 
            <div className='col-12 content-text'>
                <p>
                    Desde que me entendo por gente você existe na minha vida e se mantem presente.
                </p>
                <p>
                    Uma pessoa admirável pela sua bondade, suas qualidades são indescritiveis.
                </p>
                <p>  
                    Me sinto bem ao seu lado, você transmite calmaria, cuidado, amor, é sempre o primeiro a estender a mão
                    quando eu preciso. 
                </p>
                <p>   
                    Sempre se lembra de mim até mesmo depois de um dia exaustivo.
                </p>
                <p>
                    Amo todo esse cuidado, e gostaria de retribuí-lo, mas antes queria te propor um desafio, você aceita?
                </p>
            </div>
        }

        <div className='footer'>
          <Button
            onClick={() => onClick('displayBasic')}
            label="Aceito" />
        </div>
      </div>
    </div>
  );
}

export default Home;

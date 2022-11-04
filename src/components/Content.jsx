import React from 'react';

import './Content.css';
import AboutNft from '../img/o_que_e_nft.png';
import Register from '../img/register.svg';
import Nfts from '../img/nfts.svg';
import Coin from '../img/coin.svg';
import Mail from '../img/mail.svg';

const Content = () => {
  return (
    <main>
      {/* About NFT */}
      <section id="about-nft">
        <h2>O que é <strong>NFT</strong>?</h2>
        <div className="container">
          <div className="container-content">
            <p>
              Os tokens não fungíveis &#40;NFTs&#41; ganharam forte notoriedade no espaço da blockchain e criptomoedas.
              As possibilidades de aplicação desses criptoativos são diversas. Vão desde a venda de obras de arte famosas
              e colecionáveis, até um tuíte – nesse caso o primeiro do fundador do Twitter, Jack Dorsey.
            </p>
            <h3>O que é um token não fungível ou NFT? E para que serve?</h3>
            <p>
              NFT é a sigla usada para os tokens não fungíveis. Mas o que é ser não fungível? Significa ser único e insubstituível.
              Por exemplo, o bitcoin é fungível – se você trocá-lo por outro bitcoin, você terá um ativo do mesmo valor. Uma carta de pokemón única, no entanto, não é fungível. Se você trocá-la por outra carta, terá um objeto com valores e características diferentes. <br />
              <br />
              Os tokens não fungíveis são, então, representações digitais de qualquer coisa digital única. Por exemplo, uma obra de arte famosa, uma música, um Nyan Cat ou um tuíte.
            </p>
            <h3>Onde ficam esses tokens?</h3>
            <p>
              Da mesma forma que tokens e criptomoedas, eles são parte de uma blockchain, como a Ethereum ou outras. Mas carregam informações diferentes, que fazem com que ele funcionem diferente de um token como o ETH.
            </p>
            <h3>Mercado de obras de arte ou belas artes na mira</h3>
            <p>
              Os possíveis usos do NFT são amplos. Mas o que vem chamando a atenção no momento é o mercado de coleção de obras de arte ou belas artes digitais, que pode ser uma gravura, um vídeo ou uma música. Recentemente, um vídeo da cantora Grimes foi vendido por US$ 390 mil na forma de um NFT. <br/>
              <br />
              Mas se o vídeo está disponível e está na internet, por que pagar por ele? Porque os NFTs dão a seus detentores propriedade sobre o item original. Ou seja, qualquer pessoa pode ter obras de arte de Leonardo Da Vinci, mas somente uma vai deter a original – e poderá vendê-la por milhares de dólares a mais no futuro.
            </p>
          </div>
          <div className="container-picture">
            <img src={AboutNft} alt="" />
          </div>
        </div>
      </section>
      {/* How to get NFT */}
      <section id="get-nft">
        <div className="get-nft-container">
          <h2>Passos para adquirir NFT</h2>
          <div className="steps">
            <div className="step">
              <img src={Register} alt="" />
              <p>Cadastre-se</p>
            </div>
            <div className="step">
              <img src={Nfts} alt="" />
              <p>Escolha sua NFT</p>
            </div>
            <div className="step">
              <img src={Coin} alt="" />
              <p>Compre</p>
            </div>
            <div className="step">
              <img src={Mail} alt="" />
              <p>Recebe no e-mail</p>
            </div>
          </div>
        </div>
      </section>
    </main> 
   );
}
 
export default Content;
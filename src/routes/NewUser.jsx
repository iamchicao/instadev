import React from "react";
import "./Feed.scss";

class NewUser extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="feed">
          <article className="post new-user">
            <header className="post__header">
              <h1>Novo usuário:</h1>
            </header>

            <div className="user">
              <div className="user__thumb">
                <img src="http://placehold.it/200x200" alt="" />
              </div>

              <p className="user__name">Codenation</p>
            </div>

            <div className="post__form">
              <label>Nome</label>
              <input 
                type="text" 
                placeholder="Ex: Fulano da Silva" 
              />

              <label>Usuário</label>
              <input 
                type="text" 
                placeholder="Ex: fulano_da_silva" 
              />

              <label>E-mail</label>
              <input 
                type="email" 
                placeholder="Ex: fulano@provedor.com" 
              />

              <label>Url da Imagem de Perfil</label>
              <input 
                type="text" 
                placeholder="http:// ..." 
              />

              <button type="button">
                Cadastrar
              </button>

            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default NewUser;

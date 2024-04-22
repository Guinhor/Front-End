import "./App.css";
import EventComponent from "./components/EventComponent";
import IntroComponent from "./components/IntroComponent";
import ConditionalComponent1 from "./components/ConditionalComponent1";
import ConditionalComponent2 from "./components/ConditionalComponent2";
import ProductComponent from "./components/ProductComponent";
import PostComponent from "./components/PostComponent";
import GenericComponent from "./components/GenericComponent";

function App() {
  
  /*
  const posts = [
    {title: 'Post 1', description: 'Descrição do Post 1'},
    {title: 'Post 2', description: 'Descrição do Post 2'},
    {title: 'Post 3', description: 'Descrição do Post 3'}
  ];
  
  let component;
  let condition = false;
  
  if (condition) {
    component = <ConditionalComponent1 />;
  } else {
    component = <ConditionalComponent2 />;
  }
  
  const products = [
    { id: 1, name: "Laranja" },
    { id: 2, name: "Uva" },
    { id: 3, name: "Maçã" }
  ];

  PRIMEIRA FORMA
  const listItems = products.map((product) => (
    <li key={product.id}>{product.name}</li>
  ));
  */

  return (
    <>
      <div>
        <GenericComponent>
          <p>Eu sou o primeiro conteúdo fornecido pelo componente pai</p>
          <ol>
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ol>
          <hr />
        </GenericComponent>
      </div>
      <div>
        <GenericComponent>
          <p>Eu sou o segundo conteúdo fornecido pelo componente pai</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <hr />
        </GenericComponent>
      </div>

       {/*
      <div>
        {posts.map((post, index) => (
          <PostComponent key={index} title={post.title} description={post.description} />
        ))}
      </div>

      <div>
      <ProductComponent name = 'Arroz' category = 'Alimento' />
      <ProductComponent name = 'Martelo' category = 'Ferramenta' />
      </div>
      
      SEGUNDA FORMA
      <div>
        <ul>
          {products.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
          ))}
        </ul>
      </div>

      <div>    
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <div>
        {component}

        {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
      </div>

      <div>
        <h3>Fundamentos do React.js</h3>
        <IntroComponent />
        <EventComponent />
      </div> */}
    </>
  );
}

export default App;
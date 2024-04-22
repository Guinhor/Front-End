import ChildComponent from "./ChildComponent";

function IntroComponent() {
    
    const a = 5, b = 2, nome = 'João';
    const aluno = {
        nome: 'João Augusto',
        email: 'ajoao7421@gmail.com'
    }

    return (
        <>
            <h2>
                Componente de Introdução
            </h2>
            <h3>
                Template Expressions
            </h3>
            <p>
                {nome}, o produto entre {a} e {b} é {a * b}
            </p>
            <p>
                Aluno: {aluno.nome} <br /> E-mail: {aluno.email}
            </p>
            <ChildComponent />
        </>
    )
}

export default IntroComponent
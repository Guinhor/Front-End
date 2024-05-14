import { useParams, Link } from "react-router-dom"

export default function EditForm(){
    const { id } = useParams();    
    return(
        <div>
            <p>Edição do componente {id} </p>
            <Button><Link to={'/products'}>Voltar</Link></Button>
        </div>
        
    )
}
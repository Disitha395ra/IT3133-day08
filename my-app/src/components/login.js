import { useNavigate } from "react-router-dom"

export default function login(){
    const navigate = useNavigate();
    const authenticate=()=>{
        navigate('/dashboard')
    }
    return(
        <div>
            <h1>Login Here</h1>
            <button onClick={authenticate}>Click Me</button>
        </div>
    )
}
// import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function Form(){
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();

        // Read the from data
        const form = e.target;
        const formData = new FormData(form);

        // Pass formData as a plain object
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson)
    }
return(
<div>
    <button>Vue cuisine🍽️</button>
    <h1>Bienvenue sur Adalicious 🥦 </h1>
    <h2>Pour commencer peut-tu indiquer ton prénom :</h2>
        <form method="post" onSubmit={handleSubmit}>
            <label>
                <input name="myInput" />
            </label>
            <button type="submit" onClick={() => navigate('/menu')}>Valider</button>
        </form>
</div>
)}
import React, { useState } from 'react';

const priorities={
    BASSE: "basse",
    NORMAL: "normal",
    URGENTE:"urgent"
}
let tache={
    name:"",
    desc:"",
    priority:""
}
let taches=[]
const Tache =()=> {
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [priority,setpriority] = useState("");
    const listJSX = taches.map(
        p=> <div style={{border:"1px solid black"}}>
            <p >{p.name}<p style={p.priority===priorities.URGENTE?{hidden:"false", textColor:"red"}:{}} hidden = "true">({p.priority})</p></p>
            <p>{p.desc}</p>
            <button>Terminer</button>
            <button>Supprimer</button>
        </div>
    )
    const handleTache = ()=>{
        const newTache = Object.create(tache)
        newTache.name=name
        newTache.desc = desc
        newTache.priority = priority
        taches.push(newTache)
        console.log("monObjet ", newTache)
        console.log("ma Liste ",taches)
    }
  return (
    <>
        <form style={{marginLeft:'10%',marginRight:'10%',display:"flex", flexDirection:'column', flexWrap:'wrap', justifyContent:'space-between'}} onSubmit={handleTache}>
            <input placeholder='Nom de la tache'type="text" required = {true} value = {name} onChange={e=>setname(e.target.value)}></input>
            <textarea placeholder='Description de la tache' rows={4} value ={desc} required = {true} onChange={e=>setdesc(e.target.value)}/>
            <select onChange={e=>setpriority(e.target.value)}>
                <option value = {priorities.BASSE}>basse</option>
                <option value = {priorities.NORMAL}>Normal</option>
                <option value = {priorities.URGENTE}>Urgente!!!</option>
            
            </select>
        
            <input type="submit" value = 'Ajouter'/>
        
        </form>
        <div>
            {listJSX}
        </div>
    </>
  );
}

export default Tache;
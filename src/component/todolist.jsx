import React, { useState } from 'react';
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';

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
let taches=[
    {
        name:'test',
        desc:'Ceci est un test',
        priority:priorities.BASSE
    }
]
const Tache =()=> {
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [priority,setpriority] = useState("");
    const listJSX = taches.map(
        p=> <Box display='flex'flexDirection='row'style={{margin:'10%',border:"1px solid black"}}>
            <Box display='flex' flexDirection='column'style={{minWidth:'80%'}} >
            <p style={{maxHeight:'5%'}}>{p.name}<p style={p.priority===priorities.URGENTE?{hidden:"false", textColor:"red"}:{}} hidden = "true">({p.priority})</p></p>
            <p style={{minHeight:'80%'}}>{p.desc}</p>
            </Box>
            <Box display='flex' flexDirection='column' flexWrap='wrap'flexGrow={1} style={{display:'flex', FlexDirection:'row',maxWidth:'20%', minHeight:'100%'}}>
            <button style={{minHeight:'50%'}}>Terminer</button>
            <button style={{minHeight:'50%'}}>Supprimer</button>
            </Box>
        </Box>
    )
    const handleTache = ()=>{
        const newTache = Object.create(tache)
        newTache.name={name}
        newTache.desc = {desc}
        newTache.priority = {priority}
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
        <div >
            {listJSX}
        </div>
    </>
  );
}

export default Tache;
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Box from '@material-ui/core/Box';

const priorities={
    BASSE: "basse",
    NORMAL: "normal",
    URGENTE:"urgent"
}
let taches=[
    {
        id:nanoid(),
        name:'test',
        desc:'Ceci est un test',
        priority:priorities.BASSE
    },
    {
        id:nanoid(),
        name:'test',
        desc:'Ceci est un test',
        priority:priorities.BASSE
    },
    {
        id:nanoid(),
        name:'test',
        desc:'Ceci est un test',
        priority:priorities.BASSE
    }
]
const Tache =()=> {
    const [list, setlist] = useState(taches)
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [priority,setpriority] = useState("");
    const listJSX = list.map(
        p=> <Box display='flex'flexDirection='row'justifyContent="space-between" style={{marginLeft:'10%',marginRight:'10%',border:"1px solid black"}}>
            <Box display='flex' flexDirection='column'style={{minWidth:'80%'}} >
            <p style={{maxHeight:'5%'}}>{p.name}</p>
            <p style={p.priority===priorities.URGENTE?{hidden:"false", textColor:"red"}:{}} hidden = {true}>({p.priority})</p>
            <p style={{minHeight:'80%'}}>{p.desc}</p>
            </Box>
            <Box display='flex' flexDirection='column' flexWrap='wrap'flexGrow={1} style={{display:'flex', FlexDirection:'row',maxWidth:'20%', minHeight:'100%'}}>
            <button style={{minHeight:'50%'}}>Terminer</button>
            <button style={{minHeight:'50%'}}>Supprimer</button>
            </Box>
        </Box>
    )
    const deleteTache = () =>{
        
    }
    const handleTache = ()=>{
        const newList = list.concat({id:nanoid(), name,desc,priority})
        setlist(newList)
        console.log("ma Liste ",list)
    }
  return (
    <>
        <Box display ='flex' flexDirection = "column" style={{marginLeft:'10%',marginRight:'10%'}}>
            <input placeholder='Nom de la tache'type="text" required = {true} value = {name} onChange={e=>setname(e.target.value)}></input>
            <textarea placeholder='Description de la tache' rows={4} value ={desc} required = {true} onChange={e=>setdesc(e.target.value)}/>
            <select onChange={e=>setpriority(e.target.value)}>
                <option value = {priorities.BASSE}>basse</option>
                <option value = {priorities.NORMAL}>Normal</option>
                <option value = {priorities.URGENTE}>Urgente!!!</option>
            
            </select>
        
            <button onClick={handleTache}>Ajouter</button>
        
        </Box>
        <div >
            {listJSX}
        </div>
    </>
  );
}

export default Tache;
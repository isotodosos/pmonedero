//hacemos export const pq estaría preparado para varios export recuerda que export default solo deja exportar uno
export const revisarPresupuesto = (presupuesto, restante)=>{
    
    let clase;
    
    if((presupuesto / 4) > restante){
        clase = "alert alert-danger";
    }
    else if((presupuesto / 2) > restante){
        clase = "alert alert-warning";
    }
    else{ clase = "alert alert-success";}

    return clase;
}
export const revisarPresupuesto = (presupuesto, restante) => {
    let clase; 
    if( (presupuesto / 4 ) > restante ){
        clase = 'alerte alert-danger';
    } else if ((presupuesto / 2) > restante) {
        clase = 'alerte alert-warning';
    } else {
        clase = 'alerte alert-success';
    }
    return clase; 
}
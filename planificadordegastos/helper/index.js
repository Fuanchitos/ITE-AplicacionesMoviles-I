export const formateadorCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString('es-MX',{
        style: 'currency',
        currency: 'MXN'
    })
}
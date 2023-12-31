import React from 'react'

export const formateadorCantidad = cantidad => {
    return Number(cantidad).toLocaleString('es-MX',
    {
        style: 'currency',
        currency: 'MXN'
    })
}
export const generarId = () =>{
    const random = Math.random().toString(36).substring(2,11)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'


    }
    return fechaNueva.toLocaleDateString('es-MX', opciones)
}
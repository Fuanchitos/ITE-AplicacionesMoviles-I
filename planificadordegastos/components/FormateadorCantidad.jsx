function formateadorCantidad(cantidad) {
    // Verificar si la cantidad es un número válido
    if (typeof cantidad !== 'number' || isNaN(cantidad)) {
      return 'Cantidad no válida';
    }
  
    // Usar Intl.NumberFormat para formatear la cantidad con comas como separadores de miles
    return new Intl.NumberFormat('es-ES').format(cantidad);
  }
  
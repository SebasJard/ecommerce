import './CartWidget.css'

function CartWidget() {
    const imgCarrito = 'https://img.freepik.com/vector-premium/icono-carrito-compras-estilo-color-plano_755164-732.jpg?w=2000'
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            <strong> 1 </strong>
        </div>

    )
}

export default CartWidget
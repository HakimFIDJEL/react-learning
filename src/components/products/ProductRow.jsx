export function ProductRow({product}) {
    
    const style = product.stocked ? undefined : {color: "red"}

    throw new Error("Erreur dans ProductRow");

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}
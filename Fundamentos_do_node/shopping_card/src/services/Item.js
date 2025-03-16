/**
 * O que deve ter de funconalidade
 * 
 * 1 - calcular subtotal
 */

export async  function createItem(name,price,quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => {
            return price * quantity
        }
    }
}

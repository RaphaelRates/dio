/**
 * O que deve ter de funconalidade
 * 
 * 1 - DELETAR ITEM 
 * 2 - ADICIONAR ITEM
 * 3 - REMOVER ITEM
 * 4 - LIMPAR CARRINHO
 * 5 - COMPRAR TUDO
 * 6 - calcular total do preço
 */

/**
 * 
 * @param {Array} useCart 
 * @param {Item} item 
 */
export async function addItem(useCart, item) {
    useCart.push(item);
}

/**
 * 
 * @param {Array} useCart 
 * @param {Item} item 
 * @returns null
 */
export async function removeItem(useCart, item) {
    const index = useCart.findIndex((p) => p.name == item.name);
    if (index === -1) {console.log("Item não encontrado!\n");return;}
    if(useCart[index].quantity > 1)
        useCart[index].quantity -= 1;
    else
        useCart.splice(index, 1);
    
}

/**
 * 
 * @param {Array} useCart 
 * @param {String} name 
 */
export async function deleteItem(useCart, name) {
    const index = useCart.findIndex((item) => item.name == name);
    if (index !== -1) useCart.splice(index, 1); 
}

/**
 * 
 * @param {Array} useCart 
 */
export async function clear(useCart) {
    useCart.length = 0;
}""

/**
 * 
 * @param {Array} useCart 
 * @returns 
 */
export async function calcAllValue(useCart){
    return useCart.reduce((total, item) => total + item.subtotal(),0);
}
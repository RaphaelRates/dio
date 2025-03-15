
/**
 * 
 * @returns number random
 */
export async function roll_dice() {
    return (Math.floor(Math.random() * 6)) + 1
}

/**
 * 
 * @returns number result
 */
export async function get_random_block() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.25:
            result = "RETA"
            break;
        case random < 0.50:
            result = "CURVA"
            break;
        case random < 0.75:
            result = "MANOBRA"
        default:
            result = "CONFRONTO"
            break;
    }
    return result;
}

/**
 * 
 * @param {PERSON} character_one 
 * @param {PERSON} character_two 
 * @param {number} rounds 
 */
export async function player_race_engine(character_one, character_two, rounds = 5) {
    for (let i = 0; i < rounds; i++) {
        console.log("🏁 Rodada " + i + " 🏁");
        let block = await get_random_block();
        console.log(`${block}\n`);

        let [dice_result_one, dice_result_two] = await Promise.all([roll_dice(), roll_dice()]);
        let total_skill_one = 0, total_skill_two = 0;

        switch (block) {
            case "RETA":
                total_skill_one = dice_result_one + character_one.VELOCIDADE;
                total_skill_two = dice_result_two + character_two.VELOCIDADE;
                await Promise.all([
                    log_roll_result(character_one.NOME, 'velocidade', dice_result_one, character_one.VELOCIDADE),
                    log_roll_result(character_two.NOME, 'velocidade', dice_result_two, character_two.VELOCIDADE)
                ]);
                break;

            case "MANOBRA":
                total_skill_one = dice_result_one + (character_one.VELOCIDADE + character_one.MANOBRABILIDADE + character_two.PODER);
                total_skill_two = dice_result_two + (character_two.VELOCIDADE + character_one.MANOBRABILIDADE + character_two.PODER);
                break;

            case "CONFRONTO":
                total_skill_one = dice_result_one + character_one.PODER;
                total_skill_two = dice_result_two + character_two.PODER;
                await Promise.all([
                    log_roll_result(character_one.NOME, 'poder', dice_result_one, character_one.PODER),
                    log_roll_result(character_two.NOME, 'poder', dice_result_two, character_two.PODER)
                ]);
                break;

            case "CURVA":
                total_skill_one = dice_result_one + character_one.MANOBRABILIDADE;
                total_skill_two = dice_result_two + character_two.MANOBRABILIDADE;

                await Promise.all([
                    log_roll_result(character_one.NOME, 'manobrabilidade', dice_result_one, character_one.MANOBRABILIDADE),
                    log_roll_result(character_two.NOME, 'manobrabilidade', dice_result_two, character_two.MANOBRABILIDADE)
                ]);
                break;
            default:
                break;
        }

        if (total_skill_one > total_skill_two) {
            console.log(character_one.NOME + " marcou um ponto!");
            character_one.PONTOS += (total_skill_one > total_skill_two) ? 1 : 0;
            character_two.PONTOS -= (total_skill_one > total_skill_two && character_two.PONTOS) ? 1 : 0;
            console.log(`${character_one.NOME} GANHOU A DISPUTAAA! ${character_two.NOME} perdeu um ponto 🐢`);
        } else if (total_skill_two > total_skill_one) {
            console.log(character_two.NOME + " marcou um ponto!");
            character_one.PONTOS -= (total_skill_one < total_skill_two && character_one.PONTOS) ? 1 : 0;;
            character_two.PONTOS += (total_skill_one < total_skill_two) ? 1 : 0;
            console.log(`${character_two.NOME} GANHOU A DISPUTAAA! ${character_one.NOME} perdeu um ponto 🐢`);
        } else {
            console.log("EMPATEEEE!! ");
        }
        console.log("|------------------------------------------------------------------|\n");
    }
    declare_winner(character_one, character_two);
}

/**
 * 
 * @param {PERSON} character_one 
 * @param {PERSON} character_two 
 */
async function declare_winner(character_one, character_two) {
    console.log("Resultado da Corrida: ");
    console.log(`${character_one.NOME}: ${character_one.PONTOS}`);
    console.log(`${character_two.NOME}: ${character_two.PONTOS}`);
    console.log(`${character_one.PONTOS > character_two.PONTOS ? character_one.NOME : character_two.NOME} ganhou a corrida 🏆!`);

}

/**
 * 
 * @param {PERSON} character 
 * @param {string} block 
 * @param {number} dice_result 
 * @param {string} atribute 
 */
async function log_roll_result(character, block, dice_result, atribute) {
    console.log(`${character} 🎲 rolou um dado de ${block}: ${dice_result} + ${atribute} = ${dice_result + atribute}`);

}

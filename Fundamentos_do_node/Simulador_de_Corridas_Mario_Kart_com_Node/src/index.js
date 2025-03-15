import { player_race_engine } from "./functions.js";
import players from "./players";



async function main() {
    console.log(
        `🏁🚨  CORRIDA MARIO KART ENTRE ${players.MARIO.NOME} e ${players.LUIGI.NOME} 🚨🏁...\n`
    );

    await player_race_engine(players.MARIO, players.LUIGI);
}

main();
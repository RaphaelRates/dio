# Mario Kart Race Simulation

Este projeto é uma simulação de corrida inspirada no Mario Kart, onde dois personagens, Mario e Luigi, competem em diferentes tipos de desafios para determinar quem será o vencedor.

## 📁 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
📦 MarioKartSim
├── 📂 src
│   ├── index.js
│   ├── functions.js
│   ├── players.js
├── package.json
├── README.md
```

### 1. `src/players.js`
Define os personagens disponíveis no jogo com seus atributos:
- `ID`: Identificador único do personagem.
- `NOME`: Nome do personagem.
- `VELOCIDADE`: Habilidade em desafios de reta.
- `MANOBRABILIDADE`: Habilidade em curvas.
- `PODER`: Habilidade em confrontos diretos.
- `PONTOS`: Pontuação acumulada durante a corrida.

### 2. `src/functions.js`
Contém as funções responsáveis pelo funcionamento da corrida:
- `roll_dice()`: Gera um número aleatório entre 1 e 6, simulando o lançamento de um dado.
- `get_random_block()`: Define aleatoriamente o tipo de desafio da rodada: `RETA`, `CURVA`, `MANOBRA` ou `CONFRONTO`.
- `player_race_engine(character_one, character_two, rounds)`: Controla a simulação da corrida por um número específico de rodadas.
  - Determina o tipo de desafio da rodada.
  - Rola os dados para os dois personagens.
  - Calcula os valores baseados nas habilidades dos personagens.
  - Atualiza a pontuação de acordo com o vencedor de cada rodada.
- `declare_winner(character_one, character_two)`: Exibe o vencedor final da corrida.
- `log_roll_result(character, block, dice_result, atribute)`: Registra no console os resultados das jogadas.

### 3. `src/index.js`
Arquivo principal que inicia a simulação da corrida:
- Importa os personagens e funções necessárias.
- Exibe uma mensagem inicial informando os competidores.
- Chama a função `player_race_engine()` para iniciar a corrida.

## 🚀 Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Baixe ou clone o repositório.
3. No terminal, navegue até a pasta do projeto.
4. Execute o seguinte comando:
   ```sh
   npm run dev


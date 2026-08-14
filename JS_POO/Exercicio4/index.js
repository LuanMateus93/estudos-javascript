/* Personagens para Jogo
Crie as seguintes classes utilizando classe Character que representa um personagem de um jogo.Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character) e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

- Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.
- Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character) e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
- Uma classe Thief que representa um personagem de um tipo diferente.Ela deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
- Ela deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
- Uma classe Mage que representa outro tipo de personagem e também herda de Character. No entanto, essa classe também deve ter um atributo para pontos de magia. Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia. 
- No entanto, essa classe também deve ter um atributo para pontos de magia.
- Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia.
- A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passado como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual.
- Uma classe Warrior que representa outro tipo de personagem e também herda de Character.Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).
- Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.
- Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.
- Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).

Obs.: Você pode criar um outro arquivo, importar as classes e criar algumas instâncias para testá-las. */

import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";

const arthur = new Mage('Arthur', 90, 4, 2, 14);
const beatrice = new Thief('Beatrice', 140, 22, 8);
const cain = new Warrior('Cain', 200, 14, 12, 4);

console.table({arthur, beatrice, cain});

cain.mudarPosicao();
arthur.atacar(cain);
beatrice.atacar(arthur);

console.table({arthur, beatrice, cain});

cain.mudarPosicao();
cain.atacar(arthur);
arthur.aumentarVida(arthur);
beatrice.atacar(cain);

console.table({arthur, beatrice, cain});
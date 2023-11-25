// Mostrar la primera pregunta
// Seleccionar pregunta y respuestas
// Almacenar la respuesta del usuario
// Avanzar a la siguiente pregunta
//

import { startGame, nextQuestion } from './functions';
import { optionsElement } from './dom';

optionsElement.addEventListener('click', nextQuestion);
startGame();

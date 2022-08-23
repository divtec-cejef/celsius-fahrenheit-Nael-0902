/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code
  let temperature = Number (prompt('Température en celcius : '));
  if (isNaN(temperature)) {
    alert('Ce n\'est pas un nombre ! ');
  }
  else {
    alert(`${temperature}°C = ${temperature * 9 / 5 + 32}°F`);
  }
}()); // Main IIFE


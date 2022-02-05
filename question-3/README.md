# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

Para llegar a la solucion analice primero lo que me pedian, la solucion que se me vino a la mente fue un arreglo que recorriera la cadena ingresada, pero en javascript hay una funcion llamada match() en la cual puedo obtener todas las ocurrencias de una expresión regular dentro de una cadena, asi que evito los errores si escriben dentro de los corchetes

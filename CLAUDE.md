@AGENTS.md
Bitácora de uso de IA

Herramienta usada: Claude (Anthropic), a través de conversación de chat extendida durante todo el desarrollo del proyecto.

Dinámica de trabajo acordada:
Desde el inicio se estableció con la IA que actuaría como tutor y no como generador de código. La IA tenía prohibido explícitamente: hacer el proyecto, instalar dependencias, y entregar soluciones de lógica directamente. Cuando el estudiante no entendía un concepto, podía escribir "desconozco" para recibir una explicación con analogías y un ejemplo genérico (no la solución literal al bug).

Cómo se usó en cada parte del proyecto:

Diseño visual (theme, estilos de componentes, layout de pantallas): se acordó explícitamente con la IA que esta parte sí la resolviera de forma directa, dado que no era el objetivo de aprendizaje del curso y había restricciones de tiempo. La IA propuso la paleta de colores, espaciados y estructura visual de las pantallas, explicando el criterio de diseño usado.
Lógica de programación (bugs, hooks, Context API, navegación): se siguió una dinámica de tutoría paso a paso. Ante cada error o funcionalidad nueva, la IA señalaba el síntoma y hacía preguntas guía (por ejemplo, comparando con patrones ya usados en el proyecto) para que el estudiante llegara a la solución por sí mismo. El estudiante escribía el código, la IA lo revisaba línea por línea como "pare review" y señalaba qué faltaba o estaba mal, sin reescribirlo directamente.
Conceptos nuevos aprendidos con este método: destructuración de parámetros en FlatList (renderItem/keyExtractor), diferencia entre objetos y arrays al iterar con .map()/.join(), acceso a datos anidados, Context API con useContext/hooks personalizados, persistencia local con AsyncStorage, validaciones asíncronas en setState, y navegación anidada (Tab Navigator + Stack Navigator).

Qué no hizo la IA:
No escribió archivos de lógica completos de una sola vez, no instaló paquetes, y no tomó decisiones de arquitectura sin antes preguntarle al estudiante su criterio (por ejemplo, al decidir si crear un contexto nuevo para el perfil, se le pidió al estudiante que razonara la decisión antes de construir el archivo).

Reflexión:
Este proyecto se usó también como ejercicio personal para reforzar fundamentos de programación que no se habían consolidado en semestres anteriores por uso excesivo de IA sin comprensión. La dinámica de preguntas-antes-que-respuestas ayudó a identificar errores de sintaxis y de lógica propios (destructuración, hooks fuera de componente, condicionales mal planteados) sin depender de copiar-pegar soluciones.
Tree CLI (JavaScript)

Este script permite visualizar la estructura de carpetas y archivos de un directorio en formato árbol, 
con soporte para filtros y profundidad.

📦 Requisitos
Node.js v14 o superior

🚀 Uso
node tree.js --path <directorio> --ignore <carpetas> --level <profundidad>

Parámetros:

## Ruta al directorio a inspeccionar. Por defecto es el directorio actual (.).
--path 

## Lista de carpetas o archivos a ignorar, separadas por coma.
--ignore 

## Profundidad máxima del árbol. Usa Infinity para sin límite.
--level 

🧪 Ejemplos

## Mostrar el árbol completo del directorio actual:
node tree.mjs 

## Mostrar solo hasta 2 niveles de profundidad:
node tree.mjs --level 2

## Ignorar node_modules y .git:
node tree.mjs --ignore node_modules,.git

## Usar una ruta específica:
tree.mjs --path C:\Users\hc\Documents\Projects\Adevto --ignore dist,test,node_modules,.git --level 3

📄 Salida de ejemplo
```
├── index.js
├── package.json
├── src
│   ├── app.js
│   └── routes
│       └── user.js
└── README.md
```
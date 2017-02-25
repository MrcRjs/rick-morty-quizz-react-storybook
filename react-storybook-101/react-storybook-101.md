React Story Book 101
===========


[TOC]




## Instalación y configuración

La instalación es muy sencilla con npm, como un módulo global.

```app
$ npm i -g getstorybook
$ cd my-react-
$ getstorybook
```

Al ejecutar **getstorybook** dentro de un proyecto de react, se modificará el *package.json* agregando los scripts de storybook ademas de crear las carpetas de configuración(.storybook) y de historias(stories).

![Folder structure](img/directories.png)

## Storybook server

Para ejectuar el servidor de storybook basta con ejecutar `npm run storybook`. Podemos especificar distintos parámetros para el servidor de storybook en otro script de npm o sobreescribirlo, por ejemplo, para cargar un directorio con archivos estáticos:

![Scripts de npm](img/scripts.png)

Están son otras opciones disponibles para los scripts/cli *start* y *build* de storybook

![Storybook Options](img/storybook_opts.png)

Especificar un directorio de salida es bastante útil si se quiere mostrar el storybook a otras personas, ya que genera los archivos estáticos y es fácil montarlos en github pages o similar.

## < head >< /head >

Sí se requieren scripts extras dentro de  **< head >** basta con incluir un archivo **header.html** dentro del directorio de configuración de storybook con los scripts, librerías y configuraciones necesarias.

![HTML Head config](img/header.png)

## Historias

Las *historias de* cada componente, permiten visualizar un componente bajo distintas propiedades o configuraciones, facilitando la tarea de configurar y probrar nuestra librería de componentes.

Agregar historias de componentes es bastante sencillo:

![Stories of button example](img/story01.png)
![Stories view](img/story02.png)

###  Decorators

Los *decorators* permiten envolver nuestros componentes a conveniencia, y es muy fácil utilizarlos:

![](img/decorators.png)
![](img/decoratorex.png)

## Addons

### Notas

Storybook provee de una API para agregar nuevas funciones. Una de estas visible en el código de decorators es el [addon de notas](https://github.com/storybooks/storybook-addon-notes), un sencillo addon que permite agregar notas a cada historia.

![](img/notas.png)

### Action Logger

Algunos componentes vienen incluidos en el modulo de storybook, como es el caso de action logger, que simplemente loggea acciones del usuario.

![](img/actions.png)

### Properties Combinations

[Este addon](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) evita escribir código repetitivamente, y genera los componentes con las combinaciones de propiedades especificadas, con una simple configuración.

![](img/prop_combinations.png)
![](img/prop_combinations_01.png)

## Tests

Storybook tambien permite hacer pruebas estructurales, de interacción, CSS/estilos con Enzyme o Jest, pero eso estoy por probarlo...

To be continued >>
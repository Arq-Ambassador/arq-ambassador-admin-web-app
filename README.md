# 🛍️ **Ambassador Store Project** 
## rq-ambassador-admin-web-app

En este proyecto se toma como base los repositorios de Antonio Papa para una tienda virtual y se le hacen cambios arquitectonicos con el fin de mejorar su disponibilidad ante fallas, simulando un despliegue de una tienda en linea real con alta resiliencia, alta disponibilidad y que soporte un alto nivel de tráfico.

Este repostorio corresponde al frontend disponible para usuarios administradores.

## Descripción Arquitectónica

En esta arquitectura se consideran varios elementos principales:
- FrontEnd: Dividido en 3 grandes proyectos: Store, Admin y Checkout.
- Un API Gateway, que sirve de puente entre el front y los diferentes microservicios.
- Un conjunto de microservicios, que cumplen las funciones de Autenticación, Manejo de Usuarios, Productos, Ordenes, Generación de Enlaces y Visualización de Rankings y un servicio core. Al igual que uno de soporte que envía los correos de confirmación y notificación.
- Cada servicio contiene elementos necesarios para su funcionamiento, como workers, que se encargan de implementar los patrones de diseño estipulados. 

## Integrantes

- Andrés Mauricio Ayala Cardona.
- Sebastian Patiño Betancur.
- Sara Rodríguez Velásquez.

## Docente

👨‍🏫 Danny Andrés Salcedo Saldaña -  [Docente de EAFIT](https://www.linkedin.com/in/danny-andres-salcedo-salda%C3%B1a-0b07772a/?originalSubdomain=co)

## Tecnologías Utilizadas

📑 Lenguaje de Programación:
- **TypeScript:** Extiende JavaScript con características de tipado estático opcional para ayudar a detectar errores y hacer que el código sea más robusto.

🗂️ Frameworks y Librerías:
- **React:** Biblioteca JavaScript para construir interfaces de usuario interactivas y rápidas.
- **Redux:** Biblioteca para gestionar el estado de la aplicación en aplicaciones JavaScript, especialmente con interfaces basadas en React.
- **Axios:** Cliente HTTP basado en promesas para realizar solicitudes desde el navegador o Node.js y manejar respuestas de manera eficiente.


## Instalación

Instrucciones paso a paso sobre cómo instalar y configurar el proyecto localmente.

Correr localmente:
```
npm install
npm run start
```
Crear un build
```
npm build
```

## Uso

Recuerde configurar todas las variables de entorno pertinentes para que pueda correr correctamente. 
Para el despliegue actual se sigue un modelo de despliegue en Kubernetes, por lo cual los archivos de configuración estan orientados a esta tecnología.


## Recursos Adicionales

Proyectos originales:
- 📌 Proyecto original de React frontend: https://github.com/antoniopapa/react-ambassador 
- 📌 Proyecto original de Node backend: https://github.com/antoniopapa/node-ambassador

## Contacto

- Andrés Mauricio Ayala Cardona. amayalac@eafit.edu.co
- Sebastian Patiño Betancur. spatinob1@eafit.edu.co
- Sara Rodríguez Velásquez. srodriguev@eafit.edu.co


> [!NOTE]
> Este proyecto se ha creado con fines netamente académicos, sin fines comerciales y con un propósito de aprendizaje.

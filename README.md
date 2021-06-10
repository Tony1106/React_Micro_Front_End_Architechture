# React_Micro_Front_End_Architechture
A small project apply Webpack Federation to build micro front architecture. Using Webpack, Typescript, Rollup, Shared Library, React Router, Zustand, Storybook...


![Architechture](https://github.com/Tony1106/React_Micro_Front_End_Architechture/blob/master/architechture.png?raw=true)
# App
* ./home: main app run on port 8080
* ./view_product: remote app run on port 8081
* ./shared_library: share UI library, models, interface...

# How to start

1. Build shared package:
---
`cd shared_library`

`npm i`

`npm run build`

Then it will generate the file shared_library-1.0.0.tgz

Copy it to folder `home` and `view_product`

2. Run view_product project:
---
`npm i`

`npm start`

3. Run home project:
---
`npm i`

`npm start`


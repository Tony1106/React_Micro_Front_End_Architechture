# React_Micro_Front_End_Architechture
A small project apply Webpack Federation to build micro front architecture. Using Webpack, Typescript, Rollup, Shared Library, React Router, Zustand, Storybook...

[Demo](http://federation-app2.s3-website-ap-southeast-2.amazonaws.com/)

![Architechture](https://github.com/Tony1106/React_Micro_Front_End_Architechture/blob/master/architechture.png?raw=true)

![App Diagram](https://github.com/Tony1106/React_Micro_Front_End_Architechture/blob/master/app_diagram.png?raw=true)

# Architechture: 
Each app will have their own code base and a deploy process. App1, App2, App3... are one of the feature/business domain of App which will be deploy seperate to other host(we call it remote app). App is the Wrapper which consume all the features from other app, App decide how to use those feature and manage global store and routing.

But the is some question need to consider: 

1. How App1, App2... share state and access global store and mutate global store? 
2. How to redirect page when App control Routing?
3. How to share common UI component, helper function?

To solve this, I create another shared library which will bundle and export UI components, models, helper functions...
Then we can publish it to npm and other project can install the shared library to use. By this way, we also build a contract thoughout each team which work in different project.
For example, when we want to add new state in global store, the first thing we need to do is go to `shared_library`  to update the IStore interface.

To access to global store we will pass `useStore` as a props to the remote app. 

To access to router, we wraper the remote app inside `withRouter` to get `history` object and pass to the remote app.
# App
* ./home: main app run on port 8080
* ./view_product: remote app run on port 8081
* ./shared_library: share UI library, models, interface...

# How to start

1. Build shared package:

`cd shared_library`

`npm i`

`npm run build`

Then it will generate the file shared_library-1.0.0.tgz

Copy it to folder `home` and `view_product`

2. Run view_product project:

`npm i`

`npm start`

3. Run home project:

`npm i`

`npm start`


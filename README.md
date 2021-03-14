# typescript-nodejs-starter-autoroute

Starter project NodeJS in Typescript bundled with webpack 5 and babel.

```
+-- services
|   +-- api
|       +-- subroute
|           +-- customer.route.ts
|       +-- users.route.ts
```
I have insert a babel macro that autogenerate the routes:
all file .routes.ts are route of express
these are linked to the program with the macro and the relative path in services.
ex. 

users.route.ts are in services/api/users.route.ts 
-> the route become  http://localhost:3000/api/users

customer.route.ts are in services/api/users.route.ts 
-> the route become  http://localhost:3000/api/subroute/cuctomer

if you copi or move the files.route.ts in services -> auto generate new routes

the macro are in index.bs.ts that autogenerate the code when launch or build.
## Install:

1. Node/npm

## Launch app

1. npm install
2. server started at http://localhost:3000


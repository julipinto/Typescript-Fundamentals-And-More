# How to create a Node Project with typescript

### Using Yarn

##### With the project directory oppened on your favorite shell

```console
$ yarn init -y
$ yarn add typescript -D
$ yarn tsc --init
$ yarn add ts-node-dev -D
```

> _yarn init -y_ : initializing a node project

> _yarn add typescript -D_ : Adding typesctipt as a developer dependence

> _yarn tsc --init_ : Generetes the config file for ts

> _ts-node-dev_ : an alternative to Nodemon

##### Now, go to **_tsconfig.json_** and change the propety **_target_** to allow Node to compile the code with the latest version of _ES_

```json
"compilerOptions" : {
    ...
"target": "ES2017",
    ...
}
```

Now you can go to **_packege.json_** and config the project to start with a single script:

```json
{
    ...
    "scripts": {
        "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/rootFileName.ts"
    }
    ...
}
```

#### Flags tsnd (ts-node-dev)

> _--transpile-only_ : Says to Node just convert the code to javasctipt, whithout verifying error (Makes compiler go faster)

> _---ignore-watch node_modules_ : Ignore node_modules

> _--respawn_ : Refresh the application automatically to every change

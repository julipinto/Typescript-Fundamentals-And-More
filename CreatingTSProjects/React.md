# How to create a React Project with Typescript

### Using Yarn and CreateReactApp

##### With the project directory oppened on your favorite shell

```console
$ yarn create react-app FileName --template typescript
```

---

### Using [Vite](https://vitejs.dev/)

```console
$ yarn create vite
```

then follow the instructions it is requiring

```console
$ ? Project name: » projectName
```

Select react and then the ts variant moving the up and down arrows of your keyboard and pressing enter to select the option

```console
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
    vue
>   react
    preact
    lit
    svelte

? Select a variant: » - Use arrow-keys. Return to submit.
    react
>   react-ts
```

---

### Using [NextJS](https://nextjs.org/docs/basic-features/typescript)

You can create a TypeScript project with create-next-app using the --ts, --typescript flag like so:

```console
$ npx create-next-app@latest --ts
$ touch tsconfig.json
```

Next.js will automatically configure this file with default values.

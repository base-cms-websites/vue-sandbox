# vue-sandbox
Sandbox for vue testing

## First Steps

### Using Nuxt
Nuxt.js is a Vue framework for scaffolding project architecture
```
yarn create nuxt-app [project-name]
```

### Using Vue CLI
Vue CLI is a Vue tool for creating a new project

If you don't have the Vue CLI installed:
```
yarn global add @vue/cli
```

To start a new project
```
vue create [project-name]
# OR
vue ui
```


## Folders

### vue-3
- Utilizes Vue3 and the base @vue/cli setup

### hello-world
- Utilizes Vue2's basic ```$ vue create hello-world``` project and default features (Babel + Eslint)

### vue-2
- Utilizes Vue2, Vue CLI, and custom features
  - Babel, Eslint + Prettier, router, Sass/SCSS dart-sass

### vue-2-storybook
- Same as vue-2 setup
- Plus Storybook

### vue-2-vuesax-nuxt
- Utilizes Vue2
- Nuxt.js
  - Language: JS
  - UI Framework: Vuesax
  - Modules: n/a
  - Linting: ESLint, Prettier
  - Testing: Jest
  - Rendering: Universal (SSR / SSG)
  - Deployment: Server (Node.js hosting)
  - Development Tools: jsconfig.json, Dependabot
  - Continuous Integration: Github Actions
  - Version Control System: Git

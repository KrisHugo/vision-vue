# vision 0.22.9.24

这个和之前的vision respository是一个东西，但是想改用vue来实现。
之前完全没搞明白的vue，现在勉勉强强能够实现了。
总之下面的部署步骤我就不动他了，放在最底下。

然后下面是开发日志：

## Developing Journal
Here's for noticing the important improvements about this project.

### 0. Start-up
Build a basement with the great help from vue + vite.
There is still nothing which is what I want to achieve in this project named 'vision'.

#### 0.22.9.24. Forum Layout
I've tried to make the page responsive, but it's a truly hardwork.
Another task is to build some component with soft animation.
And yes, I already get a satisfied component - queryBar/searchBar with great animate reaction while I try to focus on it.

#### 0.22.9.25. Vue Framework
Having tried to comprehensive understand the Framework of this project -- vue.
There're lots of components and utilities I have ever found.
That was great.
- Check a bug out which is that the vite+vue website will not hot-update those pages who hadn't been *ref* correctly(such as File path letter case is wrong)

#### 0.22.9.28. Vue Front Reaction.

**Progress:**

Tried to achieve a little dynamic data acquisition and generation, in addition to the list of dynamic shrinkage to show the realization. 

Then continue to slowly add page styles and transition animation effects.
- when we try to get the root path, we can use a "@/..."

**Bugs:**

- It seems that if the default format of the radio is removed, it seems to become unclickable, very strange, I still need to continue to test how to achieve a good basic radio effect, if all use the button to achieve the effect will probably be very unpleasant. **The reason is that I didn't use "the id used in for of the label" correctly**
- Find a function to make a multicolor blended background
# * 运行附录

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

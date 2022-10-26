# vue3 框架搭建

## 创建项目

```bash
#npm
npm create vite@latest

#pnpm
pnpm create vite
```

## 代码格式

[代码统一规范](./formatter.md)

## node/typescript 支持、jsx 插件、@vueuse/core、pinia、vue-router

```bash
pnpm add -D @types/node @vitejs/plugin-vue-jsx @vueuse/core pinia vue-router
```

## unplugin-auto-import、unplugin-vue-components 自动引入

-   安装

```bash
pnpm add -D unplugin-auto-import unplugin-vue-components
```

-   配置

```js
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
    // ...
    plugins: [
        // ...
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: [
                "vue",
                "vue-router",
                "pinia",
                "@vueuse/core",
                // "vue-i18n",
                // ...
            ],
            eslintrc: {
                enabled: false, // Default `false`
                filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            },
            resolvers: [
                //...
            ],
        }),
        Components({
            dirs: ["src/components"],
            deep: true,
            extensions: ["vue"],
            resolvers: [
                //...
            ],
        }),
    ],
});
```

## element-plus

-   安装

```bash
pnpm install element-plus
```

-   volar 支持

```json
// tsconfig.json
{
    "compilerOptions": {
        // ...
        "types": ["element-plus/global"]
    }
}
```

-   自动引入

```ts
// vite.config.ts
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    // ...
    plugins: [
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
});
```

## vite.config.ts 配置

-   添加别名

```js
    resolve: {
        //设置别名
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    }
```

-   使用 jsx 插件

```js
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
    plugins: [vue(), vueJsx()],
});
```

## tsconfig.json 配置

```js
{
    "compilerOptions": {
        "typeRoots": [
            "node_modules/@types", // 默认值
            "src/types"
        ],
        "target": "ESNext",
        "useDefineForClassFields": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "strict": true,
        "jsx": "preserve",
        "sourceMap": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "esModuleInterop": true,
        "noImplicitAny": true, //不允许使用any
        "lib": ["ESNext", "DOM"],
        "skipLibCheck": true,
        "baseUrl": "./",
        "paths": {
            "@/*": ["src/*"]
        },
        "types": ["node"]
    },
    "include": [
        "src/**/*.ts",
        "src/**/*.d.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
        "*.d.ts"
    ]
}

```

## tailwindcss

-   安装

```bash
pnpm add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

-   创建配置文件

```bash
npx tailwindcss init --full
```

-   摇树

```js
// tailwind.config.js
module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
```

-   引入基础 css

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在 main.js 中引入

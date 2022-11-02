import fabricjs from "../lib/fabricjs/sidebar.js";
import vueuse from "../lib/vueuse/sidebar.js";

export default {
    title: "iBook",
    description: "My Personal Library.",
    ignoreDeadLinks: true,

    // Theme related configurations.
    themeConfig: {
        docFooter: {
            prev: "上一节",
            next: "下一节",
        },
        nav: [
            { text: "开始", link: "/startup/devEnv.md" },
            { text: "前端基础", link: "/base/html/index" },
            {
                text: "第三方库",
                items: [
                    { text: "Fabric.js", link: "/lib/fabricjs/intro" },
                    {
                        text: "VueUse",
                        link: "/lib/vueuse/state/createGlobalState",
                    },
                ],
            },
            { text: "面试题", link: "/interview/js/on" },
            { text: "运维", link: "/ops/verdaccio" },
            { text: "常见问题记录", link: "/solution/" },
            { text: "好玩的", link: "/goodjob/svg/intro" },
            { text: "接下来...", link: "/todo" },
        ],
        sidebar: {
            "/startup/": [
                {
                    text: "运行环境",
                    collapsible: true,
                    items: [
                        {
                            text: "安装",
                            link: "/startup/devEnv",
                        },
                        {
                            text: "vscode",
                            collapsible: true,
                            items: [
                                {
                                    text: "插件 plugins",
                                    link: "/startup/vscode/plugin",
                                },
                                {
                                    text: "设置 settings",
                                    link: "/startup/vscode/setting",
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "框架搭建",
                    collapsible: true,
                    items: [
                        {
                            text: "vue3 + vite",
                            link: "/startup/cli/vue3.md",
                        },
                        {
                            text: "代码规范",
                            link: "/startup/cli/formatter",
                        },
                    ],
                },
            ],
            "/lib/fabricjs": fabricjs,
            "/lib/vueuse/": vueuse,
            "/base/": [
                {
                    text: "HTML",
                    collapsible: true,
                    items: [{ text: "第一节", link: "/base/html/index" }],
                },
                {
                    text: "CSS",
                    collapsible: true,
                    items: [
                        { text: "display", link: "/base/css/display" },
                        { text: "冷门属性", link: "/base/css/uncommon" },
                    ],
                },
            ],
            "/interview/": [
                {
                    text: "JavaScript",
                    collapsible: true,
                    items: [
                        { text: "面试", link: "/interview/js/on" },
                        { text: "笔试", link: "/interview/js/off" },
                    ],
                },
            ],
            "/ops/": [
                {
                    items: [{ text: "verdaccio", link: "/ops/verdaccio" }],
                },
            ],
            "/goodjob/": [
                {
                    text: "svg",
                    collapsible: true,
                    items: [
                        { text: "介绍", link: "/goodjob/svg/intro" },
                        { text: "例子", link: "/goodjob/svg/demo" },
                    ],
                },
            ],
        },
    },
};

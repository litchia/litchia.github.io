import fabricjs from "../lib/fabricjs/sidebar.js";
import vueuse from "../lib/vueuse/sidebar.js";

export default {
    title: 'iBook',
    description: 'My Personal Library.',
    ignoreDeadLinks: true,

    // Theme related configurations.
    themeConfig: {
        docFooter: {
            prev: '上一节',
            next: '下一节'
        },
        nav: [
            { text: '基础', link: '/base/html/' },
            {
                text: '第三方库', items: [
                    { text: 'Fabric.js', link: '/lib/fabricjs/intro' },
                    { text: 'VueUse', link: '/lib/vueuse/state/createGlobalState' },
                ]
            },
            { text: '面试题', link: '/interview/js/on' },
            { text: '常见问题记录', link: '/solution/' },
            { text: '接下来...', link: '/todo' },
        ],
        sidebar: {
            '/lib/fabricjs': fabricjs,
            '/lib/vueuse/': vueuse,
            '/base/': [
                {
                    text: 'HTML',
                    collapsible: true,
                    items: [
                        { text: '第一节', link: '/base/html/' },
                    ]
                },
                {
                    text: 'CSS',
                    collapsible: true,
                    items: [
                        { text: 'display', link: '/base/css/display' },
                        { text: '冷门属性', link: '/base/css/uncommon' },
                    ]
                },
            ],
            '/interview/': [
                {
                    text: 'JavaScript',
                    collapsible: true,
                    items: [
                        { text: '面试', link: '/interview/js/on' },
                        { text: '笔试', link: '/interview/js/off' },
                    ]
                }
            ]
        }
    }
}

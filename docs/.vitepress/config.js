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
                text: '库', items: [
                    { text: 'Fabric', link: '/lib/fabricjs/intro' },
                ]
            },
            { text: '面试题', link: '/interview/js/on' },
        ],
        sidebar: {
            '/lib/': [
                {
                    text: 'Fabric',
                    collapsible: true,
                    items: [
                        { text: '介绍  Part-01', link: '/lib/fabricjs/intro' },
                        {
                            text: 'API文档',
                            items: [
                                { text: 'canvas', link: '/lib/fabricjs/api/canvas' },
                                { text: 'object', link: '/lib/fabricjs/api/object' }
                            ]
                        }
                    ]
                }
            ],
            '/base/': [
                {
                    text: 'HTML',
                    collapsible: true,
                    items: [
                        { text: '第一节', link: '/base/html/' },
                    ]
                }
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

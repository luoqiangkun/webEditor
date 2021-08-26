function getGridComponent( name ,cols ){
    let component = {
        component : 'Row',
        name:name,
        content : {
            items : []
        },
        style : {},
        class: 'flex'
    };
    let items = [];
    for( var i in cols ){
        items.push({
            component : 'Col',
            content : {
                items : []
            },
            style : {},
            class: 'flex-' + cols[i]
        })
    }
    component.content.items = items;
    return component;
}

let components = {
    gridComponent : [
        getGridComponent('布局一',[12]),
        getGridComponent('布局二',[6,6]),
        getGridComponent('布局三',[4,4,4]),
        getGridComponent('布局四',[3,3,3,3]),
        {
            component : 'Flex',
            name:'浮动盒子',
            content : {
                items: []
            },
            style : {
                display:"flex",
                flexDirection:"",
                flexWrap:"",
                justifyContent:"",
                alignItems:""
            },
            class: ''
        },
    ],
    baseComponent : [
        {
            component : 'Title',
            name:'标题',
            content : {
                html : 'Hello world'
            },
            style : {
                fontSize:'',
                color:'',
                background:'',
                lineHeight:'',
            },
            class: ''
        },
        {
            component : 'Text',
            name:'文本',
            content : {
                html : 'Hello world'
            },
            style : {
                fontSize:'',
                color:'',
                background:'',
                lineHeight:'',
            },
            class: ''
        },
        {
            component : 'Btn',
            name:'按钮',
            content : {
                href: '#',
                title : 'btn',
                target : '_blank',
                html : '按钮'
            },
            style : {
                fontSize:'',
                color:'',
                background:'',
                lineHeight:'',
            },
            class: ''
        },
        {
            component : 'Image',
            name:'图片',
            content : {
                src:assetUrl + '/img/image-03.png',
                alt:'image',
                href:'#',
                target : '_blank',
                title:''
            },
            style : {
                width: '',
                height: '',
            },
            class: ''
        },
        {
            component : 'Video',
            name:'视频',
            content : {
                src:'https://upos-hz-mirrorakam.akamaized.net/upgcxcode/20/24/90602420/90602420-1-208.mp4?e=ig8euxZM2rNcNbh3hzdVhwdlhz4zhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1626784036&gen=playurlv2&os=akam&oi=1815978915&trid=195812a38385416ba480d06992922406T&platform=html5&upsig=dc692ab566d61ce357040ae9d47d3226&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&hdnts=exp=1626776836~hmac=f70720bc31103aee69ae9a4e7089bb13b058f75ec17f8a8a7a440672193e5f0c&mid=580104086&bvc=vod&nettype=0&orderid=0,1&logo=80000000',
            },
            style : {
                width:'100%',
                height:'500px',
            },
            class: ''
        },
        {
            component:'Swiper',
            name:'轮播图',
            content:{
                items : [
                    {
                        component:'Image',
                        content: {
                            src:'https://res0.vmallres.com/shopdc/pic/202176/1b435cf1-5371-438e-982a-f414f931e298.jpg',
                            alt:'image',
                            href:'#',
                            target : '_blank',
                            title:'image'
                        },
                        style: {
                            width:'100%',
                            height:'420px'
                        },
                        class: ''
                    },
                    {
                        component:'Image',
                        content: {
                            src:'https://res6.vmallres.com/shopdc/pic/2021712/c8fba0dc-36ef-4ae9-b47e-ffa187786b61.jpg',
                            alt:'image',
                            href:'#',
                            target : '_blank',
                            title:'image'
                        },
                        style: {
                            width:'100%',
                            height:'420px'
                        },
                        class: ''
                    }
                ]
            },
            style : {
                width:'100%',
                height:'420px'
            },
            class: '',
        },
    ],
};

let sections = {
    screen : [
        {
            component : 'Module',
            name:'模块七',
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '平台专供'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '<span class="icon icon-right-arrow"></span>',
                        href : '#',
                        target : '_blank',
                        title : 'title',
                    },
                    style : {},
                    class: ''
                },
                products : {
                    name:'商品',
                    component : 'Product',
                    limit:3,
                    content : {
                        items : [
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 2,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 3,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style : {
                width:'385px',
            },
            class: ''
        },
        {
            component : 'Module',
            name:'模块八',
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '集采'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '<span class="icon icon-right-arrow"></span>',
                        href : '#',
                        target : '_blank',
                        title : 'title',
                    },
                    style : {},
                    class: ''
                },
                products : {
                    name:'商品',
                    component : 'Product',
                    limit:3,
                    content : {
                        items : [
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 2,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 3,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style : {
                width:'385px',
            },
            class: ''
        },
        {
            component:'Member',
            name:'用户',
            content:{
                logo : {
                    component : 'Icon',
                    name:'图片',
                    content : {
                        src:assetUrl + '/img/logo2.png',
                        href:'#',
                        alt:'image',
                        target : '',
                        title: '',
                    },
                    style : {
                        width: '45px',
                        height: '45px',
                    },
                    class: ''
                },
                welcome : {
                    component : 'Text',
                    name:'文本',
                    content : {
                        html : '欢迎来到惠药桶'
                    },
                    style : {
                        fontSize:'',
                        color:'',
                        background:'',
                        lineHeight:'',
                    },
                    class: ''
                },
                security : {
                    component : 'Div',
                    name:'Div',
                    content : {
                        login : {
                            id : 'Link-854353',
                            name:'链接',
                            component : 'Link',
                            content : {
                                html : '登陆',
                                href : '#',
                                target : '_blank',
                                title : 'title',
                            },
                            style : {
                                width: "",
                                height: ""
                            },
                            class: ''
                        },
                        register : {
                            id : 'Link-3543352',
                            name:'链接',
                            component : 'Link',
                            content : {
                                html : '注册',
                                href : '#',
                                target : '_blank',
                                title : 'title',
                            },
                            style : {
                                width: "",
                                height: ""
                            },
                            class: ''
                        }
                    },
                    style : {
                        width:'',
                        height:'',
                    },
                    class: ''
                },
                action : {
                    component : 'Div',
                    name:'Div',
                    content : {
                        items :[
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '新人专项',
                                    href : '#',
                                    target : '_blank',
                                    title : 'title',
                                },
                                style : {
                                    width: "",
                                    height: ""
                                },
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '会员专享',
                                    href : '#',
                                    target : '_blank',
                                    title : 'title',
                                },
                                style : {
                                    width: "",
                                    height: ""
                                },
                                class: ''
                            }
                        ]
                    },
                    style : {
                        width:'',
                        height:'',
                    },
                    class: ''
                }
            },
            style : {
                width: "200px",
                height: ""
            },
            class: '',
        },
        {
            component:'Shortcut',
            name:'快捷入口',
            content : {
                items : [
                    {
                        component:'Btn',
                        name:'按钮',
                        content : {
                            href : '#',
                            target : '_blank',
                            title : 'title',
                            icon : {
                                component:'Image',
                                name:'图片',
                                content: {
                                    src:assetUrl + '/img/i1.png',
                                    alt:'image',
                                },
                                style: {
                                    width:'25px',
                                    height:'25px'
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Link',
                                content : {
                                    html : '红包',
                                },
                                style : {
                                    width: "",
                                    height: ""
                                },
                                class: ''
                            }
                        },
                        style : {
                            width: "",
                            height: ""
                        },
                        class: '',
                    },
                    {
                        component:'Btn',
                        name:'按钮',
                        content : {
                            icon : {
                                component:'Image',
                                name:'图片',
                                content: {
                                    src:assetUrl + '/img/i2.png',
                                    alt:'image'
                                },
                                style: {
                                    width:'25px',
                                    height:'25px'
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '积分'
                                },
                                style : {
                                    width: "",
                                    height: ""
                                },
                                class: ''
                            }
                        },
                        style : {
                            width: "",
                            height: ""
                        },
                        class: '',
                    },
                    {
                        component:'Btn',
                        name:'按钮',
                        content : {
                            icon : {
                                component:'Image',
                                name:'图片',
                                content: {
                                    src:assetUrl + '/img/i2.png',
                                    alt:'image'
                                },
                                style: {
                                    width:'25px',
                                    height:'25px'
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '积分'
                                },
                                style : {
                                    width: "",
                                    height: ""
                                },
                                class: ''
                            }
                        },
                        style : {
                            width: "",
                            height: ""
                        },
                        class: '',
                    },
                    {
                        component:'Btn',
                        name:'按钮',
                        content : {
                            icon : {
                                component:'Image',
                                name:'图片',
                                content: {
                                    src:assetUrl + '/img/i2.png',
                                    alt:'image'
                                },
                                style: {
                                    width:'25px',
                                    height:'25px'
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '积分'
                                },
                                style : {
                                    width: "",
                                    height: ""
                                },
                                class: ''
                            }
                        },
                        style : {
                            width: "",
                            height: ""
                        },
                        class: '',
                    }
                ]
            },
            style : {
                width: "200px",
                height: ""
            },
            class: '',
        },
        {
            component:'Module',
            name:'模块十三',
            content:{
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '加价购'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '更多',
                        href : '#',
                        target : '_blank',
                        title : 'title',
                    },
                    style : {},
                    class: ''
                },
                news:{
                    name:'新闻',
                    component : 'News',
                    content : {
                        items : [
                            {
                                article_id:1,
                                article_title : '这是新闻标题',
                                article_content:'这是新闻内容这是新闻内容这这是新闻内容这这是新闻内容',
                                article_image:assetUrl + '/img/news_01.png',
                                article_time:'2021-07-30',
                                article_category:'企业新闻',
                            },
                            {
                                article_id:2,
                                article_title : '这是新闻标题',
                                article_content:'这是新闻内容这是新闻内容这这是新闻内容这这是新闻内容',
                                article_image:assetUrl + '/img/news_01.png',
                                article_time:'2021-07-30',
                                article_category:'企业新闻',
                            },
                            {
                                article_id:3,
                                article_title : '这是新闻标题',
                                article_content:'这是新闻内容这是新闻内容这这是新闻内容这这是新闻内容',
                                article_image:assetUrl + '/img/news_01.png',
                                article_time:'2021-07-30',
                                article_category:'企业新闻',
                            },
                            {
                                article_id:4,
                                article_title : '这是新闻标题',
                                article_content:'这是新闻内容这是新闻内容这这是新闻内容这这是新闻内容',
                                article_image:assetUrl + '/img/news_01.png',
                                article_time:'2021-07-30',
                                article_category:'企业新闻',
                            },
                            {
                                article_id:5,
                                article_title : '这是新闻标题',
                                article_content:'这是新闻内容这是新闻内容这这是新闻内容这这是新闻内容',
                                article_image:assetUrl + '/img/news_01.png',
                                article_time:'2021-07-30',
                                article_category:'企业新闻',
                            }
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style : {
                width: "200px",
                height: ""
            },
            class: '',
        },
    ],
    container:[
        {
            component: "Module",
            name: "模块一",
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '满即送'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '更多',
                        href : '#',
                        title:'',
                        target:''
                    },
                    style : {},
                    class: ''
                },
                items : [
                    {
                        component : 'Image',
                        name:'图片',
                        content : {
                            src:assetUrl + '/img/discount-01.png',
                            href:'#',
                            alt:'image',
                            target : '',
                            title: '',
                        },
                        style : {
                            width: '180px',
                            height: '245px',
                        },
                        class: ''
                    },
                    {
                        component : 'Image',
                        name:'图片',
                        content : {
                            src:assetUrl + '/img/discount-02.png',
                            href:'#',
                            alt:'image',
                            target : '',
                            title: '',
                        },
                        style : {
                            width: '180px',
                            height: '245px',
                        },
                        class: ''
                    },
                    {
                        component : 'Image',
                        name:'图片',
                        content : {
                            src:assetUrl + '/img/discount-03.png',
                            href:'#',
                            alt:'image',
                            target : '',
                            title: '',
                        },
                        style : {
                            width: '180px',
                            height: '245px',
                        },
                        class: ''
                    }
                ],
            },
            style: {
                width: "595px",
                height: "",
            },
            class: ""
        },
        {
            component: "Module",
            name: "模块二",
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '满即送'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '更多',
                        href : '#',
                        title:'',
                        target:''
                    },
                    style : {},
                    class: ''
                },
                nav:{
                    name:'导航',
                    component : 'Navigation',
                    content : {
                        items : [
                            {
                                component : 'Text',
                                name:'文本',
                                content : {
                                    html : '分类1'
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            {
                                component : 'Text',
                                name:'文本',
                                content : {
                                    html : '分类2'
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        ]
                    },
                    style : {},
                    class: ''
                },
                tab:{
                    name:'选项卡',
                    component : 'Tab',
                    content : {
                        items : [
                            {
                                name:'商品',
                                component : 'Product',
                                limit:3,
                                content : {
                                    items : [
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'商品',
                                component : 'Product',
                                limit:3,
                                content : {
                                    items : [
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            }
                        ],
                    },
                    style : {},
                    class: ''
                }
            },
            style: {
                width: "595px",
                height: "",
            },
            class: ""
        },
        {
            component: "Module",
            name: "模块三",
            content : {
                products : {
                    name:'商品',
                    component : 'Product',
                    limit:5,
                    content : {
                        items : [
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 2,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 3,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 2,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            }
                        ]
                    },
                    style : {},
                    class: ''
                },
                image : {
                    name:'图片',
                    component:'Image',
                    content: {
                        src: assetUrl + '/img/timer_03.png',
                        href:'#',
                        target : '_blank',
                        title:'',
                        alt:'image'
                    },
                    style: {
                        width:'200px',
                        height:''
                    },
                    class: ''
                }
            },
            style: {
                width: "595px",
                height: "",
            },
            class: ""
        },
        {
            component: "Module",
            name: "模块四",
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '满即送'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '更多',
                        href : '#',
                        title:'',
                        target:''
                    },
                    style : {},
                    class: ''
                },
                nav:{
                    name:'导航',
                    component : 'Navigation',
                    content : {
                        items : [
                            {
                                component : 'Text',
                                name:'文本',
                                content : {
                                    html : '分类1'
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            {
                                component : 'Text',
                                name:'文本',
                                content : {
                                    html : '分类2'
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        ]
                    },
                    style : {},
                    class: ''
                },
                tab:{
                    name:'选项卡',
                    component : 'Tab',
                    content : {
                        items : [
                            {
                                name:'商品',
                                component : 'Product',
                                limit:6,
                                content : {
                                    items : [
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'商品',
                                component : 'Product',
                                limit:6,
                                content : {
                                    items : [
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            }
                        ],
                    },
                    style : {},
                    class: ''
                },
                image : {
                    name:'图片',
                    component:'Image',
                    content: {
                        src: assetUrl + '/img/bg.png',
                        href:'#',
                        target : '_blank',
                        title:'',
                        alt:'image'
                    },
                    style: {
                        width:'240px',
                        height:''
                    },
                    class: ''
                },
                rank:{
                    name:'Div',
                    component : 'Div',
                    content : {
                        title:{
                            name:'标题',
                            component : 'Title',
                            content : {
                                html : '销量排行'
                            },
                            style : {},
                            class: ''
                        },
                        products : {
                            name:'商品',
                            component : 'Product',
                            limit:8,
                            content : {
                                items : [
                                    {
                                        product_id : 1,
                                        product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        store_id:'1',
                                        store_name : '惠药通品牌店',
                                        product_image : assetUrl + '/img/phone.jpeg',
                                        product_unit_price : 1799,
                                        product_market_price : 2000
                                    },
                                    {
                                        product_id : 2,
                                        product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        store_id:'1',
                                        store_name : '惠药通品牌店',
                                        product_image : assetUrl + '/img/phone.jpeg',
                                        product_unit_price : 1799,
                                        product_market_price : 2000
                                    },
                                    {
                                        product_id : 3,
                                        product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        store_id:'1',
                                        store_name : '惠药通品牌店',
                                        product_image : assetUrl + '/img/phone.jpeg',
                                        product_unit_price : 1799,
                                        product_market_price : 2000
                                    },
                                    {
                                        product_id : 1,
                                        product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        store_id:'1',
                                        store_name : '惠药通品牌店',
                                        product_image : assetUrl + '/img/phone.jpeg',
                                        product_unit_price : 1799,
                                        product_market_price : 2000
                                    },
                                    {
                                        product_id : 2,
                                        product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        store_id:'1',
                                        store_name : '惠药通品牌店',
                                        product_image : assetUrl + '/img/phone.jpeg',
                                        product_unit_price : 1799,
                                        product_market_price : 2000
                                    },
                                    {
                                        product_id : 2,
                                        product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                        store_id:'1',
                                        store_name : '惠药通品牌店',
                                        product_image : assetUrl + '/img/phone.jpeg',
                                        product_unit_price : 1799,
                                        product_market_price : 2000
                                    }
                                ]
                            },
                            style : {},
                            class: ''
                        }
                    },
                    style : {},
                    class: ''
                },

            },
            style: {
                width: "",
                height: "",
            },
            class: ""
        },
        {
            component: "Module",
            name: "模块五",
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '满即送'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '更多',
                        href : '#',
                        title:'',
                        target:''
                    },
                    style : {},
                    class: ''
                },
                products:{
                    name:'商品',
                    component : 'Product',
                    limit:8,
                    content : {
                        items : [
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 2,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 3,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            }
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style: {
                width: "",
                height: "",
            },
            class: ""
        },
        {
            component: "Module",
            name: "模块六",
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '满即送'
                    },
                    style : {},
                    class: ''
                },
                more:{
                    name:'链接',
                    component : 'Link',
                    content : {
                        html : '更多',
                        href : '#',
                        title:'',
                        target:''
                    },
                    style : {},
                    class: ''
                },
                nav:{
                    name:'导航',
                    component : 'Navigation',
                    content : {
                        items : [
                            {
                                component : 'Text',
                                name:'文本',
                                content : {
                                    html : '分类1'
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            {
                                component : 'Text',
                                name:'文本',
                                content : {
                                    html : '分类2'
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        ]
                    },
                    style : {},
                    class: ''
                },
                products:{
                    name:'商品',
                    component : 'Product',
                    limit:3,
                    content : {
                        items : [
                            {
                                product_id : 1,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 2,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            },
                            {
                                product_id : 3,
                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                store_id:'1',
                                store_name : '惠药通品牌店',
                                product_image : assetUrl + '/img/phone.jpeg',
                                product_unit_price : 1799,
                                product_market_price : 2000
                            }
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style: {
                width: "595px",
                height: "",
            },
            class: ""
        },
        {
            component : 'Module',
            name:'模块十一',
            content : {
                nav:{
                    name:'导航',
                    component : 'Navigation',
                    content : {
                        items : [
                            {
                                component : 'Div',
                                name:'Div',
                                content : {
                                    title:{
                                        component : 'Title',
                                        name:'标题',
                                        content : {
                                            html : '标题1'
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: 'title'
                                    },
                                    text:{
                                        component : 'Text',
                                        name:'文本',
                                        content : {
                                            html : '文本1'
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: 'text'
                                    }
                                },
                                style : {},
                                class: ''
                            },
                            {
                                component : 'Div',
                                name:'Div',
                                content : {
                                    title:{
                                        component : 'Title',
                                        name:'标题',
                                        content : {
                                            html : '标题2'
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: 'title'
                                    },
                                    text:{
                                        component : 'Text',
                                        name:'文本',
                                        content : {
                                            html : '文2'
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: 'text'
                                    }
                                },
                                style : {},
                                class: ''
                            },
                            {
                                component : 'Div',
                                name:'Div',
                                content : {
                                    title:{
                                        component : 'Title',
                                        name:'标题',
                                        content : {
                                            html : '标题3'
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: 'title'
                                    },
                                    text:{
                                        component : 'Text',
                                        name:'文本',
                                        content : {
                                            html : '文3'
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: 'text'
                                    }
                                },
                                style : {},
                                class: ''
                            },
                        ]
                    },
                    style : {},
                    class: ''
                },
                tab:{
                    name:'选项卡',
                    component : 'Tab',
                    content : {
                        items : [
                            {
                                name:'商品',
                                component : 'Product',
                                limit:15,
                                content : {
                                    items : [
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 4,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 5,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'商品',
                                component : 'Product',
                                limit:15,
                                content : {
                                    items : [
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 4,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 5,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'商品',
                                component : 'Product',
                                limit:15,
                                content : {
                                    items : [
                                        {
                                            product_id : 1,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 2,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 3,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 4,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                        {
                                            product_id : 5,
                                            product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            store_id:'1',
                                            store_name : '惠药通品牌店',
                                            product_image : assetUrl + '/img/phone.jpeg',
                                            product_unit_price : 1799,
                                            product_market_price : 2000
                                        },
                                    ]
                                },
                                style : {},
                                class: ''
                            }
                        ],
                    },
                    style : {},
                    class: ''
                }

            },
            style : {},
            class: ''
        },
    ],
    footer:[
        {
            component: "Module",
            name: "模块十",
            content :{
                items : [
                    {
                        component: "Div",
                        name: "Div",
                        content : {
                            icon : {
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/tag_01.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'45px',
                                    height:'45px'
                                },
                                class: ''
                            },
                            title : {
                                name:'标题',
                                component : 'Title',
                                content : {
                                    html : '正品保障',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '国家认证 正规合法',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: ""
                    },
                    {
                        component: "Div",
                        name: "Div",
                        content : {
                            icon : {
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/tag_02.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'45px',
                                    height:'45px'
                                },
                                class: ''
                            },
                            title : {
                                name:'标题',
                                component : 'Title',
                                content : {
                                    html : '专业药师',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '用户全程指导',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: ""
                    },
                    {
                        id: "Div-677435",
                        component: "Div",
                        name: "Div",
                        content : {
                            icon : {
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/tag_03.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'45px',
                                    height:'45px'
                                },
                                class: ''
                            },
                            title : {
                                name:'标题',
                                component : 'Title',
                                content : {
                                    html : '货到付款',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '货到付款 狗药物有',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: ""
                    },
                    {
                        component: "Div",
                        name: "Div",
                        content : {
                            icon : {
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/tag_04.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'45px',
                                    height:'45px'
                                },
                                class: ''
                            },
                            title : {
                                name:'标题',
                                component : 'Title',
                                content : {
                                    html : '厂家授权',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '厂家授权 正品渠道',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: ""
                    },
                    {
                        component: "Div",
                        name: "Div",
                        content : {
                            icon : {
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/tag_05.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'45px',
                                    height:'45px'
                                },
                                class: ''
                            },
                            title : {
                                name:'标题',
                                component : 'Title',
                                content : {
                                    html : '隐私配送',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '安全放行 隐私配色',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: ""
                    },
                    {
                        component: "Div",
                        name: "Div",
                        content : {
                            icon : {
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/tag_06.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'45px',
                                    height:'45px'
                                },
                                class: ''
                            },
                            title : {
                                name:'标题',
                                component : 'Title',
                                content : {
                                    html : '满79包邮',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            },
                            text : {
                                name:'文本',
                                component : 'Text',
                                content : {
                                    html : '全场满79包邮',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: ""
                    }
                ]
            },
            style: {
                width: "",
                height: ""
            },
            class: ""
        }
    ]
};

let pageData  = [
    {
        id: "Header",
        component: "Header",
        name: "头部",
        content: {
            logo: {
                id: "Image-157208",
                component: "Image",
                name: "图片",
                content: {
                    src: "./img/logo.png",
                    alt: "image",
                    href: "#",
                    target: "_blank",
                    title: "image"
                },
                style: {
                    width: "185px",
                    height: "74px"
                },
                class: ""
            },
            search :{
                id: "Div-157208",
                component: "Div",
                name: "Div",
                content: {
                    hot : {
                        id: "TextList-157201",
                        component: "TextList",
                        name: "热搜",
                        content: {
                            items : [
                                {
                                    id:'Text-143535',
                                    component : 'Text',
                                    name:'文本',
                                    content : {
                                        html : '感冒颗粒'
                                    },
                                    style : {
                                        fontSize:'',
                                        color:'',
                                        background:'',
                                        lineHeight:'',
                                    },
                                    class: ''
                                },
                                {
                                    id:'Text-1343535',
                                    component : 'Text',
                                    name:'文本',
                                    content : {
                                        html : '消炎'
                                    },
                                    style : {
                                        fontSize:'',
                                        color:'',
                                        background:'',
                                        lineHeight:'',
                                    },
                                    class: ''
                                },
                                {
                                    id:'Text-134354',
                                    component : 'Text',
                                    name:'文本',
                                    content : {
                                        html : '维生素'
                                    },
                                    style : {
                                        fontSize:'',
                                        color:'',
                                        background:'',
                                        lineHeight:'',
                                    },
                                    class: ''
                                }
                            ]
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: ""
                    }
                },
                style: {
                    width: "",
                    height: ""
                },
                class: ""
            },
            action : {
                id: "Div-157208",
                component: "Div",
                name: "Div",
                content : {
                    cart : {
                        id: "Btn-157348",
                        component: "Btn",
                        name: "Btn",
                        content : {
                            href:'#',
                            target : '_blank',
                            title:'',
                            icon : {
                                id:'Icon-24443',
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/car.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'22px',
                                    height:'22px'
                                },
                                class: ''
                            },
                            text : {
                                id:'Text-183353',
                                name:'标题',
                                component : 'Text',
                                content : {
                                    html : '购物车',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: "flex"
                    },
                    buy : {
                        id: "Btn-152448",
                        component: "Btn",
                        name: "Btn",
                        content : {
                            href:'#',
                            target : '_blank',
                            title:'',
                            icon : {
                                id:'Icon-25343',
                                component:'Icon',
                                name:'Icon',
                                content: {
                                    src:'./img/right.png',
                                    alt:'icon',
                                },
                                style: {
                                    width:'22px',
                                    height:'22px'
                                },
                                class: ''
                            },
                            text : {
                                id:'Text-185253',
                                name:'标题',
                                component : 'Text',
                                content : {
                                    html : '飞速下单',
                                },
                                style : {
                                    fontSize:'',
                                    color:'',
                                    background:'',
                                    lineHeight:'',
                                },
                                class: ''
                            }
                        },
                        style: {
                            width: "",
                            height: ""
                        },
                        class: "flex"
                    }
                },
                style: {
                    width: "",
                    height: ""
                },
                class: ""
            },
            image : {
                id:'Image-54854',
                component:'Image',
                name: "图片",
                content: {
                    src:'./img/qg.png',
                    alt:'image',
                    href:'#',
                    target : '_blank',
                    title:'image'
                },
                style: {
                    width:'165px',
                    height:'40px'
                },
                class: ''
            },
        },
        style: {
            width: "",
            height: ""
        },
        class: ""
    },
    {
        id: "Nav",
        component: "Nav",
        name: "导航",
        content : {
            items : [
                {
                    id:'Text-85351',
                    component : 'Text',
                    name:'文本',
                    content : {
                        html : '求购大厅'
                    },
                    style : {
                        fontSize:'',
                        color:'',
                        background:'',
                        lineHeight:'',
                    },
                    class: ''
                },
                {
                    id:'Text-85353',
                    component : 'Text',
                    name:'文本',
                    content : {
                        html : '求购大厅'
                    },
                    style : {
                        fontSize:'',
                        color:'',
                        background:'',
                        lineHeight:'',
                    },
                    class: ''
                },
                {
                    id:'Text-85323',
                    component : 'Text',
                    name:'文本',
                    content : {
                        html : '求购大厅'
                    },
                    style : {
                        fontSize:'',
                        color:'',
                        background:'',
                        lineHeight:'',
                    },
                    class: ''
                },
                {
                    id:'Text-83353',
                    component : 'Text',
                    name:'文本',
                    content : {
                        html : '求购大厅'
                    },
                    style : {
                        fontSize:'',
                        color:'',
                        background:'',
                        lineHeight:'',
                    },
                    class: ''
                }
            ]
        },
        style: {
            width: "",
            height: ""
        },
        class: ""
    },
    {
        id: "Screen",
        component: "Screen",
        name: "屏幕",
        content : {
            category : {
                id: "Category",
                component: "Category",
                name: "分类",
                content:{

                },
                style: {
                    width: "",
                    height: ""
                },
                class: ""
            },
            banner : {
                id:'banner-0001',
                component:'Banner',
                name:'广告图',
                content:{
                    items : [
                        {
                            id:'Image-0005',
                            component:'Image',
                            name:'图片',
                            content: {
                                src:'./img/banner.png',
                                alt:'image',
                                href:'#',
                                target : '_blank',
                                title:'image'
                            },
                            style: {
                                width:'570px',
                                height:'315px'
                            },
                            class: ''
                        },
                        {
                            id:'Image-0006',
                            component:'Image',
                            name:'图片',
                            content: {
                                src:'./img/banner.png',
                                alt:'image',
                                href:'#',
                                target : '_blank',
                                title:'image'
                            },
                            style: {
                                width:'570px',
                                height:'315px'
                            },
                            class: ''
                        },
                        {
                            id:'Image-0007',
                            component:'Image',
                            name:'图片',
                            content: {
                                src:'./img/banner.png',
                                alt:'image',
                                href:'#',
                                target : '_blank',
                                title:'image'
                            },
                            style: {
                                width:'570px',
                                height:'315px'
                            },
                            class: ''
                        },
                    ]
                },
                style : {},
                class: '',
            },
            center : {
                id:'Flex-54553',
                component:'Flex',
                name:'Flex',
                content : {
                    items : [
                        {
                            id:'Image-3555',
                            component:'Image',
                            name:'图片',
                            content: {
                                src:'./img/banner2.png',
                                alt:'image',
                                href:'#',
                                target : '_blank',
                                title:'image'
                            },
                            style: {
                                width:'200px',
                                height:'98px'
                            },
                            class: ''
                        },
                        {
                            id:'Image-352352',
                            component:'Image',
                            name:'图片',
                            content: {
                                src:'./img/banner2.png',
                                alt:'image',
                                href:'#',
                                target : '_blank',
                                title:'image'
                            },
                            style: {
                                width:'200px',
                                height:'98px'
                            },
                            class: ''
                        },
                        {
                            id:'Image-34344',
                            component:'Image',
                            content: {
                                src:'./img/banner3.png',
                                alt:'image',
                                href:'#',
                                target : '_blank',
                                title:'image'
                            },
                            style: {
                                width:'200px',
                                height:'98px'
                            },
                            class: ''
                        },
                    ]
                },
                style : {
                    width: "200px",
                    height: "315px",
                    display:"flex",
                    flexDirection:"column"
                },
                class: '',
            },
            right : {
                id:'Flex-535634',
                component:'Flex',
                name:'Flex',
                content : {
                    items : [
                        {
                            id: "Member-124242",
                            component:'Member',
                            name:'用户',
                            content:{
                                logo : {
                                    id:'Icon-353555',
                                    component : 'Icon',
                                    name:'图片',
                                    content : {
                                        src:assetUrl + '/img/logo2.png',
                                        href:'#',
                                        alt:'image',
                                        target : '',
                                        title: '',
                                    },
                                    style : {
                                        width: '45px',
                                        height: '45px',
                                    },
                                    class: ''
                                },
                                welcome : {
                                    id:'Text-55353',
                                    component : 'Text',
                                    name:'文本',
                                    content : {
                                        html : '欢迎来到惠药桶'
                                    },
                                    style : {
                                        fontSize:'',
                                        color:'',
                                        background:'',
                                        lineHeight:'',
                                    },
                                    class: ''
                                },
                                security : {
                                    id:'Div-53535',
                                    component : 'Div',
                                    name:'Div',
                                    content : {
                                        login : {
                                            id : 'Link-854353',
                                            name:'链接',
                                            component : 'Link',
                                            content : {
                                                html : '登陆',
                                                href : '#',
                                                target : '_blank',
                                                title : 'title',
                                            },
                                            style : {
                                                width: "",
                                                height: ""
                                            },
                                            class: ''
                                        },
                                        register : {
                                            id : 'Link-3543352',
                                            name:'链接',
                                            component : 'Link',
                                            content : {
                                                html : '注册',
                                                href : '#',
                                                target : '_blank',
                                                title : 'title',
                                            },
                                            style : {
                                                width: "",
                                                height: ""
                                            },
                                            class: ''
                                        }
                                    },
                                    style : {
                                        width:'',
                                        height:'',
                                    },
                                    class: ''
                                },
                                action : {
                                    id: 'Div-553535',
                                    component : 'Div',
                                    name:'Div',
                                    content : {
                                        items :[
                                            {
                                                id:'Link-35353',
                                                name:'链接',
                                                component : 'Link',
                                                content : {
                                                    html : '新人专项',
                                                    href : '#',
                                                    target : '_blank',
                                                    title : 'title',
                                                },
                                                style : {
                                                    width: "",
                                                    height: ""
                                                },
                                                class: ''
                                            },
                                            {
                                                id:'Link-53535',
                                                name:'链接',
                                                component : 'Link',
                                                content : {
                                                    html : '会员专享',
                                                    href : '#',
                                                    target : '_blank',
                                                    title : 'title',
                                                },
                                                style : {
                                                    width: "",
                                                    height: ""
                                                },
                                                class: ''
                                            }
                                        ]
                                    },
                                    style : {
                                        width:'',
                                        height:'',
                                    },
                                    class: ''
                                }
                            },
                            style : {
                                width: "200px",
                                height: ""
                            },
                            class: '',
                        },
                        {
                            component:'Shortcut',
                            name:'快捷入口',
                            content : {
                                items : [
                                    {
                                        id:'Btn-53535',
                                        component:'Btn',
                                        name:'按钮',
                                        content : {
                                            href : '#',
                                            target : '_blank',
                                            title : 'title',
                                            icon : {
                                                id: 'Icon-53535',
                                                component:'Image',
                                                name:'图片',
                                                content: {
                                                    src:assetUrl + '/img/i1.png',
                                                    alt:'image',
                                                },
                                                style: {
                                                    width:'25px',
                                                    height:'25px'
                                                },
                                                class: ''
                                            },
                                            text : {
                                                id: 'Text-53535',
                                                name:'文本',
                                                component : 'Link',
                                                content : {
                                                    html : '红包',
                                                },
                                                style : {
                                                    width: "",
                                                    height: ""
                                                },
                                                class: ''
                                            }
                                        },
                                        style : {
                                            width: "",
                                            height: ""
                                        },
                                        class: '',
                                    },
                                    {
                                        id:'Btn-53533335',
                                        component:'Btn',
                                        name:'按钮',
                                        content : {
                                            icon : {
                                                component:'Image',
                                                name:'图片',
                                                content: {
                                                    src:assetUrl + '/img/i2.png',
                                                    alt:'image'
                                                },
                                                style: {
                                                    width:'25px',
                                                    height:'25px'
                                                },
                                                class: ''
                                            },
                                            text : {
                                                name:'文本',
                                                component : 'Text',
                                                content : {
                                                    html : '积分'
                                                },
                                                style : {
                                                    width: "",
                                                    height: ""
                                                },
                                                class: ''
                                            }
                                        },
                                        style : {
                                            width: "",
                                            height: ""
                                        },
                                        class: '',
                                    },
                                    {
                                        component:'Btn',
                                        name:'按钮',
                                        content : {
                                            icon : {
                                                component:'Image',
                                                name:'图片',
                                                content: {
                                                    src:assetUrl + '/img/i2.png',
                                                    alt:'image'
                                                },
                                                style: {
                                                    width:'25px',
                                                    height:'25px'
                                                },
                                                class: ''
                                            },
                                            text : {
                                                name:'文本',
                                                component : 'Text',
                                                content : {
                                                    html : '积分'
                                                },
                                                style : {
                                                    width: "",
                                                    height: ""
                                                },
                                                class: ''
                                            }
                                        },
                                        style : {
                                            width: "",
                                            height: ""
                                        },
                                        class: '',
                                    },
                                    {
                                        component:'Btn',
                                        name:'按钮',
                                        content : {
                                            icon : {
                                                component:'Image',
                                                name:'图片',
                                                content: {
                                                    src:assetUrl + '/img/i2.png',
                                                    alt:'image'
                                                },
                                                style: {
                                                    width:'25px',
                                                    height:'25px'
                                                },
                                                class: ''
                                            },
                                            text : {
                                                name:'文本',
                                                component : 'Text',
                                                content : {
                                                    html : '积分'
                                                },
                                                style : {
                                                    width: "",
                                                    height: ""
                                                },
                                                class: ''
                                            }
                                        },
                                        style : {
                                            width: "",
                                            height: ""
                                        },
                                        class: '',
                                    }
                                ]
                            },
                            style : {
                                width: "200px",
                                height: ""
                            },
                            class: '',
                        },
                        {
                            id:'News',
                            component:'News',
                            name:'新闻',
                            content:{
                                title:{
                                    id:'Title-14242',
                                    name:'标题',
                                    component : 'Title',
                                    content : {
                                        html : '加价购'
                                    },
                                    style : {},
                                    class: ''
                                },
                                more:{
                                    id:'Link-12424',
                                    name:'链接',
                                    component : 'Link',
                                    content : {
                                        html : '更多',
                                        href : '#',
                                        target : '_blank',
                                        title : 'title',
                                    },
                                    style : {},
                                    class: ''
                                },
                                items : []
                            },
                            style : {
                                width: "200px",
                                height: ""
                            },
                            class: '',
                        },
                        {
                            id:'Image-54466',
                            component:'Image',
                            name:'图片',
                            content: {
                                src:'./img/qr.png',
                                alt:'image',
                                href:'#',
                                target : '_blank',
                                title:'image'
                            },
                            style: {
                                width:'100px',
                                height:'100px'
                            },
                            class: ''
                        }
                    ]
                },
                style : {
                    width: "",
                    height: "",
                    flexWrap: 'wrap'
                },
                class: '',
            },
            bottom : {
                id:'Flex-0002',
                component:'Flex',
                name:'Flex',
                content : {
                    items : [
                        {
                            id: "Module-5445455354145",
                            component: "Module",
                            name: "模块七",
                            content : {
                                title:{
                                    id:'Title-553535835355',
                                    name:'标题',
                                    component : 'Title',
                                    content : {
                                        html : '满即送'
                                    },
                                    style : {},
                                    class: ''
                                },
                                more:{
                                    id:'Link-583535355435',
                                    name:'链接',
                                    component : 'Link',
                                    content : {
                                        html : '更多',
                                        href : '#',
                                        title:'',
                                        target:''
                                    },
                                    style : {},
                                    class: ''
                                },
                                products:{
                                    id:'Product-4453531141',
                                    name:'商品',
                                    component : 'Product',
                                    limit:5,
                                    content : {
                                        items : [
                                            {
                                                product_id : 1,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 2,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 3,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 1,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 1,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            }
                                        ]
                                    },
                                    style : {},
                                    class: ''
                                }
                            },
                            style: {
                                width: "",
                                height: "",
                            },
                            class: ""
                        },
                        {
                            id: "Module-5888145",
                            component: "Module",
                            name: "模块八",
                            content : {
                                title:{
                                    id:'Title-5835355',
                                    name:'标题',
                                    component : 'Title',
                                    content : {
                                        html : '满即送'
                                    },
                                    style : {},
                                    class: ''
                                },
                                more:{
                                    id:'Link-5835435',
                                    name:'链接',
                                    component : 'Link',
                                    content : {
                                        html : '更多',
                                        href : '#',
                                        title:'',
                                        target:''
                                    },
                                    style : {},
                                    class: ''
                                },
                                products:{
                                    id:'Product-4415454141',
                                    name:'商品',
                                    component : 'Product',
                                    limit:5,
                                    content : {
                                        items : [
                                            {
                                                product_id : 1,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 2,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 3,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 1,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            },
                                            {
                                                product_id : 1,
                                                product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                                store_id:'1',
                                                store_name : '惠药通品牌店',
                                                product_image : assetUrl + '/img/phone.jpeg',
                                                product_unit_price : 1799,
                                                product_market_price : 2000
                                            }
                                        ]
                                    },
                                    style : {},
                                    class: ''
                                }
                            },
                            style: {
                                width: "",
                                height: "",
                            },
                            class: ""
                        },
                    ]
                },
                style : {
                    width: "780px",
                    height: "180px",
                    display:"flex",
                    justifyContent:"space-between"
                },
                class: '',
            }
        },
        style: {
            width: "",
            height: ""
        },
        class: ""
    },
    {
        id: "Container",
        component: "Container",
        name: "容器",
        content: {
          items : [
              {
                  id: "Module-5486845",
                  component: "Module",
                  name: "模块一",
                  content : {
                      title:{
                          id:'Title-5835355',
                          name:'标题',
                          component : 'Title',
                          content : {
                              html : '满即送'
                          },
                          style : {},
                          class: ''
                      },
                      more:{
                          id:'Link-5835435',
                          name:'链接',
                          component : 'Link',
                          content : {
                              html : '更多',
                              href : '#',
                              title:'',
                              target:''
                          },
                          style : {},
                          class: ''
                      },
                      items : [
                          {
                              id:'Image-148042',
                              component : 'Image',
                              name:'图片',
                              content : {
                                  src:assetUrl + '/img/discount-01.png',
                                  href:'#',
                                  alt:'image',
                                  target : '',
                                  title: '',
                              },
                              style : {
                                  width: '180px',
                                  height: '245px',
                              },
                              class: ''
                          },
                          {
                              id:'Image-14353042',
                              component : 'Image',
                              name:'图片',
                              content : {
                                  src:assetUrl + '/img/discount-02.png',
                                  href:'#',
                                  alt:'image',
                                  target : '',
                                  title: '',
                              },
                              style : {
                                  width: '180px',
                                  height: '245px',
                              },
                              class: ''
                          },
                          {
                              id:'Image-14434353042',
                              component : 'Image',
                              name:'图片',
                              content : {
                                  src:assetUrl + '/img/discount-03.png',
                                  href:'#',
                                  alt:'image',
                                  target : '',
                                  title: '',
                              },
                              style : {
                                  width: '180px',
                                  height: '245px',
                              },
                              class: ''
                          }
                      ],
                  },
                  style: {
                      width: "595px",
                      height: "",
                  },
                  class: ""
              },
              {
                  id: "Module-23454145",
                  component: "Module",
                  name: "模块五",
                  content : {
                      title:{
                          id:'Title-5835355',
                          name:'标题',
                          component : 'Title',
                          content : {
                              html : '满即送'
                          },
                          style : {},
                          class: ''
                      },
                      more:{
                          id:'Link-5835435',
                          name:'链接',
                          component : 'Link',
                          content : {
                              html : '更多',
                              href : '#',
                              title:'',
                              target:''
                          },
                          style : {},
                          class: ''
                      },
                      products:{
                          id:'Product-441141',
                          name:'商品',
                          component : 'Product',
                          limit:8,
                          content : {
                              items : [
                                  {
                                      product_id : 1,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 2,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 3,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 1,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 1,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  }
                              ]
                          },
                          style : {},
                          class: ''
                      }
                  },
                  style: {
                      width: "",
                      height: "",
                  },
                  class: ""
              },
              {
                  id: "Module-07577557",
                  component: "Module",
                  name: "模块三",
                  content : {
                      products : {
                          name:'商品',
                          component : 'Product',
                          limit:5,
                          content : {
                              items : [
                                  {
                                      product_id : 1,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 2,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 3,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 1,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 2,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  }
                              ]
                          },
                          style : {},
                          class: ''
                      },
                      image : {
                          id : 'Image-095353',
                          name:'图片',
                          component:'Image',
                          content: {
                              src: assetUrl + '/img/timer_03.png',
                              href:'#',
                              target : '_blank',
                              title:'',
                              alt:'image'
                          },
                          style: {
                              width:'200px',
                              height:''
                          },
                          class: ''
                      }
                  },
                  style: {
                      width: "",
                      height: "",
                  },
                  class: ""
              },
              {
                  id: "Module-146645",
                  component: "Module",
                  name: "模块六",
                  content : {
                      title:{
                          id:'Title-5835355',
                          name:'标题',
                          component : 'Title',
                          content : {
                              html : '满即送'
                          },
                          style : {},
                          class: ''
                      },
                      more:{
                          id:'Link-5835435',
                          name:'链接',
                          component : 'Link',
                          content : {
                              html : '更多',
                              href : '#',
                              title:'',
                              target:''
                          },
                          style : {},
                          class: ''
                      },
                      products:{
                          id:'Product-441141',
                          name:'商品',
                          component : 'Product',
                          limit:3,
                          content : {
                              items : [
                                  {
                                      product_id : 1,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 2,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  },
                                  {
                                      product_id : 2,
                                      product_name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      product_tips:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                      store_id:'1',
                                      store_name : '惠药通品牌店',
                                      product_image : assetUrl + '/img/phone.jpeg',
                                      product_unit_price : 1799,
                                      product_market_price : 2000
                                  }
                              ]
                          },
                          style : {},
                          class: ''
                      }
                  },
                  style: {
                      width: "595px",
                      height: "",
                  },
                  class: ""
              },
              {
                  id:'Swiper-53535',
                  component:'Swiper',
                  name:'轮播图',
                  content:{
                      items : [
                          {
                              name: '图片',
                              id:'Image-242444',
                              component:'Image',
                              content: {
                                  src:'https://res0.vmallres.com/shopdc/pic/202176/1b435cf1-5371-438e-982a-f414f931e298.jpg',
                                  alt:'image',
                                  href:'#',
                                  target : '_blank',
                                  title:'image'
                              },
                              style: {
                                  width:'100%',
                                  height:'420px'
                              },
                              class: ''
                          },
                          {
                              name: '图片',
                              id:'Image-24244334',
                              component:'Image',
                              content: {
                                  src:'https://res6.vmallres.com/shopdc/pic/2021712/c8fba0dc-36ef-4ae9-b47e-ffa187786b61.jpg',
                                  alt:'image',
                                  href:'#',
                                  target : '_blank',
                                  title:'image'
                              },
                              style: {
                                  width:'100%',
                                  height:'420px'
                              },
                              class: ''
                          }
                      ]
                  },
                  style : {
                      width:'100%',
                      height:'420px'
                  },
                  class: '',
              }
          ]
        },
        style: {
            width: "1200px",
            height: "",
        },
        class: ""
    },
    {
        id: "Footer",
        component: "Footer",
        name: "底部",
        content: {
            items : [
                {
                    id: "Module-352435",
                    component: "Module",
                    name: "模块十",
                    content :{
                        items : [
                            {
                                id: "Div-3535",
                                component: "Div",
                                name: "Div",
                                content : {
                                    icon : {
                                        id:'Icon-24443',
                                        component:'Icon',
                                        name:'Icon',
                                        content: {
                                            src:'./img/tag_01.png',
                                            alt:'icon',
                                        },
                                        style: {
                                            width:'45px',
                                            height:'45px'
                                        },
                                        class: ''
                                    },
                                    title : {
                                        id:'Title-1834343353',
                                        name:'标题',
                                        component : 'Title',
                                        content : {
                                            html : '正品保障',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        id:'Text-1834343353',
                                        name:'文本',
                                        component : 'Text',
                                        content : {
                                            html : '国家认证 正规合法',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    }
                                },
                                style: {
                                    width: "",
                                    height: ""
                                },
                                class: ""
                            },
                            {
                                id: "Div-35433435",
                                component: "Div",
                                name: "Div",
                                content : {
                                    icon : {
                                        id:'Icon-2444443',
                                        component:'Icon',
                                        name:'Icon',
                                        content: {
                                            src:'./img/tag_02.png',
                                            alt:'icon',
                                        },
                                        style: {
                                            width:'45px',
                                            height:'45px'
                                        },
                                        class: ''
                                    },
                                    title : {
                                        id:'Title-1834343353',
                                        name:'标题',
                                        component : 'Title',
                                        content : {
                                            html : '专业药师',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        id:'Text-1834343353',
                                        name:'文本',
                                        component : 'Text',
                                        content : {
                                            html : '用户全程指导',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    }
                                },
                                style: {
                                    width: "",
                                    height: ""
                                },
                                class: ""
                            },
                            {
                                id: "Div-677435",
                                component: "Div",
                                name: "Div",
                                content : {
                                    icon : {
                                        id:'Icon-288743',
                                        component:'Icon',
                                        name:'Icon',
                                        content: {
                                            src:'./img/tag_03.png',
                                            alt:'icon',
                                        },
                                        style: {
                                            width:'45px',
                                            height:'45px'
                                        },
                                        class: ''
                                    },
                                    title : {
                                        id:'Title-8883353',
                                        name:'标题',
                                        component : 'Title',
                                        content : {
                                            html : '货到付款',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        id:'Text-18664653',
                                        name:'文本',
                                        component : 'Text',
                                        content : {
                                            html : '货到付款 狗药物有',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    }
                                },
                                style: {
                                    width: "",
                                    height: ""
                                },
                                class: ""
                            },
                            {
                                id: "Div-5555433435",
                                component: "Div",
                                name: "Div",
                                content : {
                                    icon : {
                                        id:'Icon-245546743',
                                        component:'Icon',
                                        name:'Icon',
                                        content: {
                                            src:'./img/tag_04.png',
                                            alt:'icon',
                                        },
                                        style: {
                                            width:'45px',
                                            height:'45px'
                                        },
                                        class: ''
                                    },
                                    title : {
                                        id:'Title-888553353',
                                        name:'标题',
                                        component : 'Title',
                                        content : {
                                            html : '厂家授权',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        id:'Text-18664653',
                                        name:'文本',
                                        component : 'Text',
                                        content : {
                                            html : '厂家授权 正品渠道',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    }
                                },
                                style: {
                                    width: "",
                                    height: ""
                                },
                                class: ""
                            },
                            {
                                id: "Div-55432443435",
                                component: "Div",
                                name: "Div",
                                content : {
                                    icon : {
                                        id:'Icon-2446743',
                                        component:'Icon',
                                        name:'Icon',
                                        content: {
                                            src:'./img/tag_05.png',
                                            alt:'icon',
                                        },
                                        style: {
                                            width:'45px',
                                            height:'45px'
                                        },
                                        class: ''
                                    },
                                    title : {
                                        id:'Title-8883353',
                                        name:'标题',
                                        component : 'Title',
                                        content : {
                                            html : '隐私配送',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        id:'Text-18664653',
                                        name:'文本',
                                        component : 'Text',
                                        content : {
                                            html : '安全放行 隐私配色',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    }
                                },
                                style: {
                                    width: "",
                                    height: ""
                                },
                                class: ""
                            },
                            {
                                id: "Div-5543442443435",
                                component: "Div",
                                name: "Div",
                                content : {
                                    icon : {
                                        id:'Icon-244446743',
                                        component:'Icon',
                                        name:'Icon',
                                        content: {
                                            src:'./img/tag_06.png',
                                            alt:'icon',
                                        },
                                        style: {
                                            width:'45px',
                                            height:'45px'
                                        },
                                        class: ''
                                    },
                                    title : {
                                        id:'Title-888344353',
                                        name:'标题',
                                        component : 'Title',
                                        content : {
                                            html : '满79包邮',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        id:'Text-18664653',
                                        name:'文本',
                                        component : 'Text',
                                        content : {
                                            html : '全场满79包邮',
                                        },
                                        style : {
                                            fontSize:'',
                                            color:'',
                                            background:'',
                                            lineHeight:'',
                                        },
                                        class: ''
                                    }
                                },
                                style: {
                                    width: "",
                                    height: ""
                                },
                                class: ""
                            }
                        ]
                    },
                    style: {
                        width: "",
                        height: ""
                    },
                    class: ""
                }
            ]
        },
        style: {
            width: "",
            height: ""
        },
        class: ""
    }
];

let style = {
    width:'',
    height : '',
    color:'',
    background:'',
    fontSize:'',
    fontStyle:'',
    lineHeight:'',
    textAlign:'',
    display:'',
    position:'',
    top:'',
    left:'',
    bottom:'',
    right:'',
    margin:'',
    marginTop:'',
    marginLeft:'',
    marginRight:'',
    marginBottom:'',
    padding:'',
    paddingTop:'',
    paddingLeft:'',
    paddingBottom:'',
    paddingRight:'',
    borderColor:'',
    borderStyle:'',
    borderWidth:'',
    borderTopWidth:'',
    borderLeftWidth:'',
    borderRightWidth:'',
    borderBottomWidth:'',
    flexDirection:'',
    flexWrap:'',
    flexFlow:'',
    justifyContent:'',
    alignItems: '',
};
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
            name:'布局五',
            content : {
                items: []
            },
            style : {},
            class: ''
        }
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
                src:'https://res5.vmallres.com/shopdc/pic/202178/2abcc55a-9bea-4b0b-9ed3-10d045363e76.png',
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
            id:'banner-0001',
            component:'Banner',
            name:'广告图',
            content:{
                items : [
                    {
                        id:'Image-0005',
                        component:'Image',
                        content: {
                            src:'https://res0.vmallres.com/shopdc/pic/202176/1b435cf1-5371-438e-982a-f414f931e298.jpg',
                            alt:'image',
                            href:'#',
                            target : '_blank',
                            title:'image'
                        },
                        style: {
                            width:'766px',
                            height:'420px'
                        },
                        class: ''
                    },
                    {
                        id:'Image-0006',
                        component:'Image',
                        content: {
                            src:'https://res6.vmallres.com/shopdc/pic/2021712/c8fba0dc-36ef-4ae9-b47e-ffa187786b61.jpg',
                            alt:'image',
                            href:'#',
                            target : '_blank',
                            title:'image'
                        },
                        style: {
                            width:'766px',
                            height:'420px'
                        },
                        class: ''
                    },
                    {
                        id:'Image-0007',
                        component:'Image',
                        content: {
                            src:'https://res3.vmallres.com/shopdc/pic/2021618/f7e63b88-3ba3-4112-8f4f-c1e25b0a1631.png',
                            alt:'image',
                            href:'#',
                            target : '_blank',
                            title:'image'
                        },
                        style: {
                            width:'766px',
                            height:'420px'
                        },
                        class: ''
                    },
                ]
            },
            style : {},
            class: '',
        },
    ],
};

let sections = {
    productSection : [
        {
            component : 'Section',
            name:'商品模块一',
            content : {
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
                        html : '限时折扣 低价抢购',
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
                                id : 1,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 2,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 3,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            }
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style : {
                width:'595px',
            },
            class: ''
        },
        {
            component : 'Section',
            name:'商品模块二',
            content : {
                products : {
                    name:'商品',
                    component : 'Product',
                    limit:15,
                    content : {
                        items : [
                            {
                                id : 1,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 2,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 3,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 4,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 5,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 6,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 7,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 8,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 9,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 10,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 11,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 12,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 13,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 14,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 15,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
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
        {
            component : 'Section',
            name:'商品模块三',
            content : {
                products : {
                    name:'商品',
                    component : 'Product',
                    limit:8,
                    content : {
                        items : [
                            {
                                id : 1,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 2,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 3,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 4,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 5,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 6,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 7,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 8,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
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
                        src: assetUrl + '/img/discount.png',
                        alt:'image',
                        href:'#',
                        target : '_blank',
                        title:'title',
                    },
                    style: {
                        width:'',
                        height:''
                    },
                    class: ''
                }
            },
            style : {},
            class: ''
        },
        {
            component : 'Section',
            name:'商品模块四',
            content : {
                products : {
                    name:'商品',
                    component : 'Product',
                    limit:8,
                    content : {
                        items : [
                            {
                                id : 1,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 2,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 3,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 4,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 5,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 6,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 7,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
                            },
                            {
                                id : 8,
                                name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                picture : assetUrl + '/img/phone.jpeg',
                                sale_price : 1799
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
                        src: assetUrl + '/img/image-10.png',
                        href:'#',
                        target : '_blank',
                        title:'',
                        alt:'image'
                    },
                    style: {
                        width:'',
                        height:''
                    },
                    class: ''
                }
            },
            style : {},
            class: ''
        },
        {
            component : 'Section',
            name:'商品模块五',
            content : {
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
                        html : '限时折扣 低价抢购',
                        href : '#',
                        title:'',
                        target : '_blank'
                    },
                    style : {},
                    class: ''
                },
                group:{
                    name:'分组',
                    component : 'Group',
                    content : {
                        items : [
                            {
                                name:'商品',
                                component : 'Product',
                                limit:6,
                                content : {
                                    items : [
                                        {
                                            id : 1,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 2,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 3,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 4,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 5,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 6,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
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
                                            id : 1,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 2,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 3,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 4,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 5,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 6,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            }
                        ]
                    },
                    style : {
                    },
                    class: ''
                },

            },
            style : {
                width: '595px',
            },
            class: ''
        },
        {
            component : 'Section',
            name:'商品模块六',
            content : {
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
                        html : '限时折扣 低价抢购',
                        href : '#',
                        title:'',
                        target : '_blank'
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
                                limit:5,
                                content : {
                                    items : [
                                        {
                                            id : 1,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 2,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 3,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 4,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 5,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'商品',
                                component : 'Product',
                                limit:5,
                                content : {
                                    items : [
                                        {
                                            id : 1,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 2,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 3,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 4,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 5,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
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
            style : {},
            class: 'module-style-10'
        },
        {
            component : 'Section',
            name:'商品模块七',
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
                                        class: ''
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
                                        class: ''
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
                                        class: ''
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
                                        class: ''
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
                                        class: ''
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
                                        class: ''
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
                                            id : 1,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 2,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 3,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 4,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 5,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        }
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
                                            id : 1,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 2,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 3,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 4,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 5,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        }
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
                                            id : 1,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 2,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 3,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 4,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
                                        },
                                        {
                                            id : 5,
                                            name:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            desc:'小米天玑1100液冷游戏芯 67W快充 120Hz旗舰变速金刚屏',
                                            picture : assetUrl + '/img/phone.jpeg',
                                            sale_price : 1799
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
            style : {},
            class: 'module-style-11'
        },
    ],
    adSection:[
        {
            component : 'Section',
            name:'广告模块一',
            content : {
                items:[
                    {
                        component : 'Image',
                        name:'图片',
                        content : {
                            src:assetUrl + '/img/ad-01.png',
                            href:'#',
                            alt:'image',
                            target : '',
                            title: '',
                        },
                        style : {
                            width: '',
                            height: '',
                        },
                        class: ''
                    },
                ]
            },
            style : {},
            class: ''
        },
        {
            component : 'Section',
            name:'广告模块二',
            content : {
                items:[
                    {
                        component : 'Image',
                        name:'图片',
                        content : {
                            src: assetUrl + '/img/image-02.png',
                            href:'#',
                            alt:'image',
                            target : '',
                            title: '',
                        },
                        style : {
                            width: '',
                            height: '',
                        },
                        class: ''
                    },
                    {
                        component : 'Image',
                        name:'图片',
                        content : {
                            src:assetUrl + '/img/image-03.png',
                            href:'#',
                            alt:'image',
                            target : '',
                            title: '',
                        },
                        style : {
                            width: '',
                            height: '',
                        },
                        class: ''
                    },
                ]
            },
            style : {},
            class: ''
        },
        {
            component : 'Section',
            name:'广告模块四',
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '热销品类'
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
                                    html : '分类'
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
                                    html : '分类'
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
                                    html : '分类'
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
                                name:'Div',
                                component : 'Div',
                                content : {
                                    items : [
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-04.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '260px',
                                                        height: '260px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
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
                                                    class: ''
                                                }
                                            },
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-05.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'Div',
                                component : 'Div',
                                content : {
                                    items : [
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-04.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '260px',
                                                        height: '260px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
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
                                                    class: ''
                                                }
                                            },
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-05.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'Div',
                                component : 'Div',
                                content : {
                                    items : [
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-04.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '260px',
                                                        height: '260px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
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
                                                    class: ''
                                                }
                                            },
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-05.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        alt:'image',
                                                        href:'#',
                                                        title:'',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        },
                                        {
                                            name:'图文',
                                            component : 'GC',
                                            content : {
                                                image : {
                                                    name:'图片',
                                                    component:'Image',
                                                    content: {
                                                        src:assetUrl + '/img/image-06.png',
                                                        href:'#',
                                                        title:'',
                                                        alt:'image',
                                                        target:''
                                                    },
                                                    style : {
                                                        width: '103px',
                                                        height: '103px',
                                                    },
                                                    class: ''
                                                },
                                                text : {
                                                    component : 'Text',
                                                    name:'文本',
                                                    content : {
                                                        html : '文本'
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
                                        }
                                    ]
                                },
                                style : {},
                                class: ''
                            },
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style : {},
            class: 'module-style-8'
        },
        {
            component : 'Section',
            name:'广告模块五',
            content : {
                ad : {
                    component : 'div',
                    name:'图文',
                    content : {
                        image : {
                            name:'图片',
                            component:'Image',
                            content: {
                                src:assetUrl + '/img/ad_03.png',
                                alt:'image',
                                href:'#',
                                title:'',
                                target:''
                            },
                            style : {
                                width: '190px',
                                height: '275px',
                            },
                            class: ''
                        },
                        text : {
                            component : 'Text',
                            name:'文本',
                            content : {
                                html : '文本'
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
                    style : {
                        width: '',
                        height: '',
                    },
                    class: ''
                },
                ads : {
                    component : 'div',
                    name:'广告',
                    content : {
                        items : [
                            {
                                component : 'div',
                                name:'图文',
                                content : {
                                    image : {
                                        name:'图片',
                                        component:'Image',
                                        content: {
                                            src:assetUrl + '/img/image-05.png',
                                            alt:'image',
                                            href:'#',
                                            title:'',
                                            target:''
                                        },
                                        style : {
                                            width: '95px',
                                            height: '95px',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        component : 'Text',
                                        name:'文本',
                                        content : {
                                            html : '文本'
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
                                style : {
                                    width: '',
                                    height: '',
                                },
                                class: ''
                            },
                            {
                                component : 'div',
                                name:'图文',
                                content : {
                                    image : {
                                        name:'图片',
                                        component:'Image',
                                        content: {
                                            src:assetUrl + '/img/image-05.png',
                                            alt:'image',
                                            href:'#',
                                            title:'',
                                            target:''
                                        },
                                        style : {
                                            width: '95px',
                                            height: '95px',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        component : 'Text',
                                        name:'文本',
                                        content : {
                                            html : '文本'
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
                                style : {
                                    width: '',
                                    height: '',
                                },
                                class: ''
                            },
                            {
                                component : 'div',
                                name:'图文',
                                content : {
                                    image : {
                                        name:'图片',
                                        component:'Image',
                                        content: {
                                            src:assetUrl + '/img/image-05.png',
                                            alt:'image',
                                            href:'#',
                                            title:'',
                                            target:''
                                        },
                                        style : {
                                            width: '95px',
                                            height: '95px',
                                        },
                                        class: ''
                                    },
                                    text : {
                                        component : 'Text',
                                        name:'文本',
                                        content : {
                                            html : '文本'
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
                                style : {
                                    width: '',
                                    height: '',
                                },
                                class: ''
                            }
                        ]
                    },
                    style : {
                        width: '',
                        height: '',
                    },
                    class: ''
                },
                cate : {
                    component : 'div',
                    name:'图文',
                    content : {
                        items : [
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            },
                            {
                                name:'链接',
                                component : 'Link',
                                content : {
                                    html : '11111',
                                    href : '#',
                                    title:'',
                                    target:''
                                },
                                style : {},
                                class: ''
                            }
                        ]
                    },
                    style : {
                        width: '',
                        height: '',
                    },
                    class: ''
                }
            },
            style : {},
            class: ''
        },
        {
            component : 'Section',
            name:'广告模块六',
            content : {
                title:{
                    name:'标题',
                    component : 'Title',
                    content : {
                        html : '热销品类'
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
                stores:{
                    name:'店铺',
                    component : 'Store',
                    limit:12,
                    content : {
                        items : [
                            {
                                id:1,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:2,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:3,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:4,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:5,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:6,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:7,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:8,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:9,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:10,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:11,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            },
                            {
                                id:12,
                                name:'讯由官方旗舰店',
                                logo:assetUrl + '/img/image-04.png',
                                cate:['电子商务','运营服务']
                            }
                        ]
                    },
                    style : {},
                    class: ''
                }
            },
            style : {},
            class: 'module-style-13'
        }
    ]
};

let pageData  = [
    {
        "id": "Header",
        "component": "Header",
        "name": "头部",
        "content": {
            "logo" : {
                "id": "Image-290520",
                "name":"图片",
                "component": "Image",
                "content": {
                    "src": "http://w.xunyoutest.com:82/storage/upload/20210719/7owkQmh-AoCK3ujK8UplCibLLLoxgwmCfzojkGwl.jpg",
                    "alt": "image",
                    "href": "#",
                    "target": "_blank",
                    "title": "image"
                },
                "style": {
                    "width": "130px",
                    "height": "46px"
                },
                "class": ""
            },
            "menu":{
                "id":"Menu",
                "component":"Menu",
                "name":"菜单",
                "content":{
                    "items":[]
                },
                "style":{},
                "class":{}
            },
            "search":{
                "id":"Search",
                "component":"Search",
                "name":"搜索",
                "content":{
                    "items":[
                        {
                            "id" : "Text-01",
                            "component" : "Text",
                            "name":'文本',
                            "content" : {
                                "html" : '热搜一'
                            },
                            "style" : {
                                "fontSize":"",
                                "color":"",
                                "background":"",
                                "lineHeight":"",
                            },
                            "class": ""
                        },
                        {
                            "id" : "Text-02",
                            "component" : 'Text',
                            "name":'文本',
                            "content" : {
                                "html" : '热搜二'
                            },
                            "style" : {
                                "fontSize":"",
                                "color":"",
                                "background":"",
                                "lineHeight":"",
                            },
                            "class": ""
                        },
                        {
                            "id" : "Text-03",
                            "component" : 'Text',
                            "name":'文本',
                            "content" : {
                                "html" : '热搜三'
                            },
                            "style" : {
                                "fontSize":"",
                                "color":"",
                                "background":"",
                                "lineHeight":"",
                            },
                            "class": ""
                        },
                        {
                            "id" : "Text-04",
                            "component" : 'Text',
                            "name":'文本',
                            "content" : {
                                "html" : '热搜四'
                            },
                            "style" : {
                                "fontSize":"",
                                "color":"",
                                "background":"",
                                "lineHeight":"",
                            },
                            "class": ""
                        },
                        {
                            "id" : "Text-05",
                            "component" : 'Text',
                            "name":'文本',
                            "content" : {
                                "html" : '热搜五'
                            },
                            "style" : {
                                "fontSize":"",
                                "color":"",
                                "background":"",
                                "lineHeight":"",
                            },
                            "class": ""
                        }
                    ]
                },
                "style":{},
                "class":{}
            }
        },
        "style": [],
        "class": ""
    },
    {
        "id": "Banner-71421",
        "component": "Banner",
        "name": "广告图",
        "content": {
            "items": [{
                "id": "Image-157208",
                "component": "Image",
                "content": {
                    "src": "https://res0.vmallres.com/shopdc/pic/202176/1b435cf1-5371-438e-982a-f414f931e298.jpg",
                    "alt": "image",
                    "href": "#",
                    "target": "_blank",
                    "title": "image"
                },
                "style": {
                    "width": "100%",
                    "height": "600px"
                },
                "class": ""
            }, {
                "id": "Image-290570",
                "component": "Image",
                "content": {
                    "src": "https://res6.vmallres.com/shopdc/pic/2021712/c8fba0dc-36ef-4ae9-b47e-ffa187786b61.jpg",
                    "alt": "image",
                    "href": "#",
                    "target": "_blank",
                    "title": "image"
                },
                "style": {
                    "width": "100%",
                    "height": "600px"
                },
                "class": ""
            }, {
                "id": "Image-897047",
                "component": "Image",
                "content": {
                    "src": "https://res3.vmallres.com/shopdc/pic/2021618/f7e63b88-3ba3-4112-8f4f-c1e25b0a1631.png",
                    "alt": "image",
                    "href": "#",
                    "target": "_blank",
                    "title": "image"
                },
                "style": {
                    "width": "100%",
                    "height": "600px"
                },
                "class": ""
            }]
        },
        "style": [],
        "class": ""
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
    borderBottomWidth:''
};
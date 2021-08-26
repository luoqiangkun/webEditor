
Vue.component("tree-item", {
    template: "#item-template",
    props: {
        item: Object,
        isChild:false,
        cateIndex : -1,
        toolbar:Object
    },
    computed: {

    },
    methods: {
        setStyle(styles,callback){
            let style = {};
            let t = this.$emit("set-style", styles, val => {
                style = val;
            });
            if( callback ){
               return callback(style);
            } else {
                return style;
            }
        },
        setProperties(data){
            this.$emit("set-properties", data);
        },
        showToolBar(item,event){
            this.$emit("show-toolbar", item,event);
        },
        hideToolBar(item,event){
            this.$emit("hide-toolbar", item,event);
        },
        showAbove(event){
            this.$emit("show-above",event);
        },
        removeElement( id ){
            this.$emit("remove-element",id);
        },
        showResize(event){
            this.$emit("show-resize",event);
        },
        setLyrowStyle(component) {

        },
        addSlide(id){
            this.$emit("add-slide",id);
        },
        delSlide(pid,id){
            this.$emit("del-slide",pid,id);
        },
        addItem(item){
            this.$emit("add-item",item);
        },
        ifAdd(item){
            let array = ['Banner','Swiper','Navigation','TextList'];
            let names = ['模块十'];
            return $.inArray(item.component,array) > -1 || $.inArray(item.name,names) > -1  ? true : false;
        },
        ifResize(item){
            let array = ['Image','Flex','Col','Row','Module'];
            return $.inArray(item.component,array) > -1 ? true : false;
        },
        ifRemove(){
            let array = ['Container','Footer','Flex','Col','Banner','Swiper','Shortcut','Navigation'];
            return $.inArray(this.item.component,array) > -1 ? true : false;
        },
    }
});
Vue.component("tool-bar", {
    template: "#toolbar-template",
    props: {
        toolBar: Object
    },
    computed: {

    },
    methods: {
        showToolBar(item,event){
            this.$emit("show-toolbar", item,event);
        },
        hideToolBar(item,event){
            this.$emit("hide-toolbar", item,event);
        },
        setProperties(data){
            this.$emit("set-properties", data);
        },
        showAbove(event){
            this.$emit("show-above",event);
        },
        removeElement( id ){
            this.$emit("remove-element",id);
        },
        showResize(event){
            this.$emit("show-resize",event);
        },
        addItem(item){
            this.$emit("add-item",item);
        }
    }
});

let app = new Vue({
    el: '#app',
    data : {
        env:'dev',//模式
        pageData:pageData,//页面数据
        history:[],//历史记录,
        historyStep:-1,
        modify: 1,// 1：添加或者删除 2：前进或者后退
        tabIndex:-1,
        components:components,
        sections:sections,
        swipers:{},//轮播图
        editors:{},//编辑器
        resizes:{},//
        pickrs:{},//color picker
        style:style,//样式,
        properties:{
            component:'',
            content:{},
            style:JSON.parse(JSON.stringify(style))
        },//属性
        navs:[],//导航
        categorys:[],//分类
        cateIndex : -1,
        isChild:false
    },
    methods: {
        //切换模式 编辑或者预览
        changeEnv( env ){
            this.env = env;
        },
        //添加历史记录
        addHistory(){
            this.history.push(JSON.parse(JSON.stringify(this.pageData)));
            this.historyStep++;
        },
        //上一步
        prevStep(){
            if(this.historyStep == 0){
                return false;
            }
            this.pageData = this.history[--this.historyStep];
            console.log( this.history )
            console.log( this.pageData )
        },
        //下一步
        nextStep(){
            if(this.historyStep == this.history.length){
                return false;
            }
            this.pageData = this.history[this.historyStep++];
        },
        //获取随机数
        randomNumber() {
            return this.randomFromInterval(1, 1e6);
        },
        //获取随机数
        randomFromInterval(e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        },
        //修改组件ID
        handleComponent( component ){
            if( Object.prototype.toString.call(component) === '[object Object]') {
                if( component.component ){
                    component.id = component.component + '-' + this.randomNumber();
                    if(component.content){
                        for( let i in component.content ){
                            this.handleComponent(component.content[i]);
                        }
                    }
                }
            } else if( Object.prototype.toString.call(component) === '[object Array]'){
                for( let i in component ){
                    this.handleComponent( component[i] );
                }
            }
            return component;
        },
        //初始化Drag
        initDraggable(){
            $( ".drawer" ).draggable({ containment: ".main",cancel: ".card"});
        },
        //初始化拉伸
        initResizable(){
            $( ".drawer" ).resizable();
        },
        setResizable(component){
            this.resizes[component.id] = $('#' + component.id).resizable({
                containment:'.main',
                stop: ( event, ui ) => {
                    component.style = {
                        width : ui.size.width + 'px',
                        height : ui.size.height + 'px'
                    }
                },
            });
        },
        //初始化拖拽
        initSortable(){
            let blockArray = ['Container','Footer'];
            blockArray.forEach( (value,index) => {
                let element = document.getElementById(value);
                new Sortable(element, {
                    group: {
                        name: 'demoShared',
                        pull: false,
                        put: ['gridShared','baseShared','sectionShared'] // Do not allow items to be put into this list
                    },
                    handle: '.handle', // handle's class
                    filter: ".filter",
                    onUpdate:  (evt) => {
                        let newElement = element.children[evt.newIndex],
                            oldElement = element.children[evt.oldIndex];
                        // 先删除移动的节点
                        element.removeChild(newElement);
                        // 再插入移动的节点到原有节点，还原了移动的操作
                        if(evt.newIndex > evt.oldIndex) {
                            element.insertBefore(newElement,oldElement);
                        } else {
                            element.insertBefore(newElement,oldElement.nextSibling);
                        }
                        // 更新items数组
                        let data = this.getComponentData(value);
                        data.content.items.splice(evt.newIndex,0,data.content.items.splice(evt.oldIndex,1)[0]);
                        this.addHistory();
                        this.$nextTick(() => {
                            this.initScript(this.pageData);
                        })
                    },
                    animation: 150
                });
            });
            let layoutArray = ['containerLayout','footerLayout']
            layoutArray.forEach( (value,index) => {
                let element = document.getElementById(value);
                new Sortable(element, {
                    group: {
                        name: 'layoutShared',
                        pull: false,
                        put: false
                    },
                    filter: ".filter",
                    onUpdate:  (evt) => {
                        let newElement = element.children[evt.newIndex],
                            oldElement = element.children[evt.oldIndex];
                        // 先删除移动的节点
                        element.removeChild(newElement);
                        // 再插入移动的节点到原有节点，还原了移动的操作
                        if(evt.newIndex > evt.oldIndex) {
                            element.insertBefore(newElement,oldElement);
                        } else {
                            element.insertBefore(newElement,oldElement.nextSibling);
                        }
                        // 更新items数组
                        let data;
                        if( value == 'containerLayout' ){
                            data = this.getComponentData('Container');
                        } else {
                            data = this.getComponentData('Footer');
                        }
                        data.content.items.splice(evt.newIndex,0,data.content.items.splice(evt.oldIndex,1)[0]);
                        this.addHistory();
                        this.$nextTick(() => {
                            this.initScript(this.pageData);
                        })
                    },
                    animation: 150
                });
            });

            this.setSortAble(this.$refs.gridComponent,'gridShared','gridComponent','components');
            this.setSortAble(this.$refs.baseComponent,'baseShared','baseComponent','components');
            this.setSortAble(document.getElementById('containerShared'),'sectionShared','container','sections');
            this.setSortAble(document.getElementById('screenShared'),'sectionShared','screen','sections');
            this.setSortAble(document.getElementById('footerShared'),'sectionShared','footer','sections');

        },
        setSortAble(el,name,group,type){
            new Sortable(el, {
                group: {
                    name: name,
                    pull: 'clone',
                    put: false
                },
                animation: 150,
                sort: false,
                onStart: function (evt) {},
                onEnd:  (evt) => {
                    if( evt.target == evt.to ){
                        return;
                    }
                    let component;
                    if( type == 'components' ){
                        component = JSON.parse(JSON.stringify(this.components[group][evt.oldIndex]));
                    } else if( type == 'sections' ) {
                        component = JSON.parse(JSON.stringify(this.sections[group][evt.oldIndex]));
                    } else {
                        return false;
                    }
                    component = this.handleComponent(component);
                    evt.item.remove();
                    this.addChildData(this.pageData,evt.to.getAttribute('id'),evt.newIndex,component,'items');
                    this.addHistory();
                    this.$nextTick(() => {
                        this.setScript(component);
                        $('#' + component.id).find('.placeholder-empty').parents('.lyrow').first().css('width','100%');
                    })
                },
            });
        },
        //初始化上传
        initUploader(){
            let $this = this;
            $('.drawer').on('click','.upload-image',function () {
                $("#uploader").click();
            })
            $('#uploader').fileupload({
                dataType: 'json',
                url : baseUrl + 'upload/image-upload',//请求发送的目标地址
                done:  (e, data) => {
                    let file = data.result.files[0];
                    this.properties.content.src = file.url;
                }
            });
        },
        //初始化脚本
        initScript(items){
            for( let i in items ){
                this.setScript(items[i]);
            }
        },
        //设置脚本
        setScript(component){
            if( Object.prototype.toString.call(component) === '[object Object]'){
                if(!component.component) return false;
                if( component.component == 'Module' ){
                    this.setResizable(component);
                }
                if( component.component == 'Swiper' || component.component == 'Banner' ){
                    this.setSwiper(component.id);
                }else if(component.component == 'Title' || component.component == 'Text' || component.component == 'Link'){
                    if(this.editors[component.id] && Object.prototype.toString.call(this.editors[component.id]) === '[object Object]'){
                        this.editors[component.id].destroy();
                    }
                    this.setEditor(component.id);
                }else if(component.component == 'Flex' || component.component == 'Col'){
                    new Sortable(document.getElementById(component.id), {
                        group: {
                            name: 'flexShared',
                            pull: 'clone',
                            put: ['baseShared','sectionShared','gridShared']
                        },
                        animation: 150,
                        onEnd:  (evt) => {
                            let sortable = document.getElementById(component.id),
                                newElement = sortable.children[evt.newIndex],
                                oldElement = sortable.children[evt.oldIndex];
                            // 先删除移动的节点
                            sortable.removeChild(newElement)
                            // 再插入移动的节点到原有节点，还原了移动的操作
                            if(evt.newIndex > evt.oldIndex) {
                                sortable.insertBefore(newElement,oldElement)
                            } else {
                                sortable.insertBefore(newElement,oldElement.nextSibling)
                            }
                            let data = this.getComponent(this.pageData,component.id);
                            data.content.items.splice(evt.newIndex,0,data.content.items.splice(evt.oldIndex,1)[0]);
                        }
                    });
                }else if(component.component == 'Image'  ){
                    $( "#" + component.id ).on("load",() => { //核心
                        this.setResizable(component);
                    });
                }else if(component.name == '模块五'){
                    this.swipers[component.content.products.id] = new Swiper('#' + component.content.products.id, {
                        slidesPerView: 4,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });
                }else if(component.name == '模块七'){
                    this.swipers[component.content.products.id] = new Swiper('#' + component.content.products.id, {
                        pagination: {
                            el: '.swiper-pagination',
                            clickable : true
                        },
                    });
                }else if(component.name == '模块八'){
                    this.swipers[component.content.products.id] = new Swiper('#' + component.content.products.id, {
                        slidesPerView: 2,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });
                }
                if( component.content ){
                    for( let i in component.content ){
                        this.setScript(component.content[i]);
                    }
                }
            } else if( Object.prototype.toString.call(component) === '[object Array]'){
                for( let i in component ){
                    this.setScript( component[i] );
                }
            }
        },
        loadImage(component){
            console.log( document.getElementById(component.id).clientHeight);
            component.style.height = document.getElementById(component.id).clientHeight + 'px';
        },
        //初始化编辑器
        initEditor(){
            var editor = new FroalaEditor('.container .froala-editor', {
                toolbarInline: true,
                charCounterCount: false,
                toolbarVisibleWithoutSelection: true,
                toolbarButtons: [['bold', 'italic', 'underline', 'alignLeft', 'alignCenter', 'alignRight','insertLink'], ['fontFamily', 'fontSize', 'textColor', 'backgroundColor','clearFormatting']]
            })
        },
        //设置编辑器
        setEditor(id){
            this.editors[id] = new FroalaEditor('#' + id, {
                toolbarInline: true,
                charCounterCount: false,
                toolbarVisibleWithoutSelection: true,
                toolbarButtons: [['bold', 'italic', 'underline', 'alignLeft', 'alignCenter', 'alignRight',], ['fontFamily', 'fontSize', 'textColor', 'backgroundColor','clearFormatting']]
            })
        },
        setEditorHtml(id){
            // let component = this.getComponent(this.pageData,id);
            // component.content.html = this.editors[component.id].getData();
            // this.addHistory();
        },
        initSwiper(){

        },
        //设置轮播图
        setSwiper( id ){
            this.swipers[id] = new Swiper('#' + id , {
                loop : true,
                noSwiping:true,
                onlyExternal:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable : true
                },
                on: {
                    resize: function(){
                        this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
                    },
                },
            });
        },
        //添加轮播图
        addSlide(id){
            let component = this.getComponent(this.pageData,id);
            if( component ){
                let imageId = "image-" + this.randomNumber();
                let imageComponent = {
                    id: imageId,
                    component : 'Image',
                    name:'图片',
                    content : {
                        src:'https://res5.vmallres.com/shopdc/pic/202178/2abcc55a-9bea-4b0b-9ed3-10d045363e76.png',
                        href:'#',
                        alt:'image'
                    },
                    style : {
                        width:'100%',
                        height:''
                    },
                    class: ''
                };
                component.content.items.push(imageComponent);
                this.setProperties( imageComponent );
                this.$nextTick(() => {
                    this.swipers[id].update()
                })
            }
            this.addHistory();
        },
        //删除轮播图
        delSlide(swiperId,slideId){
            this.removeElement(slideId);
            this.$nextTick(() => {
                this.swipers[swiperId].update()
            })
        },
        initPicker(){
            this.setPickr('fontColor','font-color');
            this.setPickr('backgroundColor','background-color');
        },
        //设置颜色选择器
        setPickr(el,appClass){
            this.pickrs[el] = new Pickr({
                el: '.' + el,
                theme: 'monolith',
                inline: true,
                appClass: appClass ? appClass : 'custom-class',
                autoReposition: true,
                components: {
                    palette: true,
                    preview: true, // Display comparison between previous state and new color
                    opacity: true, // Display opacity slider
                    hue: true,     // Display hue slider
                    interaction: {
                        hex: false,
                        rgba: false,
                        hsva: false,
                        input: true,
                        clear: true,
                        save: true
                    },
                },
                i18n: {
                    'btn:save': '保存',
                    'btn:cancel': '取消',
                    'btn:clear': '清除'
                }
            });
            this.pickrs[el].on('save', (color, instance) => {
                if( el == 'fontColor' ){
                    this.properties.style.color = color.toHEXA().toString();
                }
                if( el == 'backgroundColor' ){
                    this.properties.style.background = color.toHEXA().toString();
                }
                instance.hide(); // Hide modal
            });

        },
        //设置样式
        setStyle(styles,callback){
            let style = {};
            for( let i in styles){
                if( styles[i] != ''){
                    style[i] = styles[i];
                    //style += i.replace(/([A-Z])/g,"-$1").toLowerCase() + ':' + styles[i] + ';';
                }
            }
            callback(style);
        },
        //设置属性
        setProperties( data ){
            this.$set(data,'style',Object.assign(JSON.parse(JSON.stringify(this.style)), data.style));
            this.properties = data;
            this.tabIndex = 2;

        },
        initEvent(){
            $(document).on('blur','.container .froala-editor div[contenteditable="true"]', (event) => {
                let id = $(event.target).parents('.froala-editor').attr('id');
                let component = this.getComponent(this.pageData,id);
                delete component.content.html;
                //let html = this.editors[component.id].html.get(true);
                let html = $(event.target).parents('.froala-editor').find('.fr-element').html();
                component.content.html = html;
                //this.addHistory();
            });

            $(document).on('click','.container', (event) => {
                if($(event.target).hasClass('ui-wrapper') || $(event.target).parents('.ui-wrapper').length){
                    return false;
                }
                $('.container .ui-wrapper').removeClass('active');
            });
            $(document).on('click','.container .ui-wrapper', (event) => {
                $('.container .ui-wrapper').removeClass('active');
                if( $(event.target).hasClass('ui-wrapper') ){
                    $(event.target).addClass('active')
                } else if( $(event.target).parents('.ui-wrapper').length ){
                    $(event.target).parents('.ui-wrapper').first().addClass('active');
                }
            });

            $(document).on('click','.nav-item', (event,index) => {
                let i = $(event.currentTarget).index();
                $(event.currentTarget).addClass('active').siblings().removeClass('active');
                $(event.currentTarget).parents('.module').first().find('.tab-content').children('.tab-item').eq(i).addClass('active').siblings().removeClass('active');
            });


            $('.category .category-nav-item').hover(function () {
                let i = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $('.category').find('.category-tab').show();
                $('.category').find('.category-tab').children('.category-tab-panel').eq(i).show().siblings().hide();
            },function () {
                $('.category').find('.category-tab').hide();
            })

            $('.category .category-tab').hover(function () {
                $(this).show();
            },function () {
                $(this).hide();
            })


        },
        getComponent(items,id){
            let component = {};
            for( let i in items ){
                if( Object.prototype.toString.call(items[i]) === '[object Array]' ){
                    component = this.getComponent(items[i],id);
                } else if( Object.prototype.toString.call(items[i]) === '[object Object]' ){
                    if( items[i].component && items[i].id == id  ){
                        component = items[i];
                        break;
                    }
                }
                if( !component.id && items[i].content ){
                    component = this.getComponent(items[i].content,id);
                }
            }
            return component;
        },
        getComponentData(component){
            for( let i in this.pageData ){
                if( this.pageData[i].component == component ){
                    return this.pageData[i];
                }
            }
        },
        addChildData(items,pid,index,component,prop){
            for( let i in items ){
                if( Object.prototype.toString.call(items[i]) === '[object Array]' ){
                    this.addChildData(items[i],pid,index,component,prop);
                } else if( Object.prototype.toString.call(items[i]) === '[object Object]' ){
                    if( items[i].component && items[i].id == pid && items[i].content[prop] && Object.prototype.toString.call(items[i].content[prop]) === '[object Array]' ){
                        items[i].content[prop].splice(index, 0, component);
                        return;
                    }
                }
                if( items[i].content ){
                    this.addChildData(items[i].content,pid,index,component,prop);
                }
            }
        },
        isChildComponent(id){
            for( let i in this.pageData ){
                if( pageData[i].id == id ){
                    return false;
                }
            }
            return true;
        },
        getParentComponent(id,item){
            if( item && item.content ){
                for( let i in item.content ){
                   if( Object.prototype.toString.call(item.content[i]) === '[object Object]' ){
                       if( item.content[i].id == id ){
                           return item;
                       }else{
                           return this.getParentComponent(id,item.content[i]);
                       }
                   }else if( Object.prototype.toString.call(item.content[i]) === '[object Array]' ){
                       for( let n in item.content[i] ){
                           if( Object.prototype.toString.call(item.content[i][n]) === '[object Object]'){
                               if( item.content[i][n].id == id ){
                                   return item;
                               }else{
                                    return this.getParentComponent(id,item.content[i][n]);
                               }
                           }
                       }
                   }
                }
            }
        },
        getSection(component){
            for( let i in this.sections ){
                for( let n in this.sections[i] ){
                    if( component.name == this.sections[i][n].name ){
                        console.log( 1 )
                        return this.sections[i][n];
                    }
                }
            }
        },
        getNavTab(id,items){
            let component = {};
            for( let i in items ){
                if( Object.prototype.toString.call(items[i]) === '[object Array]' ){
                    component = this.getNavTab(id,items[i]);
                } else if( Object.prototype.toString.call(items[i]) === '[object Object]' && items[i].content && items[i].content.nav && items[i].content.nav.id == id ){
                    component = items[i];
                }
                if(!component.id && items[i].content){
                    component = this.getNavTab(id,items[i].content);
                }
            }
            return component;
        },
        getGroup(id,items){
            let component = {};
            for( let i in items ){
                if( Object.prototype.toString.call(items[i]) === '[object Array]' ){
                    component = this.getGroup(id,items[i]);
                } else if( Object.prototype.toString.call(items[i]) === '[object Object]' && items[i].content && items[i].content.group && items[i].content.group.id == id ){
                    component = items[i];
                }
                if(!component.id && items[i].content){
                    component = this.getGroup(id,items[i].content);
                }
            }
            return component;
        },
        //添加导航
        addNavItem(item){
            let component = this.getNavTab(item.id,this.pageData);
            let section = this.getSection(component);
            component.content.nav.content.items.push(section.content.nav.content.items[0]);
            component.content.tab.content.items.push(section.content.tab.content.items[0]);
            this.handleComponent(component);
            this.$nextTick(() => {
                this.setScript(component);
            })
        },
        setNavId(nav){
            this.$set(nav,'id','Title-' + this.randomNumber());
        },
        delNavItem(id,index) {
            let component = this.getNavTab(id,this.pageData);
            component.content.nav.content.items.splice(index,1);
            component.content.tab.content.items.splice(index,1);
        },
        addItem(component){
            if( component.component == 'Navigation' ){
                this.addNavItem(component);
            } else if( component.component == 'Banner' || component.component == 'Swiper' ){
                this.addSlide(component);
            } else if( component.component == 'TextList' ){
                let id = 'TextList-' + this.randomNumber();
                component.content.items.push({
                    id:id,
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
                })
                this.$nextTick(() => {
                    this.setEditor(id);
                })
            } else {
                let section = this.getSection(component);
                if( component ){
                    let item = JSON.parse(JSON.stringify(section.content.items[0]));
                    item = this.handleComponent(item)
                    component.content.items.push(item);
                    this.$nextTick(() => {
                        this.setScript(item);
                    })
                }
            }
        },
        initPageData(){
            this.pageData = pageData;
        },
        setPageData(id,data,prop){
            let component = this.getComponent(this.pageData,id);
            if( component ){
                if( prop ){
                    Object.assign(component[prop], data);
                }else{
                    component = data;
                }
            }
            this.addHistory();
        },
        removeElement( id ){
            this.removeComponent(this.pageData,id);
            this.addHistory();
        },
        removeComponent(items,id){
            for( let i in items ){
                if( Object.prototype.toString.call(items[i]) === '[object Array]' ){
                    this.removeComponent(items[i],id);
                } else if( Object.prototype.toString.call(items[i]) === '[object Object]' ){
                    if( items[i].component && items[i].id == id ){
                        items.splice(i,1);
                        return;
                    }
                }
                if( items[i].content ){
                    this.removeComponent(items[i].content,id);
                }
            }
        },
        //显示操作条
        showToolBar(item,event){
            if( this.env == 'prod' ) return false;
            $(event.target).parents('.lyrow').removeClass('active').children('.toolBar').css('display','none')
            $(event.target).addClass('active').children('.toolBar').css('display','flex');
        },
        //隐藏操作条
        hideToolBar(item,event){
            $(event.target).removeClass('active').children('.toolBar').css('display','none');
        },
        //显示父操作条
        showAbove(event){
            let left = $(event.target).parents('.toolBar').first().offset().left - $(event.target).parents('.lyrow').first().parents('.lyrow').first().offset().left;
            $(event.target).parents('.lyrow').first().parents('.lyrow').first().addClass('active').children('.toolBar').css({'display':'flex','left':left});
            $(event.target).parents('.lyrow').first().removeClass('active').children('.toolBar').css('display','none');
        },
        showResize(item){
            $('.container .ui-wrapper').removeClass('active');
            $('.container .ui-resizable').removeClass('active');
            if( item.component == 'Image'){
                $('#' + item.id).parent().addClass('active');
            }else{
                $('#' + item.id).addClass('active');
            }
        },
        scrollTo( id ){
            $("html,body").animate({scrollTop: $("#"+id).offset().top - 65}, 1000);
        },
        //导航
        openNavsModal(){
            nav.init();
        },
        //分类
        openCategoryModal(){
            cate.init();
        },
        //图片库
        openAlbumModal(){
            album.init();
        },
        //商品
        openProdModal(){
            prod.init( this.properties );
        },
        //店铺
        openStoreModal(){
            store.init( this.properties );
        },
        //保存数据
        savePage(){
            $.ajax({
                type : "post",
                url : baseUrl + '/mall/homepage/update-data?id=' + id,
                dataType : "json",
                data : { data : JSON.stringify(this.pageData),_csrfBackend:csrf},
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        alert('保存成功')
                    }
                }
            });
        },
    },
    watch:{
        pageData:{
            deep:true,
            handler:function(newValue,oldValue){
                //this.addHistory();
            }
        },
        properties:{
            handler(val, oldVal){
                this.addHistory();
                this.setPageData(val.id,val);
            },
            deep:true
        },
        setStyleValue(){

        },
        getStyleValue(value){

        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initDraggable();
            this.initResizable();
            this.initSortable();
            this.initPicker();
            this.initEvent();
            this.initUploader();
            this.initScript(this.pageData);
        })
    },
    created(){
        this.pageData = pageData;
        this.style = style;
        this.addHistory();
    },
});

let album = new Vue({
    el: '#album',
    data: {
        baseUrl: baseUrl,
        albums :[],
        attachments : [],
        pagination : {},
        activeItem : {},
        search : {
            page:1,
            name:'',
            gallery_id : 0
        }
    },
    methods: {
        //获取相册
        getAlbum(){
            $.ajax({
                type : "get",
                url : 'http://wanbang.xunyoutc.com/administrator.php?mdu=seller&ctl=Store_MediaGallery&met=lists&typ=json&rows=10',
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.albums = res.data;
                    }
                }
            });
        },

        //获取附件
        getAttachment(){
            $.ajax({
                type : "get",
                url : 'http://wanbang.xunyoutc.com/administrator.php?mdu=seller&ctl=Store_Media&met=lists&typ=json',
                dataType : "json",
                data : this.search,
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.attachments = res.data;
                        this.initPagination();
                    }
                }
            });
        },
        //添加附件
        addAttachment(){
            $.ajax({
                type : "get",
                url : this.baseUrl + '/attachment/default/create',
                dataType : "json",
                async:false,
                success : () => {

                }
            });
        },
        //删除附件
        delAttachment(){
            $.ajax({
                type : "get",
                url : this.baseUrl + '/attachment/default/delete',
                dataType : "json",
                async:false,
                success : () => {

                }
            });
        },
        //将附件移入相册
        dragAttachmentToAlbum(){

        },
        //初始化容器
        initContainer(){

        },
        //初始化上传
        initUploader(){

        },
        //初始化拖拽组件
        initSortAble(){

        },
        initPagination(){
            $('#album #pagination').twbsPagination({
                totalPages: this.attachments.total,
                visiblePages:5,
                startPage:1,
                first:"首页",
                last:"页尾",
                prev:"上一页",
                next:"下一页",
                onPageClick: (event, page) => {
                    if( page != this.search.page ){
                        this.search.page = page ;
                        this.getAttachment();
                    }
                }
            });
        },
        initEvent(){
            // 切换相册分类
            $(document).on('click','#album .folder .item',function () {
                $(this).addClass('open').siblings().removeClass('open')
            })

            // 选择相册图片
            $(document).on('click','.pictureBox.single .picture',function () {
                $(this).addClass('active').siblings().removeClass('active')
            })

        },
        //渲染相册
        renderAlbum(){

        },
        //渲染附件
        renderAttachment(){

        },
        albumtClickHandle(albumId){
            if( this.search.gallery_id != albumId ){
                this.search.gallery_id = albumId;
                this.search.page = 1;
                this.getAttachment();
            }
        },
        attachmentClickHandle(item){
            this.activeItem = item;
        },
        handleSearch(){
            this.search.page = 1;
            this.getAttachment();
        },
        open(){
            $('#album').show()
        },
        close(){
            $('#album').hide()
        },
        confirm(){
            this.close();
            app.properties.content.src = this.activeItem.media_url;
        },
        init(){
            this.open();
            this.getAlbum();
            this.getAttachment();
            this.initEvent();
        }
    }
})

let nav = new Vue({
    el: '#navs',
    data: {
        baseUrl: baseUrl,
        navs : [],
        pagination : {},
        search : {
            page:1,
            name:'',
            pageSize:12
        }
    },
    methods: {
        getNavs(){
            $.ajax({
                type : "get",
                url : 'http://wanbang.xunyoutc.com/administrator.php?mdu=&ctl=Base_SiteNav&met=lists&typ=json',
                dataType : "json",
                data : this.search,
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.navs = res.data;
                        this.initSwitchery();
                    }
                }
            });
        },
        initPagination(){
            $('#navs #pagination').twbsPagination({
                totalPages: this.navs.total,
                visiblePages:5,
                startPage:1,
                first:"首页",
                last:"页尾",
                prev:"上一页",
                next:"下一页",
                onPageClick: (event, page) => {
                    if( page != this.search.page ){
                        this.search.page = page ;
                        this.getNavs();
                    }
                }
            });
        },
        editAble(index){
            this.$set(this.navs[index],"editable",true);
        },
        pushNav(){
            this.navs.push({
                nav_id:0,
                nav_title:'',
                nav_url:'',
                nav_order:'',
                nav_enable : 1,
            });
            this.$nextTick(() => {
                let elems = $('#navs').find('.table').find('tr:last-child').find('.js-switch');
                elems.each(function(index,elem){
                    let switchery = new Switchery(elem,{ size: 'small' });
                })
            });
        },
        pullNav(index){
            this.navs.splice(index,1);
        },
        addNavItem(data,index){
            delete data.id;
            data.target = data.target ? 1 : 0;
            data.status = data.status ? 1 : 0;
            $.ajax({
                type : "post",
                url : this.baseUrl + 'nav-item/create?nav_id=1',
                dataType : "json",
                data:{NavItem:data,_csrfBackend:csrf},
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.$set(this.navs[index],"id",res.data.id)
                    }
                }
            });
        },
        delNavItem(id){
            $.ajax({
                type : "post",
                url : this.baseUrl + 'nav-item/delete?id=' + id,
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.navs.splice(this.getIndex(id),1);
                    }
                }
            });
        },
        saveNavItem(data){
            data.target = data.target ? 1 : 0;
            data.status = data.status ? 1 : 0;
            delete data.editable;
            $.ajax({
                type : "post",
                url : this.baseUrl + 'nav-item/update?id=' + data.id,
                data:{NavItem:data,_csrfBackend:csrf},
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.$set(this.navs[this.getIndex(data.id)],"editable",false)
                    }
                }
            });
        },
        initSwitchery(){
            this.$nextTick(() => {
                var elems = Array.prototype.slice.call(document.getElementById('navs').querySelectorAll('.js-switch'));
                elems.forEach(function(html) {
                    if( $(html).next('.switchery').length == 0 ){
                        var switchery = new Switchery(html,{ size: 'small' });
                    }
                });
            });
        },
        setSwitchery(elem){
            new Switchery(elem,{ size: 'small' });
        },
        switch(){

        },
        getIndex( id ){
            for( let i in this.navs.items ){
                if( this.navs.items[i].nav_id == id ){
                    return i;
                    break;
                }
            }
        },
        handleSearch(){
            this.search.page = 1;
            this.getNavs();
        },
        open(){
            $('#navs').show()
        },
        close(){
            $('#navs').hide()
        },
        confirm(){
            app.navs = this.navs;
            this.close();
        },
        init(){
            this.open();
            this.getNavs();
        }
    }
});

let prod = new Vue({
    el: '#prod',
    data: {
        visible:false,
        baseUrl: baseUrl,
        products : [],
        categorys:[[],[],[]],
        pagination : {},
        selecteds : [],
        limit:'',
        search : {
            page:1,
            pageSize:12,
            name:'',
            category_id:0,
        },
        component:{},
    },
    methods: {
        getProduct(){
            $.ajax({
                type : "get",
                url : "http://wanbang.xunyoutc.com/administrator.php?mdu=&ctl=Product_Base&met=lists&typ=json",
                dataType : "json",
                data : this.search,
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.products = res.data;
                        this.initPagination();
                    }
                }
            });
        },
        getCategory(pid,level){
            $.ajax({
                type : "get",
                url : "http://wanbang.xunyoutc.com/index.php?ctl=Product&met=category&typ=json",
                dataType : "json",
                data : {category_id:pid,recursive:1},
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        if(level == 1){
                            this.$set(this.categorys,0,res.data.items);
                            this.$set(this.categorys,1,[]);
                            this.$set(this.categorys,2,[]);
                        }else if( level == 2 ){
                            this.$set(this.categorys,1,res.data.items);
                            this.$set(this.categorys,2,[]);
                        }else if( level == 3 ){
                            this.$set(this.categorys,2,res.data.items);
                        }
                    }
                }
            });
        },
        initPagination(){
            $('#prod #pagination').twbsPagination({
                totalPages: this.products.total,
                visiblePages:5,
                startPage:1,
                first:"首页",
                last:"页尾",
                prev:"上一页",
                next:"下一页",
                onPageClick: (event, page) => {
                    if( page != this.search.page ){
                        this.search.page = page ;
                        this.getProduct();
                    }
                }
            });
        },
        initSortable(){
            new Sortable(this.$refs.sortable, {
                group: {
                    name: 'sortable',
                    pull: false,
                    put: false
                },
                animation: 150,
                onEnd:  (evt) => {
                    let sortable = this.$refs.sortable,
                        newElement = sortable.children[evt.newIndex],
                        oldElement = sortable.children[evt.oldIndex];
                    // 先删除移动的节点
                    sortable.removeChild(newElement)
                    // 再插入移动的节点到原有节点，还原了移动的操作
                    if(evt.newIndex > evt.oldIndex) {
                        sortable.insertBefore(newElement,oldElement)
                    } else {
                        sortable.insertBefore(newElement,oldElement.nextSibling)
                    }
                    this.selecteds.splice(evt.newIndex,0,this.selecteds.splice(evt.oldIndex,1)[0]);
                }
            });
        },
        prodClickHandle(item){
            let index = this.inSelected(item.product_id);
            if( index > -1 ){
                this.selecteds.splice(index,1);
            }else{
                if( this.selecteds.length >= this.limit ){
                    alert( '只能选择' + this.limit + '个商品');
                    return;
                }
                this.selecteds.push({
                    product_id:item.product_id,
                    product_name:item.product_name,
                    product_image:item.product_image,
                    product_unit_price:item.product_unit_price,
                    product_market_price:item.product_market_price,
                    store_id:item.store_id,
                    store_name : item.store_name
                });
            }
        },
        inSelected(id){
            for( let i in this.selecteds ){
                if( this.selecteds[i].product_id == id ){
                    return i;
                }
            }
            return -1;
        },
        isSelected(id){
            if( this.inSelected(id) > -1 ){
                return true;
            } else {
                return false;
            }
        },
        removeSelected(index){
            this.selecteds.splice(index,1);
        },
        handleChanges(event,level){
            this.search.category_id = event.target.value;
            this.getCategory(event.target.value,level + 1);
        },
        handleSearch(){
            this.search.page = 1;
            this.getProduct();
        },
        open(){
            this.visible = true;
        },
        close(){
            this.visible = false;
        },
        confirm(action){
            this.component.content.items = this.selecteds;
            this.close();
        },
        init( data ){
            this.component = data;
            this.selecteds = JSON.parse(JSON.stringify(data.content.items));
            this.limit = data.limit;
            this.open();
            this.getProduct();
            this.getCategory(0,1);
            this.initSortable();
        }
    },
    created(){

    }
});

let cate = new Vue({
    el: '#cate',
    data: {
        baseUrl: baseUrl,
        categoryNavs:[],
        categoryNavItems : [],
        productCategorys:[],
        categoryNav : {
            id:'',
            icon : '',
            sort : ''
        },
        categoryNavItem : {
            id:'',
            category_name : '',
            category_value : '',
            category_type:'',
            parent_id : '',
            sort : ''
        },
        search : {
            page:1,
            pageSize:12
        },
        pagination : {},
        tabActiveIndex : 0,
    },
    methods: {
        getCategortNav(){
            $.ajax({
                type : "get",
                url : this.baseUrl + 'mall/category-nav/index',
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.categoryNavs = res.data;
                        this.initSwitchery('navTable');
                    }
                }
            });
        },
        getCategortNavItem(id){
            $.ajax({
                type : "get",
                url : this.baseUrl + 'mall/category-nav-item/index?category_nav_id=' + id,
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.categoryNavItems = res.data;
                        this.initTreeGrid();
                        this.initSwitchery('cateTreeGrid');
                    }
                }
            });
        },
        getParentCategoryNavItem(pid){
            for( let i in this.categoryNavItems ){
                if(this.categoryNavItems[i].id == pid ){
                    return this.categoryNavItems[i];
                }
            }
        },
        getProductCategory(id){
            $.ajax({
                type : "get",
                url : this.baseUrl + 'product/category/index',
                data:{pid:id,_csrfBackend:csrf},
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.productCategorys = res.data;
                    }
                }
            });
        },
        categoryNavClickHandle(){
            this.tabActiveIndex = 0;
        },
        categoryNavAddClickHandle(){
            this.categoryNav  = {
                id:'',
                icon : '',
                sort : 0
            };
            this.tabActiveIndex = 2;
        },
        categoryNavEditClickHandle(categoryNav){
            this.categoryNav = categoryNav;
            this.tabActiveIndex = 3;
        },
        categoryNavDelClickHandle(id){
            this.delCategoryNav(id);
        },
        categoryNavItemClickHandle(item){
            this.tabActiveIndex = 1;
            this.categoryNav = item;
            this.getCategortNavItem(item.id);
        },
        categoryNavItemAddClickHandle(){
            this.categoryNavItem = {
                id:'',
                category_name : '',
                category_value : '',
                category_type:'category',
                category_nav_id : this.categoryNav.id,
                parent_id : 0,
                sort : 0
            }
            this.tabActiveIndex = 4;
            this.getProductCategory(0);
        },
        categoryNavItemChildAddClickHandle(item){
            this.categoryNavItem = {
                id:'',
                category_name : '',
                category_value : '',
                category_type:'category',
                category_nav_id : this.categoryNav.id,
                parent_id : item.id,
                sort : 0
            }
            this.tabActiveIndex = 4;
            this.getProductCategory(item.category_value);
        },
        categoryNavItemEditClickHandle(data){
            this.categoryNavItem = data;
            this.tabActiveIndex = 5;
            let p = this.getParentCategoryNavItem(data.parent_id);
            this.getProductCategory(p ? p.category_value : 0);
        },
        categoryNavItemDelClickHandle(id){
            this.delCategoryNavItem(id);
        },
        addCategoryNav(){
            delete this.categoryNav.id;
            $.ajax({
                type : "post",
                url : this.baseUrl + 'mall/category-nav/create',
                dataType : "json",
                data:{CategoryNav:this.categoryNav,_csrfBackend:csrf},
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        alert('操作成功');
                        res.data.name = '';
                        this.categoryNavs.push(res.data);
                        this.tabActiveIndex = 0;
                        this.$nextTick(() => {
                            let switchery = $('#navTable').find('tr').eq(this.categoryNavs.length).find('.js-switch')[0];
                            this.setSwitchery(switchery);
                        });
                    } else {
                        alert('操作失败');
                    }
                }
            });
        },
        saveCategoryNav(){
            $.ajax({
                type : "post",
                url : this.baseUrl + 'mall/category-nav/update?id=' + this.categoryNav.id,
                data:{CategoryNav:this.categoryNav,_csrfBackend:csrf},
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        alert('操作成功');
                        this.$set(this.categoryNavs,this.getIndex(id,1),res.data);
                        this.tabActiveIndex = 0;
                    }else{
                        alert('操作失败');
                    }
                }
            });
        },
        delCategoryNav(id){
            $.ajax({
                type : "post",
                url : this.baseUrl + 'mall/category-nav/delete?id=' + id,
                dataType : "json",
                data:{_csrfBackend:csrf},
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        alert('操作成功');
                        this.categoryNavs.splice(this.getIndex(id,1),1);
                    }else{
                        alert('操作失败');
                    }
                }
            });
        },
        addCategoryNavItem(){
            delete this.categoryNavItem.id;
            $.ajax({
                type : "post",
                url : this.baseUrl + 'mall/category-nav-item/create?id=' + this.categoryNavItem.parent_id + '&category_nav_id=' + this.categoryNav.id,
                dataType : "json",
                data:{CategoryNavItem:this.categoryNavItem,_csrfBackend:csrf},
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        alert('操作成功');
                        this.getCategortNavItem(this.categoryNav.id);
                        this.tabActiveIndex = 1;
                    }
                }
            });
        },
        saveCategoryNavItem(){
            $.ajax({
                type : "post",
                url : this.baseUrl + 'mall/category-nav-item/update?id=' + this.categoryNavItem.id + '&category_nav_id=' + this.categoryNav.id,
                data:{CategoryNavItem:this.categoryNavItem,_csrfBackend:csrf},
                dataType : "json",
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        alert('操作成功');
                        this.$set(this.categoryNavItems,this.getIndex(id,2),res.data);
                        this.tabActiveIndex = 1;
                    }else{
                        alert('操作失败');
                    }
                }
            });
        },
        delCategoryNavItem(id){
            $.ajax({
                type : "post",
                url : this.baseUrl + 'mall/category-nav-item/delete?id=' + id,
                dataType : "json",
                data:{_csrfBackend:csrf},
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        alert('操作成功');
                        this.categoryNavItems.splice(this.getIndex(id,2),1);
                    } else{
                        alert('操作失败');
                    }
                }
            });
        },
        initTreeGrid(){
            this.$nextTick(() => {
                $('#cateTreeGrid').treegrid({"initialState":"collapse"});
            });
        },
        initUploader(){
            let $this = this;
            $('#cate').on('click','.upload-image',function () {
                $("#categorynav-icon").click();
            })
            $('#categorynav-icon').fileupload({
                dataType: 'json',
                url : baseUrl + 'upload/image-upload',//请求发送的目标地址
                done: (e, data) => {
                    let file = data.result.files[0];
                    this.categoryNav.icon = file.url;
                },
                progressall: function (e, data) {

                }
            });
        },
        initSwitchery(id){
            this.$nextTick(() => {
                var elems = Array.prototype.slice.call(document.getElementById(id).querySelectorAll('.js-switch'));
                elems.forEach(function(html) {
                    if( $(html).next('.switchery').length == 0 ){
                        var switchery = new Switchery(html,{ size: 'small' });
                    }
                });
            });
        },
        setSwitchery(element){
            new Switchery(element,{ size: 'small' });
        },
        getIndex( id,type ){
            if( type == 1 ){
                for( let i in this.categoryNavs ){
                    if( this.categoryNavs[i].id == id ){
                        return i;
                        break;
                    }
                }
            } else if( type == 2 ){
                for( let i in this.categoryNavItems ){
                    if( this.categoryNavItems[i].id == id ){
                        return i;
                        break;
                    }
                }
            }
        },
        open(){
            $('#cate').show()
        },
        close(){
            $('#cate').hide()
        },
        confirm(){
            this.close();
        },
        init(){
            this.open();
            this.getCategortNav();
            this.getCategortNavItem();
            this.initUploader();
        }
    }
});

let store = new Vue({
    el: '#store',
    data: {
        visible:false,
        baseUrl: baseUrl,
        stores : [],
        pagination : {},
        selecteds : [],
        limit:'',
        search : {
            page:1,
            pageSize:12,
            StoreSearch : {
                name:''
            },
        },
        component:{},
    },
    methods: {
        getStore(){
            $.ajax({
                type : "get",
                url : "http://wanbang.xunyoutc.com/administrator.php?mdu=&ctl=Store_Base&met=lists&typ=json",
                dataType : "json",
                data : this.search,
                async:false,
                success : (res) => {
                    if( res.status == 200 ){
                        this.stores = res.data;
                        this.initPagination();
                    }
                }
            });
        },
        initPagination(){
            $('#store #pagination').twbsPagination({
                totalPages: this.store.total,
                visiblePages:5,
                startPage:1,
                first:"首页",
                last:"页尾",
                prev:"上一页",
                next:"下一页",
                onPageClick: (event, page) => {
                    if( page != this.search.page ){
                        this.search.page = page ;
                        this.getStore();
                    }
                }
            });
        },
        initSortable(){
            new Sortable(this.$refs.sortable, {
                group: {
                    name: 'sortable',
                    pull: false,
                    put: false
                },
                animation: 150,
                onEnd:  (evt) => {
                    let sortable = this.$refs.sortable,
                        newElement = sortable.children[evt.newIndex],
                        oldElement = sortable.children[evt.oldIndex];
                    // 先删除移动的节点
                    sortable.removeChild(newElement)
                    // 再插入移动的节点到原有节点，还原了移动的操作
                    if(evt.newIndex > evt.oldIndex) {
                        sortable.insertBefore(newElement,oldElement)
                    } else {
                        sortable.insertBefore(newElement,oldElement.nextSibling)
                    }
                    this.selecteds.splice(evt.newIndex,0,this.selecteds.splice(evt.oldIndex,1)[0]);
                }
            });
        },
        storeClickHandle(item){
            let index = this.inSelected(item.id);
            if( index > -1 ){
                this.selecteds.splice(index,1);
            }else{
                if( this.selecteds.length >= this.limit ){
                    alert( '只能选择' + this.limit + '个店铺');
                    return;
                }
                this.selecteds.push({
                    store_id:item.store_id,
                    store_name:item.store_name,
                    store_logo:item.store_logo,
                    province_name:item.province_name,
                    store_role_txt:item.store_role_txt,
                    store_is_selfsupport:item.store_is_selfsupport
                });
            }

        },
        inSelected(id){
            for( let i in this.selecteds ){
                if( this.selecteds[i].id == id ){
                    return i;
                }
            }
            return -1;
        },
        isSelected(id){
            if( this.inSelected(id) > -1 ){
                return true;
            } else {
                return false;
            }
        },
        removeSelected(index){
            this.selecteds.splice(index,1);
        },
        handleSearch(){
            this.search.page = 1;
            this.getStore();
        },
        open(){
            this.visible = true;
        },
        close(){
            this.visible = false;
        },
        confirm(action){
            this.component.content.items = this.selecteds;
            this.close();
        },
        init( data ){
            this.component = data;
            this.selecteds = JSON.parse(JSON.stringify(data.content.items));
            this.limit = data.limit;
            this.open();
            this.getStore();
            this.initSortable();
        }
    },
    created(){

    }
});

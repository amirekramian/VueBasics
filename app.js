const app = Vue.createApp({
    data(){
        return{
            visibility: true,
            books :[
                {id:0,title:'Pride and Prejudice', releaseyear: 1813 , author:'jane austin' , imgsrc:'./Assets/Images/BeachRead.jpg', isfav : false},
                {id:1,title:'Seven Days in june', releaseyear: 2021 , author:'andre aciman', imgsrc: './Assets/Images/Pride and Prejudice.jpg', isfav : false},
                {id:2,title:'Beach Read', releaseyear: 2020 , author:'Emily Henry',imgsrc: './Assets/Images/SevenDaysInJune.jpg', isfav : false},
                {id:3,title:'The Notebook', releaseyear: 1996 , author:'Nicholas Sparks',imgsrc: './Assets/Images/TheNotebook.jpg', isfav : false},
                {id:4,title:'Me Before You', releaseyear: 2012 , author:'Nicholas Sparks',imgsrc: './Assets/Images/MeBeforeYou.jpg', isfav : false},
                {id:5,title:'Outlander', releaseyear: 1991 , author:'diana gabaldon',imgsrc: './Assets/Images/Outlander.jpg', isfav : false},
                {id:6,title:'The Flatshare', releaseyear: 2019 , author:'beth oleary',imgsrc: './Assets/Images/The Flatshare.jpg', isfav : false},
                {id:7,title:'One Last stop', releaseyear: 2021 , author:'casey Mcquiston',imgsrc: './Assets/Images/the last stop.jpg', isfav : false},
                {id:8,title:'Love on the brain', releaseyear: 2019 , author:'Beth oleary',imgsrc: './Assets/Images/TheNotebook.jpg', isfav : false},
                {id:9,title:'The Fault in Our Stars', releaseyear: 2012 , author:'john green',imgsrc: './Assets/Images/TheFaultinOurStars.jpg', isfav : false}
            ],
            title:'midnight library',
            pagenumber: 23,
            x:0,
            y:0,
            favoriteOnly: false
        }
    },
    methods:{
        ChangeTitle(value){
            this.title = value
        },
        HideBooks(){
            this.visibility = !this.visibility
            
        },
        EventHandler(e,custom){
            console.log(e.type,e.ctrlKey,e.altKey,e.shiftKey,custom)
        },
        HandleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        LikeBook(item){
            console.log("1",this.books[item.id].id)
            console.log(item.id)
            this.books[item.id].isfav = !this.books[item.id].isfav
        },
        FavoriteOnlyToggle(){
            this.favoriteOnly = !this.favoriteOnly
            console.log(this.favoriteOnly)
        }
    },
    computed:{
        ReturnfavoriteBooks(){
            return this.books.filter((book)=> book.isfav)
        }
    }
})

app.mount('#app')
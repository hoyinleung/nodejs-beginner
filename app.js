const express = require('express')
const dayjs = require('dayjs')

const app = express()

app.use((req,res,next)=>{
    console.log(`有新訪客 : 來自${req.hostname} | 請求頁面 ${req.path}`)
    next()
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','page')

app.get('/',(req,res)=>{
    let articles = [
        {title : '如何使用NodeJS', author : '浩賢'},
        {title : 'NodeJS和PHP有甚麼區別', author : 'June'},
        {title : 'NPM和NodeJS有甚麼關係', author : 'Ann'},
    ]
    let now = `現在是${dayjs().hour()}時${dayjs().minute()}分${dayjs().second()}秒`
    res.render('index',{
        courseName : 'NodeJS入門課程',
        time : now,
        blogs : articles,
        title : '首頁'
    })
})

app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.password)
})

app.get('/about',(req,res)=>{
    res.render('about',{title : '關於'})
})
app.use((req,res)=>{
    res.status(404).render('404',{title : '找不到'})
})

app.listen(3000)
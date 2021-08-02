const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log('訪客請求已經收到')

    console.log(req)

    let path = './page/'

    switch(req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        default:
            path += '404.html'
            break;
    }

    //print個req object睇睇
    //print 個url, method
    //可以用url知道用家想睇邊頁從而判斷回應咩page比返user

    //res
    res.setHeader('Content-Type','text/html')
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        else
        {
            res.write(data)
        }
        res.end()
        
        //如果你只係write野係得一樣的話就可以將data 直接pass落個end作為parameter
    })

    //轉text/plain做text/html
    //hello加h1 tag + 再write多行
})

server.listen(3000,'localhost',()=>{
    console.log('伺服器已在聆聽第3000號port')
})
const fs = require('fs')

//寫入檔案
/* fs.writeFile('./demo.txt', '中文的NodeJS入門課程',()=>{
    console.log('寫入已經完成')
}) */

//讀取檔案內容
/* fs.readFile('./demo1.txt',(error, data)=>{
    if(error)
        console.log(error)
    else
        console.log(data.toString())
}) */

//開新的資料夾
if(!fs.existsSync('./image'))
{
    fs.mkdir('./image',(error)=>{
        if(error)
            console.log(error)
        else
            console.log('資料夾已成功創立')
    })
}

//刪除 檔案
/* if(fs.existsSync('./delete.txt'))
{
    fs.unlink('./delete.txt',(error)=>{
        if(error)
            console.log(error)
        else
            console.log('檔案已經刪除')
    })
} */
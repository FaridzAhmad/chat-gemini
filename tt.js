const { TiktokDownloader } = require("@tobyg74/tiktok-api-dl")
const { result } = require("lodash")

const tiktok_url = "https://www.tiktok.com/@ben10sea/video/7325878248154565934?is_from_webapp=1&sender_device=pc"


function videoUrl(){
   TiktokDownloader(tiktok_url, {
    version: "v2" //  version: "v1" | "v2" | "v3"
  }).then((result) => {
    const url = result.result.video
    console.log(url)
    return url
    
  })
} 

async function call(){
  console.log('tunggu')
   await videoUrl()
}
const test = call()
console.log(test)
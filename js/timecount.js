var now = new Date().getTime() // 当前时间戳
var postinfo = document.getElementsByClassName("post-date")[0]
//var postinfo__date_created = new Date(postinfo.innerText.split(" ")[1])//根据发布时间
var postinfo__date_created = new Date(postinfo.children[1].innerText.split(" ")[1])//根据更新时间
postinfo__date_created = postinfo__date_created.getTime() // 文章发布时间戳
//console.log("文章创建时间",postinfo__date_created)
 
var datepassing = parseInt(now - postinfo__date_created)
//console.log("过期时间",datepassing)
// 超过31天提示：3600*24*31*1000
if(datepassing > 2678400000){
    var out = parseInt(datepassing / 86400000)
    document.write("<div class=\"note info\"><p><strong>文章时效性提示</strong><br>这是一篇创建于 " + out + " 天前的文章，其中的信息可能已经有所发展或是发生改变。</p></div>")
}

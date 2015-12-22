<<<<<<< HEAD
# 贴吧验证码
=======
#贴吧验证码
>>>>>>> c132af2e56161fc19990e43eb41aa9243ec49f1a

宽度基于500px,如果全屏自适应缩放,请如下设置

````
const WIDTH = 500
const ratio = screen.width / WIDTH
const meta = document.createElement('meta')
meta.setAttribute('name', 'viewport')
meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui')
document.getElementsByTagName('head')[0].appendChild(meta)
````
#贴吧验证码

宽度基于500px,如果全屏自适应缩放,请如下设置

````
const WIDTH = 500
const ratio = screen.width / WIDTH
const meta = document.createElement('meta')
meta.setAttribute('name', 'viewport')
meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui')
document.getElementsByTagName('head')[0].appendChild(meta)
````
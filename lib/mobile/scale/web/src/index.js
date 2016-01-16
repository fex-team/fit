const scale = (width = 400, reactDomName = 'react-dom')=> {
    // 设置页面缩放~
    const WIDTH = width
    const ratio = screen.width / WIDTH
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui')
    document.getElementsByTagName('head')[0].appendChild(meta)
    document.getElementById(reactDomName).style.margin = '0 auto'
    document.getElementById(reactDomName).style.width = width + 'px'
}

export default scale
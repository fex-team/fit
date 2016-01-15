const scale = (width = 400)=> {
    // 设置页面缩放~
    const WIDTH = width
    const ratio = screen.width / WIDTH
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui')
    document.getElementsByTagName('head')[0].appendChild(meta)
}

export default scale
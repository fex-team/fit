import platform from 'platform'

/**
 * @desc track类型统计专用
 * @function $.track
 * @name track
 * @memberof $
 * @param opt 参数集合对象
 * @param {String} opt.task 不同的icafe项目或者某一类统计,例如智能版妹子系统
 * @param {String} opt.page 页面,例如妹子认证页
 * @param {String} opt.locate 标示参数名称,也即页面中某个位置,此项必填,例如图片轮播区
 * @param {String} opt.type 点击:click,展示:view, 默认click
 * @param {Number} opt.fid 吧id
 * @param {Number} opt.tid 主题id
 * @param {Number} otp.pid 帖子id
 * @param {String} opt.fname 吧名
 * @param {String} opt.uname 用户名
 * @param {String} opt.firstDir 一级目录
 * @param {String} opt.secondDir 二级目录
 * @param {Number} opt.isNewUser 1:新用户,0:老用户,很少用到
 * @param {Function} opt.callback 统计回调函数
 * @param {Number} opt.obj_id 实体id，如广告物料id
 * @param {String} opt.obj_name 实体名称
 */

const send = (opt) => {
    const trackUrl = "http://static.tieba.baidu.com/tb/img/track.gif?" //统计发送URL
    const paramArr = [
        "client_type=wap_smart", //智能版
        "url=" + encodeURIComponent(document.location.href), //当前页面URL
        "refer=" + encodeURIComponent(document.referrer), //当前页面refer
        "uname=" + (opt.uname && encodeURIComponent(opt.uname) || ""), //用户名
        "task=" + (opt.task && encodeURIComponent(opt.task) || ""), //不同的icafe项目
        "page=" + (opt.page && encodeURIComponent(opt.page) || ""), //页面
        "locate=" + (opt.locate && encodeURIComponent(opt.locate) || ""), //标示参数名称，也即页面中某个位置，此项必填
        "type=" + (opt.type && encodeURIComponent(opt.type) || "click"), //如果type为空，则type=click
        "fname=" + (opt.fname && encodeURIComponent(opt.fname) || ""), //吧名
        "fid=" + (opt.fid && encodeURIComponent(opt.fid) || ""), //吧ID
        "tid=" + (opt.tid && encodeURIComponent(opt.tid) || ""), //主题ID
        "pid=" + (opt.pid && encodeURIComponent(opt.pid) || ""), //贴子id
        "version=" + platform.os, //系统
        "first_dir=" + (opt.firstDir && encodeURIComponent(opt.firstDir) || ""), //一级目录
        "second_dir=" + (opt.secondDir && encodeURIComponent(opt.secondDir) || ""), //二级目录
        "net_type=1", //网络类型
        "is_new_user=" + (opt.isNewUser && encodeURIComponent(opt.isNewUser) || ""), //是否新用户,很少用到
        "ab_type=1", //DEPRECATING: UE改版abtest标识
        "obj_id=" + (opt.obj_id && encodeURIComponent(opt.obj_id) || ""),//实体id
        "obj_name=" + (opt.obj_name && encodeURIComponent(opt.obj_name) || ""),//实体名称
        "_t=" + (new Date()) * 1000
    ]

    //发送统计
    let img = new Image()
    img.src = trackUrl + paramArr.join("&")
    if (opt.callback) {
        img.onload = ()=> {
            opt.callback()
            img = null
        }
    } else {
        img = null
    }
}

export default send
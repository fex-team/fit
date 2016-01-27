# 发送track

发送记录日志请求,第一个参数是个对象:

- task 不同的icafe项目或者某一类统计,例如智能版妹子系统
- page 页面,例如妹子认证页
- locate 标示参数名称,也即页面中某个位置,此项必填,例如图片轮播区
- type 点击:click,展示:view, 默认click
- fid 吧id
- tid 主题id
- pid 帖子id
- fname 吧名
- uname 用户名
- firstDir 一级目录
- secondDir 二级目录
- isNewUser 1:新用户,0:老用户,很少用到
- callback 统计回调函数
- obj_id 实体id，如广告物料id
- obj_name 实体名称
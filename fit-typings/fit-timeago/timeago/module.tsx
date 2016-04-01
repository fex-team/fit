export class Label {
    ago:string = 'ago'
    fromNow:string = 'from now'
    second:string = 'second'
    minute:string = 'minute'
    hour:string = 'hour'
    day:string = 'day'
    week:string = 'week'
    month:string = 'month'
    year:string = 'year'
}

export class Props {
    /**
     * 需要处理的时间,可以是一个date对象,UTC字符串或者是时间戳
     */
    date:any = ''

    /**
     * 是否跟随时间自动变化
     */
    live:boolean = true

    /**
     * 外层dom标签
     */
    component:string = 'span'

    /**
     * 多久以后的时间会失效,失效指的是不再显示友好时间,直接显示 YYYY-MM-DD HH:mm:ss
     */
    loseTime:number = Infinity

    /**
     * 失效时间的格式化类型
     */
    loseFormat:string = 'YYYY-MM-DD HH:mm:ss'

    /**
     * 组件在更新前等待的最少秒数
     */
    minPeriod:number = 0

    /**
     * 每隔多久更新一次时间,默认无限大
     */
    maxPeriod:number = Infinity

    /**
     * 定制各类提示语句
     */
    label:Label = new Label()

    /**
     * 格式化方法
     */
    formatter:(value:number, unit:string, suffix:string, then:any)=>string =
        function (value:number, unit:string, suffix:string, then:any):string {
            if (value !== 1) {
                unit += 's'
            }
            return value + ' ' + unit + ' ' + suffix
        }

    others:any = {}
}

export class State {

}
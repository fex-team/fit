export declare class Label {
    ago: string;
    fromNow: string;
    second: string;
    minute: string;
    hour: string;
    day: string;
    week: string;
    month: string;
    year: string;
}
export declare class Props {
    /**
     * 需要处理的时间,可以是一个date对象,UTC字符串或者是时间戳
     */
    date: any;
    /**
     * 是否跟随时间自动变化
     */
    live: boolean;
    /**
     * 外层dom标签
     */
    component: string;
    /**
     * 多久以后的时间会失效,失效指的是不再显示友好时间,直接显示 YYYY-MM-DD HH:mm:ss
     */
    loseTime: number;
    /**
     * 失效时间的格式化类型
     */
    loseFormat: string;
    /**
     * 组件在更新前等待的最少秒数
     */
    minPeriod: number;
    /**
     * 每隔多久更新一次时间,默认无限大
     */
    maxPeriod: number;
    /**
     * 定制各类提示语句
     */
    label: Label;
    /**
     * 格式化方法
     */
    formatter: (value: number, unit: string, suffix: string, then: any) => string;
    others: any;
}
export declare class State {
}

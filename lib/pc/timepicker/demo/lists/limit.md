# 选择限制

`limitHour` `limitMinute` `limitSecond` 分别控制 时/分/秒 的限制,每个都是回调,传入 0~23 或 0~59 的数字,返回false时会禁止选择此数字
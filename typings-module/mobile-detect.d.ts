declare module 'mobile-detect' {
    class MobileDetect {
        constructor(userAgent:string, maxPhoneWidth?:number)

        mobile():boolean
    }
    namespace MobileDetect {
    }
    export = MobileDetect
}
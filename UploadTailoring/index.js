function Tailoring() {
    if (typeof document !== 'undefined') {
        var args = arguments[0];
        if(args.el) {
            
        } else {
            return new Error('请传入el 参数')
        }
    } else {
        return new Error('没有doeument对象')
    }
}
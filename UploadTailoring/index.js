function Tailoring() {
    if (typeof document !== 'undefined') {
        var args = arguments[0];
        if (args.el) {
            var $input = document.querySelector('input[name="upload"]');
            var $button = document.querySelector('.upload-button');
            var $img = document.querySelector('img[name="update-img"]');
            $button.addEventListener('click', function () {
                $input.click();
            })
            $input.addEventListener('change', function (event) {
                var files = event.target.files[0]
                var reader = new FileReader()
                reader.onload = function () {
                    $img.src = reader.result
                }
                reader.readAsDataURL(files);
            })
            if (args.proportion) {

            }
        } else {
            throw new Error('请传入el 参数')
        }
    } else {
        throw new Error('没有doeument对象')
    }
}
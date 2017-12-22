/**
 * Created by DELL on 2017/9/4.
 */

module.exports = {
    expfun: function (flag) {
        if(flag == 0){
            throw "我是例外"
        }

        return  "success";
    }
}

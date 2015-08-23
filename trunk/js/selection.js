/**
 * Created by 相杰 on 13-10-21.
 */
/*脚本说明：
* 对有data-selection="btn"属性的元素进行绑定，标记在a标签中，a标签的父元素需要时li标签
* */

$(function () {
    var $btnSelection = $('[data-selection="btn"]')
    $btnSelection.on("click", function () {
        var $this = $(this)
        var $parent = $this.parent()
        var $siblings = $parent.siblings()
        if(!$parent.hasClass("active")){
            $siblings.removeClass("active")
            $parent.addClass("active")
        }else{
            $parent.removeClass("active")
        }
        return false
    })
})
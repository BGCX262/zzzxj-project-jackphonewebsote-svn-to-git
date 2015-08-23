/**
 * Created by 相杰 on 13-10-21.
 */
$(function(){
    var $btnCount = $('.btnCount')
    var $countVla = $('#countVla')
    var countVla = $countVla.val()

    $btnCount.on("click",function(){
        $this = $(this)
        countVla = $countVla.val()
        if($this.attr('id')!='btnMinus'){
            countVla++
        }else{
            if(countVla!=1){
                countVla--
            }
        }
        $countVla.val(countVla)
        return false
    })
})
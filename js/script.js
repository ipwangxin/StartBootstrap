(function($){
    $('body').scrollspy({target: '.navbar-example'});         //滚动监听调用

    $('.rela').click(function (e) {                           //ajax请求
        var k = $('.rela').index($(this));        //获取对应下标
    //    $('.target').load('ajax/demo.html?' + Math.random(), function () {
            $.getJSON('ajax/Array.json', function (data) {             //请求json数据
                $('.t-img').attr('src', data[k].src);                //更新对应的标签类容
                //console.log(k+"====");
                $('.p1').html(data[k].p1);
                $('.h1').html(data[k].h1);
                $('.h3').html(data[k].h3);
                $('.p2').html(data[k].p2);
                if (data[k].p3) {                                    //p3数据更新的判断条件
                    $('.p3').html(data[k].p3);                      //更p3数据
                }
            })

    })

    /*header nav缩放*/
    var sTop = 0;
    $(document).scroll(function (e) {
        if (window.innerWidth > 768) {        //判断窗口大小
            if (sTop === 0 && $('body').scrollTop() > 0) {                //动画条件
                //alert($('.navbar').css('fontSize'));
                $('.navbar').animate({                              //动画类容
                    paddingTop: '10px'
                }, 500).css({'background': '#000'}).find('.navbar-brand').animate({
                    'fontSize': '18px'
                }, 500)
            }
            ;

            if (sTop > 0 && $('body').scrollTop() === 0) {                    //动画条件
                $('.navbar').animate({                                  //动画类容
                    paddingTop: '20px'
                }, 500).css({
                    'background': 'transparent',
                    border: 'none'
                }).find('.navbar-brand').animate(
                    {
                        'fontSize': '22px'
                    }, 500
                )
            }
        } else {                                                          //还原
            $('.navbar').css({
                paddingTop: '10px',
                'background': '#000'
            }).find('.navbar-brand').css({
                'fontSize': '18px'
            })
        }

        sTop = $('body').scrollTop();                                     //保存sctollTop值。
    })


    /*
     * 表单正则验证部分
     * */
    $('.send').click(function () {
        //alert();
        $('.form input').each(function (index, ele) {
            //alert($(ele).val()==="")
            if ($(ele).val() === '') {
                //alert(ele);
                $(ele).next().show();
            }
        })
        if ($('textarea').html() === '') {
            $('textarea').next().show();
        }
        return false;
    });
    $('.form input').focus(function () {
        $(this).siblings().hide();
    });
    $('.form input[type="email"]').keyup(function () {
        var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!reg.test($(this).val())) {
            $(this).next().next().show();
        }
    })



//test
    /*$('.navbar-fixed-top').affix({
     offset:{
     top:100
     }
     })*/
    /*$('').bind('click',function(e){
     var $that = $(this);
     $('html,body').stop().animate({
     scrollTop:($($that.a))
     })
     })*/

    $('.navbar ul li a').click(function(){
        $('')
    })


})(jQuery);

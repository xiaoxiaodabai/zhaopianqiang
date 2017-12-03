
$(document).ready(function(){
            $('#picture_list').mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 60);
                event.preventDefault();
      
            })
            $('img').fadeIn(2000).slideDown();
            $('img').hover(function(){
                $(this).next('span').css({visibility: "visible"});
            })
            $('img').mouseout(function(){
                $(this).next('span').css({visibility: "hidden"});
            })

            
            function ShowDiv(show_div,bg_div){
                document.getElementById(show_div).style.display='block';
                document.getElementById(bg_div).style.display='block' ;
 
                var _windowHeight = $(window).height(),//获取当前窗口高度
                        _windowWidth = $(window).width(),//获取当前窗口宽度
                        _popupHeight = $("#"+show_div).height(),//获取弹出层高度
                        _popupWeight = $("#"+show_div).width();//获取弹出层宽度
                _posiTop = (_windowHeight - _popupHeight)/2;
                _posiLeft = (_windowWidth - _popupWeight)/2;
                $("#"+show_div).css({"left": _posiLeft + "px","top":_posiTop + "px","display":"flex"});//设置position
                
            
            };
            //关闭弹出层
            function CloseDiv(show_div,bg_div)
            {
                document.getElementById(show_div).style.display='none';
                document.getElementById(bg_div).style.display='none';
            };
 
            $(".btn").click(function () {
                var src = $(this).attr("src");
                $("#showcont").attr("src",src);
                ShowDiv('MyDiv','fade');
                
            });

            $("#fade").click(function () {
                CloseDiv('MyDiv','fade')
            });
            
             $(".two").click(function(){
                 var img_urls = [];
                 $(".btn").each(function(){
                     img_urls.push($(this).attr("src"));
                 })
                var src= $(".show").attr("src");
                for(var i=0;i<img_urls.length;i++)
                {
                    if(img_urls[i]==src)
                    {
                        $("#showcont").attr("src",img_urls[i+1]);
                        ShowDiv('MyDiv','fade');
                    }
                }
            })
            $(".one").click(function(){
                 var img_urls = [];
                 $(".btn").each(function(){
                     img_urls.push($(this).attr("src"));
                 })
                var src= $(".show").attr("src");
                for(var i=0;i<img_urls.length;i++)
                {
                    if(img_urls[i]==src)
                    {
                        $("#showcont").attr("src",img_urls[i-1]);
                        ShowDiv('MyDiv','fade');
                    }
                }
            })
})

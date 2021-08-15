
       function preloader(){
        setTimeout(function(){
            $('.preloader').css('display','none');
            swal(" Best Restaurant In Segment !", "Go ahead and enjoy our services", "success");
        }, 3.5 * 1000);
           
       }

    $(window).scroll(function(){
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            $('header').css(
            {'background-color': 'black'}
            )
    
           
        }
        else{
            $('header').css({'background-color':'transparent'});
        }
    })





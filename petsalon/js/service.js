function initService () {

    $('#bath').hide();
    $('#hairCut').hide();

    $('#bath-btn').on('click',function(){
        $('#bath').show();
        $('#nailTrim').hide();
        $('#hairCut').hide();
    });

    $('#nailTrim-btn').on('click',function(){
        $('#bath').hide();
        $('#nailTrim').show();
        $('#hairCut').hide();
    });

    $('#hairCut-btn').on('click',function(){
        $('#bath').hide();
        $('#nailTrim').hide();
        $('#hairCut').show();
    });
}

window.onload = initService;
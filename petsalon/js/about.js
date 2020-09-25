function initAbout () {

    $('#puppy-smile').hide();
    $('#puppy-smiles').hide();

    $('#puppy-smiling').on('click',function(){
        $('#puppy-smiling').show();
        $('#puppy-smiles').hide();
        $('#puppy-smile').hide();
    });

    $('#puppy-smile').on('click',function(){
        $('#puppy-smiling').hide();
        $('#puppy-smiles').show();
        $('#puppy-smile').hide();
    });

    $('#puppy-smiles').on('click',function(){
        $('#puppy-smiling').hide();
        $('#puppy-smiles').hide();
        $('#puppy-smile').show();
    });
}
window.onload = initAbout;
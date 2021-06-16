$(document).ready(function(){
    $('button').click(function(){
        const userName = $('#nameId').val();
        // alert(userName);

        $('#imgChange').attr('src', `https://joeschmoe.io/api/v1/${userName}`)
    })
})
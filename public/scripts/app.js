    // function hideLoader() {
    //     $('#loading').hide();
    // }
    
    // $(window).ready(hideLoader);
    
    // // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
    // setTimeout(hideLoader, 60 * 1000);
   
    $(window).on('load', function() {
        console.log('hello!')
        $('.loader .inner').fadeOut(1500, function() {
            $('.loader').fadeOut(1700);
        });
    });


var url = "http://localhost:3000/api/user/";


    $('form').on('submit', function (e) {
        e.preventDefault();

        var userInput =  $('#username').val();
        var passwordInput =  $('#password').val();
        
        
        $.ajax({ 
            url: url + userInput + '/' + passwordInput,
            method: 'GET',
            success: function (response) {
                console.log('User Found');
                $('#signIn').on('click', function(){
                    window.location.href='/dashboard';
                 })
            }
        });
        $('#signUp').click(function() {
            $('#modelWindow').modal('show');
         });
    });
        
    $('#create').on('click', function(e) {
        e.preventDefault();
        console.log('new user', $(this).serializeArray());
        $.ajax({
          method: 'POST',
          url: url,
          data: $(this).serializeArray(),
          success: newUserSuccess,
        //   error: newUserError
        });
      });

      function newUserSuccess(json) {
        $('#username').val('');
        $('#password').val('');
        allBooks.push(json);
        render();
      }
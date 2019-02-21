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
var allUsers =[]

    $('form').on('submit', function (e) {
        e.preventDefault();

        var userInput =  $('#username').val();
        var passwordInput =  $('#password').val();
        
        
        $.ajax({ 
            url: url + userInput + '/' + passwordInput,
            method: 'GET',
            success: function (response) {
                console.log('User Found');
                window.location.href='/dashboard';
            }
        });
        
    });

        
    $('#create').on('click', function(e) {
        e.preventDefault();
        
        // let user = $("#login").serialize()

        let user = {
            username: $("#username").val(),
            password: $("#password").val()
        }
        console.log('new user', user);



        $.ajax({
          method: 'POST',
          url: url,
          data: user,
          dataType: 'json',
          success: newUserSuccess,
        //   error: newUserError
        });
      });

      function newUserSuccess(json) {
        $('#username').val('');
        $('#password').val('');
        allUsers.push(json);
        console.log("created user")
      }        
   
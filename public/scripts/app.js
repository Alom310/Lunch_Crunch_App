    // function hideLoader() {
    //     $('#loading').hide();
    // }
    
    // $(window).ready(hideLoader);
    
    // // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
    // setTimeout(hideLoader, 60 * 1000);
   
    $(window).on('load', function() {
        console.log('hello!')
        $('.loader .inner').fadeOut(1000, function() {
            $('.loader').fadeOut(1000);
        });
    });


var url = "http://localhost:3000/api/user/";
var allUsers =[]
    //////////login function
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

    ///////////Create account function 
    $('#signUp').on('click', function(e) {
        e.preventDefault();
        let user = {
            username: $("#Form-email").val(),
            password: $("#Form-pass").val(),
            email: $("#Form-email").val(),
            full_name: $("#Form-fullname").val(),
            budget: $("#Form-budget").val()
        }
        console.log('new user', user);
        $.ajax({
          method: 'POST',
          url: url,
          data: user,
          dataType: 'json',
          success:newUserSuccess,
          error: newUserError
        });
      });

      function newUserSuccess(json) {
        $('#Form-email').val('');
        $('#Form-pass').val('');
        $("#Form-email").val();
        $("#Form-fullname").val();
        $("#Form-budget").val();
        allUsers.push(json);
        console.log("created new user");
        alert("New User Created!!!")
        window.location.href='/dashboard';
      };       
    
      function newUserError () {
          console.log('CREATE USER ERROR');
          alert('Create User Error!!!')
      };


      //////////Update Meals
    //   $.ajax({
    //       method: 'PUT',
    //       url: ,
    //       success: ,

    //   });

    //////////Delete Meal
    //   $.ajax({
    //       method: 'DELETE',
    //       url: ,
    //       success: ,

    //   });
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

$.ajax({
    method: 'GET',
    url: 'api/user/',
    success: dummySuccess,
    error: dummyError
});

function dummySuccess (json) {
    json[0].meals.forEach(function(meal) {
        $('#transactions').append(
            `<div class="mealCard" style="width: 18rem;">
                <div class="card-body">
                <h2 class="card-title">${meal.name}</h2>
                <h3 class="card-title">$ ${meal.Price}</h3>
                <h3 class="card-title">${meal.date}</h3>
                <div class="btn-group d-flex align-items-center" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-danger delete">Delete</button>
                </div>
                </div>
            </div>`
        )
        $('.btn-danger').on('click', function(){
            $(this).closest('.mealCard').remove()});
    })
}

function dummyError() {
    return console.log("error retrieving dummy data!");
}

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


    
    


    /////CREATE MEAL
    var allMeals = [];
    $(`#submitMeal`).on('click', (e) => {
        e.preventDefault();
        let meal = {
            name: $("#exampleInputMeal").val(),
            Price: $("#exampleInputPrice").val(),
            date: $(`#exampleInputDate`).val()
        }
        console.log('new meal', meal);
        $.ajax({
          method: 'POST',
          url: `http://localhost:3000/api/user/`,
          data: meal,
          dataType: 'json',
          success:newMealSuccess,
          error: newMealError
        });

        function newMealSuccess(json){
            allMeals.push(json);
            $('#transactions').append(  
            `<div class="mealCard" style="width: 18rem;">
                <div class="card-body">
                <h2 class="card-title">${meal.name}</h2>
                <h3 class="card-title">$ ${meal.Price}</h3>
                <h3 class="card-title">${meal.date}</h3>
                <div class="btn-group d-flex align-items-center" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-danger delete">Delete</button>
                </div>
                </div>
            </div>`
            )
            $('.btn-danger').on('click', function(){
                $(this).closest('.mealCard').remove()})
        }
        
        


        function newMealError(XHR, status, errorThrown) {
            console.log(`uh oh! Error: ${errorThrown}`);
            $('body').text('Failed to load food, is the server working?');
        }

    });



   



$(function(){
    
    console.log("Loaded: app-burgers.js");

    // POST DATA
    $("#add-burger").on("click", function(event){
        console.log("Button Add burger clicked");


        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        if (newBurger.burger_name){
            $.ajax({
                url: "/api/burgers",
                type: "POST",
                data: newBurger
            }).then(
                function(){
                    console.log("Added new burger: " + newBurger.burger_name);
                    location.reload();
                }
            );

        }
        else{
            console.log("Plase enter a value for the burger name");
            return;
        }

    });
    

    // PUT DATA - Eat Burger
    $(".eatme").on("click", function(event){
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: 1
        };

        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("Updated Devoured State of Burger ID:" + id );
                location.reload();
            }
        );
    })

});
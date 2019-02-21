
         /* buton  nav search */
        $(document).ready(function(){
           $("#buton1").click(function(){
			   $(".navbar-nav").hide();
			  $(".form-search").addClass("form-search-open");
			  $("#buton1").hide();
			   $("#buton2").show();
            });
			
			$("#buton2").click(function() {
			  $(".form-search").removeClass("form-search-open");
			  $(".form-search").addClass("form-search");
			  $(".navbar-nav").show();
			  $("#buton2").hide();
			  $("#buton1").show();
            });
        });
		
		
		 /* buton  description  food */
		  $(document).ready(function(){
           $("#pizza-btn").click(function(){
			   $(".food").hide();
			   $(".salad").hide();
			   $(".dessert").hide();
			   $(".pizza").show();
			   $("#fastfood-btn").removeClass("btn-hover");
			   $("#salad-btn").removeClass("btn-hover");
			   $("#dessert-btn").removeClass("btn-hover");
			   $("#pizza-btn").addClass("btn-hover");
            });
			
			$("#salad-btn").click(function(){
			   $(".food").hide();
			   $(".pizza").hide();
			   $(".dessert").hide();
			   $(".salad").show();
			   $("#fastfood-btn").removeClass("btn-hover");
			   $("#pizza-btn").removeClass("btn-hover");
			   $("#dessert-btn").removeClass("btn-hover");
			   $("#salad-btn").addClass("btn-hover");
            });
			
			$("#dessert-btn").click(function(){
			   $(".food").hide();
			   $(".pizza").hide();
			   $(".salad").hide();
			   $(".dessert").show();
			   $("#fastfood-btn").removeClass("btn-hover");
			   $("#pizza-btn").removeClass("btn-hover");
			   $("#salad-btn").removeClass("btn-hover");
			   $("#dessert-btn").addClass("btn-hover");
            });
			
			$("#fastfood-btn").click(function(){
			   $(".salad").hide();
			   $(".pizza").hide();
			   $(".dessert").hide();
			   $(".food").show();
			   $("#salad-btn").removeClass("btn-hover");
			   $("#pizza-btn").removeClass("btn-hover");
			   $("#dessert-btn").removeClass("btn-hover");
			   $("#fastfood-btn").addClass("btn-hover");
            });
        });
		
		
				
		 /* buton  description-reviews food */
		  $(document).ready(function(){
           $("#reviews-link").click(function(){
			   $(".description-food").hide();
			   $(".reviews-info").show();
			   $("#description-link").removeClass("description-reviews btn-hover");
			   $("#reviews-link").addClass("description-reviews btn-hover");
            });
			
			$("#description-link").click(function(){
			   $(".reviews-info").hide();
			   $(".description-food").show();
			   $("#reviews-link").removeClass("description-reviews btn-hover");
			   $("#description-link").addClass("description-reviews btn-hover");
            });
        });
		
		
		
		
		
		
		
		
		
		
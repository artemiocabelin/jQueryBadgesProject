$(document).ready(function() {
	$(function() {

	  // your code will go here

	  $.ajax({
	    url: 'https://www.codeschool.com/users/artcab.json',
	    dataType: 'jsonp',
	    success: function(response) {
	      // handle response
	      console.log('response', response.courses.completed);

	      function addCourses (courses) {
	      	courses.forEach(function(course) {
	      		var $newDiv = $('<div />', { "class" : "course"});
	      		var $newH3 = $('<h3 />', {"text" : course.title });
	      		var $newImg = $('<img>', { "src" : course.badge});
	      		var $newAnchor = $('<a />', {"href" : course.url, "target" : "_blank", "class" : "btn btn-primary", "text" : "See Course"});
	      		$("#badges").append($newDiv);
	      		$($newDiv).append($newH3);
	      		$($newH3).after($newImg);
	      		$($newImg).after($newAnchor);
	      	});
	      }

	      addCourses (response.courses.completed);
	    }
	  });
	});
});
	

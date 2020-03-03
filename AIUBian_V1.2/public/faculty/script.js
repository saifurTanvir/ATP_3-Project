$(function() {
    $("#likebtn").on("click", function () {
      var data = $("#likebtn").val();
    	var preLike = $("#likeCount").html();
    	var totalLike = parseInt(preLike) + 1;
    	console.log(data);
      $.ajax({
        type: 'POST',
        data: {id: data, like: totalLike},
        url: '/facultyHome/likeExe',
        success: function(status) {
        	console.log("like updated");
          $("#likeCount").html(totalLike);
        },
  		error: function(error){
  			alert(error.status);
  		}
      });
    });
});
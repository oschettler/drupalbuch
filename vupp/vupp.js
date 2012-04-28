// $Id$

$(document).ready(function() {
	$('a.vupp.active').each(function () {
		// Read in the path to the PHP handler
		var uri = $(this).attr('href');
		$(this).removeAttr('href'); 
		var cid = $(this).attr('id');
		var pid = 'vupp-points-' + cid.match(/[0-9]+$/);
		$(this).click(function() {
			// Ajax GET request for vote data
			$.ajax({
				type: "GET",
				    url: uri,
				    success: function (data) {
				    $('#' + cid).removeClass('active');
				    // extract the cid so we can change other elements for the same cid
				    // update the points
				    $('#' + pid).html(data);
				},
				    error: function (xmlhttp) {
				    alert('An HTTP error '+ xmlhttp.status +' occured.\n'+ db.uri);
				}
			    });
		    });
	    });
    });

$(document).ready(function(){

// Use enter to add items to the list
    // click on enter or click on plus sign to add items to the list

$('#item').keyup(function (event){
    if(event.keyCode ==13){     //click enter
        event.preventDefault();
        $('#add').click();      //click on add button
};
});
    //add list items
	$('#add').on('click',function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) { //checks to see if the input form is blank
			alert('Please enter text to add to the list'); // sends message 
		} else {
			$('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="trash" src="Images/glyphicons_016_bin.png"/>'); //adds itmes to list
		txtbox.value =''; // removes item from input box
		};
	});
    //delete list items
	$('#list').on('click', '.trash', function(e){
        e.preventDefault(); 
        $(this).parent().slideUp()
    });
    //cross off list items
	$('#list').on('click', 'li', function(){
        
        $(this).toggleClass('strike');
        $('.strike').animate({width:['=50']})
                                           });
    
}); // End
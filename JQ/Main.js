$(document).ready(function(){


    var $new =$('#New');
      var $item =$('#item');
    var $add=$('#add');
    // loads at the start
        $new.show();
        $item.hide();
        $add.hide();
    $('li').hide().each(function(index){
    $(this).delay(450 * index).fadeIn(1000);
    });
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
			$('li:last').after('<li><span>'+ txtval +'</span><img class="trash" src="Images/glyphicons_016_bin.png"/></li>'); //adds itmes to list
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
        
        $(this).toggleClass('strike');//click to toggle stike class
                                           });
    $('.info').on('click',function(){
    $new.hide();
        $item.show();
        $add.show();
    });
    
}); // End
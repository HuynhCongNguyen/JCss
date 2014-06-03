jQuery(function () {
	//Key Word
	var keyWordPaMa = ['mg', 'mt', 'mr', 'mb' , 'ml', 'pd', 'pt', 'pr', 'pb' , 'pl'];
	var keyWordFont = ['fz', 'fw'];
	var keyWordDimention = ['w', 'h', 'po', 't', 'r', 'b', 'l'];
	//Full Word
	var fullWordPaMa = ['margin', 'margin-top', 'margin-right', 'margin-bottom' , 'margin-left', 'padding', 'padding-top', 'padding-right', 'padding-bottom' , 'padding-left'];
	var fullWordFont = ['font-size', 'font-weight'];
	var fullWordDimention = ['width', 'height','position', 'top', 'right', 'bottom', 'left'];
	// Concat
	var keyWord = keyWordPaMa.concat(keyWordFont, keyWordDimention);
	var fullWord = fullWordPaMa.concat(fullWordFont, fullWordDimention);
	var KeySerch = '';
	for(var i = 0; i < keyWord.length ; i++) {
		KeySerch = KeySerch.concat('[class^="', keyWord[i],'-"]');
		if( i < (keyWord.length-1)){KeySerch = KeySerch.concat(', ');}
	}
	var targetImgs = jQuery(KeySerch);
	targetImgs.each(function () {
		object = $(this).attr('class').split(' ').join('-').split('-');
		for(var i = 0; i < object.length - 1; i++) {
			var currentI = jQuery.inArray( object[i], keyWord );
			if(currentI >= 0){
				var type = fullWord[currentI];
				if(Number(object[i+1])){
					var value = Number(object[i+1]);
				}else{
					var value = String(object[i+1]);
				}
				$(this).css(type,value);
			}
		}
	});
});

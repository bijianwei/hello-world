window.onload = function(){
	
	
	var sub4 = document.getElementsByClassName("submit")[4];
	var sub3 = document.getElementsByClassName("submit")[3];
	var sub2 = document.getElementsByClassName("submit")[2];
	var sub1 = document.getElementsByClassName("submit")[1];
	var sub0 = document.getElementsByClassName("submit")[0];
	sub0.onclick = function(){
		var arr = document.getElementsByName("radio");		
			
		if(arr[1].checked){				
			alert("答对了！");
			score= score + 1;
		}else{
			alert("错了！");					
			}
	};
	sub1.onclick = function(){
		var score = 0;		
		var myC = document.getElementsByClassName("checkbox");
		var n1 = 0;
		var n2 = 0;		
		for(var i=0; i< 8;i++){
			if(myC[i].checked){n2 = n2+1;}
		}
		if(myC[4].checked)	{n1 = n1+1;}
		if(myC[7].checked)	{n1 = n1+1;}
		if(n2==1){
			alert("Your answer is incomplete.  Please select another word.");
		}else if(n2 > 2){
			alert("Only two words can be selected. Please try again.");
		}
		else{
			if(n1==0){alert("Incorrect: Both words you chose are words that Professors Gotlieb and Hume were quoted for in the OED.");}
			if(n1==1){alert("Incorrect: You picked {correct word} correctly, but {incorrect word} is one of the words that Professors Gotlieb and Hume got credit for.");}
			if(n1==2){alert("Yes!  It is hard to believe that words we take for granted in computing were once so new." );
			n=n+2;}
		}				
	}
	sub2.onclick = function(){
		var myT = document.getElementsByClassName("text");
		var n = 0;	
		
	};
	sub3.onclick = function(){
			
	};
	sub4.onclick = function(){
		alert("您的分数为"+score);
	};
	
}

$(document).ready(function(){
  $("#main").submit(function(event){
    var inputText = $("input").val();
    var cryptedText = "";
    var squareSize = 0;
    var table = [];
    var outputText = "";

    inputText = inputText.replace(/[.,\/#!$%\^&\*';:{}=\-_`~()]/g,"")
    inputText = inputText.replace(/\s+/g, "");

    squareSize = Math.floor(Math.sqrt(inputText.length));

    for(var index = 0; index < squareSize; index++){
      table.push(inputText.slice(squareSize * index, squareSize * (index + 1)));
    }

    for(var outerIndex = 0; outerIndex < table.length; outerIndex++){
      for(var innerIndex = 0; innerIndex < squareSize; innerIndex++){
        if ((table[innerIndex][outerIndex]) || (table[innerIndex][outerIndex]) === 0){
          cryptedText += table[innerIndex][outerIndex];
        }
      }
    }

    var countWords = 0;
    while (countWords * 5 < inputText.length){
      outputText += cryptedText.slice(countWords * 5, (countWords + 1) * 5) + " ";
      countWords += 1;
    }

    $("#result").text(outputText.trim());
    //$("#result").text(cryptedText);

    event.preventDefault();
  });
});

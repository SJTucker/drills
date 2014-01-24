(function(){
  
  'use strict';

  $(document).ready(init);

  function init(){
    $('#makeWords').click(makeWords);
    $('#clear').click(clear);
    $('#buttonContainer').on('click', '.myWords', makeSentence);
  
  }

  function makeWords(){
    var wordStr = $('#textbox').val();
    var words = wordStr.split(' ');
    for(var i = 0; i < words.length; i++){
      var $wordButtons = $('<div class="myWords">' + words[i] + '</div>');
      $('#buttonContainer').append($wordButtons);
    }
  }

  function makeSentence(){
    var newWord = $(this).text();
    console.log(newWord);
    $('#sentence').append(newWord + ' ');
    
  }

  function clear(){
    alert('hey');
  }

})();

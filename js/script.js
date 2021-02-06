
$(function(){
// Static Elements
  let mainContainer = $('.main-container');
  let listInputContainer = $('.list-input-container');
// Dymanic Elements
  let listContainer = $('<div></div>').addClass('list-container')
  let addButton = $('.add-button');
  let listInput = $('.input');
  
  
  addButton.on('click', function(){
    let inputValue = listInput.val();
    console.log(listInput);
    buildCard(inputValue);
  })
  listInput.on('keydown', function(e){
    let inputValue = listInput.val();
    if(e.key === 'Enter') buildCard(inputValue);
  })

  function buildCard(value){
    if(!value) {
      alert('Please enter a task before trying to add one...');
      return;
    };
    let card = $('<div></div>').addClass('card');
    let cardTask = $('<span></span>').addClass('card__task');
    let cardRemove = $('<img>').attr('src', 'img/delete.svg').addClass('card__remove');
    console.log(cardRemove);

    mainContainer.append(listContainer);
    listContainer.append(card);
    card.append(cardTask);
    card.append(cardRemove);
    cardTask.append(value);

  // Eevet Listeners
    // Add list item

    // Strike through on click
    cardTask.on('click', function(){
      $( this ).toggleClass('checked');
      console.log('clicked')
    });
    // Remove card on clcik
    cardRemove.on('click', function(){
      $( this ).closest('.card').remove();
      removeListContainer();
    })

    $('.list-container').sortable();
    listInput.val('');
  }
  function removeListContainer(){
    if(!$('.card').length){
      listContainer.remove();
    }
  }
})




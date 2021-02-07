
$(function(){
// Static Elements
  let mainContainer = $('.main-container');
  let listInputContainer = $('.list-input-container');
// Dymanic Elements
  let listContainer = $('<div></div>').addClass('list-container')
  let addButton = $('.add-button');
  let listInput = $('.input');
  
// EventListeners for addCard button and enter keydown 
  addButton.on('click', function(){
    let inputValue = listInput.val();
    buildCard(inputValue);
  })
  listInput.on('keydown', function(e){
    let inputValue = listInput.val();
    if(e.key === 'Enter') buildCard(inputValue);
  })

// Builds card
  function buildCard(value){
  // Alert if no input is entered
    if(!value) {
      alert('Please type a task before trying to add one...');
      return;
    };
    let card = $('<div></div>').addClass('card');
    let cardTask = $('<span></span>').addClass('card__task');
    let cardRemove = $('<img>').attr('src', 'img/delete.svg').addClass('card__remove');
  // Append nodes to respective parent
    mainContainer.append(listContainer);
    listContainer.append(card);
    card.append(cardTask);
    card.append(cardRemove);
    cardTask.append(value);

  // Eevet Listeners
    // Strike through on click
    cardTask.on('click', function(){
      $( this ).toggleClass('checked');
    });
    // Remove card on clcik
    cardRemove.on('click', function(){
      $( this ).closest('.card').remove();
      removeListContainer();
    })
  // Enable list to be sortable
    $('.list-container').sortable();
  // Remove input text after create of card
    listInput.val('');
  }
  // Removes list container if no cards are in it
  function removeListContainer(){
    if(!$('.card').length){
      listContainer.remove();
    }
  }
})




var messageCounter = 0;

var FormView = {
  
  $form: $('#send'),
  

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit); //creates the event handler
    messageCounter = 1;
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var data = {};
    data.username = App.username;
    data.text = FormView.$form.find('input[name=message]').val();
    data.roomname = null;
    
    // create the message
    Parse.create(data);
    //store in messages.js
    //index- , message - messobj 
    if (Messages[0] === undefined) {
      Messages[0] = data;
    } else {
      Messages[messageCounter++] = data;
    }
    console.log(Messages);
    MessagesView.renderMessage(data);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

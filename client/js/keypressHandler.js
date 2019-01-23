
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});
$("button").on("click", (event) => {
  $.get('http://127.0.0.1:3000'), (direction) => {
    SwimTeam.move(direction);
  }
  });


console.log('this is my target:',);




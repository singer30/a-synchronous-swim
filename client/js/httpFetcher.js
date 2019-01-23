(function() {

  const serverUrl = 'http://127.0.0.1:3000';
  // create a variable named getDirection 
  const fetchDirection = () => {
    //   apply the fetch function
    console.log('luke')
     $.get({
       url: serverUrl,
       success: (direction) => {
         SwimTeam.move(direction);
       },
       complete: () => {
         setTimeout(fetchDirection, 250);
       }
     })
  }
  fetchDirection();
})();
console.log('yes it is')

const cells = document.getElementsByClassName('cell');
const shortestPathNodes = [10,11,19,27,26,25,24,32,40,48,49,50,51,43,44,45,46];

let activeNodeIndex = -1;

const adjacencyList = {
    "10":[2,9,11,18],
    "11":[3,12,19],
    "19":[20,27],
    "27":[26,28,35],
    "26":[25,34],
    "25":[17,24,33],
    "24":[16,32],
    "32":[40],
    "40":[48,41],
    "48":[56,49],
    "49":[50,57],
    "50":[42,51,58],
    "51":[52,43,59],
    "43":[36,44],
    "44":[45],
    "45":[46]
}

let activeListeneresOn = [];

function addListener(){
    activeNodeIndex += 1;
    let activeNode = shortestPathNodes[activeNodeIndex];
    if(activeNodeIndex === shortestPathNodes.length-1){
        alert('You Won!!');
        return;
    }
    cells[activeNode]
    .addEventListener('click',(e)=>{
        for(const i of adjacencyList[activeNode]){
            cells[i].classList.add('green');
        }
        if(activeNodeIndex !== 0)
            e.target.parentElement.classList.add('yellow');
        if(activeNodeIndex < shortestPathNodes.length) 
            addListener();
    })
    activeListeneresOn.push(activeNode);
}

window.onload = addListener;

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'Here is a notification body!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification('Hello world!', options);
    });
  }
}

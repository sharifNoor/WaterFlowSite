(function() {

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAW30u-IC1gsOvxFbtsmHj1fawHJrD0jJQ",
    authDomain: "waterflow-3b95d.firebaseapp.com",
    databaseURL: "https://waterflow-3b95d-default-rtdb.firebaseio.com",
    storageBucket: "waterflow-3b95d.appspot.com"
  };

  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  // var device3_lastUpdated = new Date();
  // var device4_lastUpdated = new Date();
  // var device5_lastUpdated = new Date();
  var device6_lastUpdated = new Date();
  /////////////////////////////////////////////////////////////////////////
  // Get element
  // const waterFlow3 = document.getElementById('FlowThree');
  // // Create references
  // const dbRefObject3a = firebase.database().ref().child('DeviceID_3').child('FlowRateFromFloatSwitch');
  // // Sync object changes
  // dbRefObject3a.on('value', snap => {
  //   console.log(snap.val())
  //   waterFlow1.innerText = JSON.stringify(snap.val(), null, 3);
  //   device3_lastUpdated = new Date();
  // });
  /////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
  // Get element
  // const TotalFlow3 = document.getElementById('TotalflowThree');
  // // Create references
  // const dbRefObject3b = firebase.database().ref().child('DeviceID_3').child('TotalLitresFromFloatSwitch');
  // // Sync object changes
  // dbRefObject3b.on('value', snap => {
  //   console.log(snap.val())
  //   TotalFlow3.innerText = JSON.stringify(snap.val(), null, 3);
  // });
  /////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////
  // Get element
  // const waterFlow4 = document.getElementById('FlowFour');
  // // Create references
  // const dbRefObject4a = firebase.database().ref().child('DeviceID_4').child('FlowRateFromFloatSwitch');
  // // Sync object changes
  // dbRefObject4a.on('value', snap => {
  //   console.log(snap.val())
  //   waterFlow4.innerText = JSON.stringify(snap.val(), null, 3);
  //   device4_lastUpdated = new Date();
  // });
  /////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////
  // Get element
  // const TotalFlow4 = document.getElementById('TotalFlowFour');
  // const TotalMonthlyFlow4 = document.getElementById('TotalMonthlyFlowFour');
  // // Create references
  // const dbRefObject4b = firebase.database().ref().child('DeviceID_4').child('TotalLitresFromFloatSwitch');
  // // Sync object changes
  // dbRefObject4b.on('value', snap => {
  //   console.log(snap.val())
  //   TotalFlow4.innerText = JSON.stringify(snap.val(), null, 3);
  //   TotalMonthlyFlow4.innerText = JSON.stringify(snap.val(), null, 3);
  // });
  /////////////////////////////////////////////////////////////////////////
  
  
  
/////////////////////////////////////////////////////////////////////////
  // Get element
  // const waterFlow5 = document.getElementById('FlowFive');
  // // Create references
  // const dbRefObject5a = firebase.database().ref().child('DeviceID_5').child('FlowRateFromFloatSwitch');
  // // Sync object changes
  // dbRefObject5a.on('value', snap => {
  //   console.log(snap.val())
  //   waterFlow5.innerText = JSON.stringify(snap.val(), null, 3);
  //   device5_lastUpdated = new Date();
  // });
  /////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////
  // Get element
  // const TotalFlow5 = document.getElementById('TotalFlowFive');
  // const TotalMonthlyFlow5 = document.getElementById('TotalMonthlyFlowFive');
  // // Create references
  // const dbRefObject5b = firebase.database().ref().child('DeviceID_5').child('TotalLitresFromFloatSwitch');
  // // Sync object changes
  // dbRefObject5b.on('value', snap => {
  //   console.log(snap.val())
  //   TotalFlow5.innerText = JSON.stringify(snap.val(), null, 3);
  //   TotalMonthlyFlow5.innerText = JSON.stringify(snap.val(), null, 3);
  // });


  /////////////////////////////////////////////////////////////////////////
  // Get element
  const waterFlow6 = document.getElementById('FlowSix');
  var todayFlow;
  const TotalFlow6 = document.getElementById('TotalFlowSix');

  const dbRefObject611 = firebase.database().ref().child('DeviceID_6').child('TotalLitresToday');
  const dbRefObject612 = firebase.database().ref().child('DeviceID_6');
  // Sync object changes
  
  // Create references
  const dbRefObject6a = firebase.database().ref().child('DeviceID_6').child('FlowRateFromFloatSwitch');
  // Sync object changes
  var FlowRate;
  dbRefObject6a.on('value', snap => {
    console.log(snap.val())
    FlowRate = (snap.val() - 150) / 10;
    waterFlow6.innerText = Math.round(FlowRate.toString());
    device6_lastUpdated = new Date();
  });
  
 
  // console.log('hahahh' + todayFlow)
  // dbRefObject612.set({
  //   TotalLitresToday: 150,
  // });

  
  

  /////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////
  // Get element
  const TotalMonthlyFlow6 = document.getElementById('TotalMonthlyFlowSix');
  // Create references
  const dbRefObject6b = firebase.database().ref().child('DeviceID_6').child('TotalLitresFromFloatSwitch');
  // Sync object changes
  dbRefObject6b.on('value', snap => {
    console.log(snap.val())
    TotalMonthlyFlow6.innerText = Math.round(snap.val() / 10).toLocaleString();
  });
  
  
  
  
  
  
  var idleInterval= setInterval(timerIncrement, 5000); // 1 Sec
  // var elmDevice3Status = document.getElementById('device3Status');
  // var elmDevice4Status = document.getElementById('device4Status');
  // var elmDevice5Status = document.getElementById('device5Status');
  var elmDevice6Status = document.getElementById('device6Status');
  
  
  function timerIncrement() {
    var currentDateTime  = new Date();
    currentDateTime.setSeconds(currentDateTime.getSeconds()-3);
    console.log('Current Time ' +currentDateTime +  ' & D1:'+device6_lastUpdated);
    
    // if(currentDateTime > device3_lastUpdated){
    //   //alert('Device 3 not connected');
    //   elmDevice3Status.innerText='OFF';
    //   waterFlow3.innerText = '0';
    // }
    // else {
    //   elmDevice3Status.innerText = 'ON';
    // }
    // if(currentDateTime > device4_lastUpdated){
    //   //alert('Device 4 not connected');
    //   elmDevice4Status.innerText = 'OFF';
    //   waterFlow4.innerText = '0';
    // }
    // else{
    //   elmDevice4Status.innerText = 'ON';
    // }
    // if(currentDateTime > device5_lastUpdated){
    //   //alert('Device 4 not connected');
    //   elmDevice5Status.innerText = 'OFF';
    //   waterFlow5.innerText = '0';
    // }
    // else{
    //   elmDevice5Status.innerText = 'ON';
    // }
    if(currentDateTime > device6_lastUpdated){
      //alert('Device 5 not connected');
      elmDevice6Status.innerText = 'OFF';
      waterFlow6.innerText = '0';
    }
    else{
      elmDevice6Status.innerText = 'ON';
    }
  }

}());

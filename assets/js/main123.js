(function() {


  /* ----------------------------- Current Date with Time ------------------- */
   
   var currentdate = new Date(); // Current Date
   var Hours = currentdate.getHours() ; // Hours
   var Mins = currentdate.getMinutes(); // Minutes
   var Months = currentdate.getDate()-1; // Day
   var TimeinMinutes = Hours  * 60 + Mins; // Time Covnert into Minutes
   var TodayFlowInMinutes = 1500; // Average filter per minute.
   var TodayFlowInMinutes1 = 1800;
   var TodayFlowInMinutes2 = 1000;
   var TotalFlow = 0;
   var TodayFlowRates = 0;
   var elmDevice1Status = document.getElementById('device1Status'); // Device1 status ON or Off
   var elmDevice2Status = document.getElementById('device2Status');// Device2 status ON or Off
  const TotalFlow1 = document.getElementById('TotalFlowOne')  // Device1 - Flow Rate 
  const waterFlow1 = document.getElementById('FlowOne');
  const waterFlow2 = document.getElementById('FlowTwo');
  const TotalFlow2 = document.getElementById('TotalFlowTwo')
  const waterFlow3 = document.getElementById('TotalMonthlyFlowOne');
  const TotalFlow3 = document.getElementById('TotalMonthlyFlowTwo')

  var MinsAfter5PM   = 0;
  if(TimeinMinutes > 1021){
    MinsAfter5PM =  TimeinMinutes - 1020; //1080-1020
  }



  var Min = (((Hours - 8  ) * 60 ) - MinsAfter5PM) + Mins;
  console.log(Min + " - " +TimeinMinutes + " - " + MinsAfter5PM  + " - " + Hours + " - " + Mins);
  var MonthInMins = ((Months * 8 ) * 60) ;

  var MithiFlowRate = TodayFlowInMinutes * Min ; 
  var IslamKotFlowRate = TodayFlowInMinutes1 * Min ;
  var MitthiCivilFlowRate = TodayFlowInMinutes2 * Min ; 

  var MonthlyFlowRateMithi = (TodayFlowInMinutes * MonthInMins) + MithiFlowRate;
  var MonthlyFlowRateIslamkot = (TodayFlowInMinutes1 *  MonthInMins)  + IslamKotFlowRate;

  var TotalFlowRate = TimeinMinutes > 1021 ? randomIntFromInterval(MithiFlowRate, MithiFlowRate + 1000) :  MithiFlowRate;
  var TotalFlowRate1 = IslamKotFlowRate;
  var TotalFlowRate2 = MitthiCivilFlowRate;
  var TotalFlowRates = MonthlyFlowRateMithi ;
  var TotalFlowRates1 = MonthlyFlowRateIslamkot;

  if(TimeinMinutes < 539){
    TotalFlowRate = 0;
    TotalFlowRate1 = 0;
    TotalFlowRate2 = 0;

   
  }

  setInterval(function() {

    /********************************************* Plant Mitthi *************************************************/
     
      const FlowRate1 = TimeinMinutes > 539 && TimeinMinutes < 1021 ? randomIntFromInterval(55, 200) :randomIntFromInterval(0, 0)  // Rand Number 
      waterFlow1.innerText = FlowRate1.toLocaleString();  
      
      TotalFlowRate +=  FlowRate1 ; 
      // waterFlow1.innerText = TotalFlowRate.toLocaleString()  ;
      // TotalFlowRate += FlowRate1;
      TotalFlow2.innerText = TotalFlowRate.toLocaleString() ; 


  /********************************************* Plant IslamKot *************************************************/

  const FlowRate2 =  TimeinMinutes > 539 && TimeinMinutes < 1021 ?  randomIntFromInterval(45, 180) :  randomIntFromInterval(0, 0);
  waterFlow2.innerText = FlowRate2.toLocaleString();
  
  TotalFlowRate1 +=  FlowRate2 ;
  TotalFlow1.innerText = TotalFlowRate1.toLocaleString() ;
  TotalFlowRates1 +=  FlowRate2 ;
  // TotalFlow3.innerText = TotalFlowRates1.toLocaleString();
      }, 1000);
      
      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

  if(TimeinMinutes > 539 && TimeinMinutes < 1021 ){ // If It is between 9 to 5
   
      elmDevice1Status.innerText = 'ON';
      elmDevice2Status.innerText = 'ON';
 
  }
  else {
    elmDevice1Status.innerText = 'OFF';
    elmDevice2Status.innerText = 'OFF';


  }

}());

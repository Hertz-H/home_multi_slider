function counter(){
    var end_date=new Date('jan 29,2022 00:00:00').getTime();
    var current_date=new Date().getTime();
    var remain_time= end_date - current_date;
    var seconds=1000;
    var mins= 60 * seconds;
    var hours= 60 * mins;
    var days= 24 * hours;

    var remain_days= Math.floor(remain_time/days);
    var remain_hours= Math.floor((remain_time%days)/hours);
    var remain_mins= Math.floor((remain_time%hours)/mins);
    var remain_seconds= Math.floor((remain_time%mins)/seconds);
    
    var remain_days_span=document.querySelectorAll("#d");
    // remain_days_span.innerHTML=remain_days;
    var remain_hours_span=document.querySelectorAll("#h");
    // remain_hours_span.innerHTML=remain_hours;
    var remain_mins_span=document.querySelectorAll("#m");
    // remain_mins_span.innerHTML=remain_mins;
    // var remain_seconds_span=document.querySelectorAll("#s");
    // remain_seconds_span.innerHTML=remain_seconds;
  for(let i=0;i<remain_days_span.length;i++){
    remain_days_span[i].innerHTML=remain_days;
    remain_hours_span[i].innerHTML=remain_hours;
    remain_mins_span[i].innerHTML=remain_mins;

   }
   

    


}
// setInterval(counter,6000000);

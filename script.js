const msg=document.getElementById("msg")
const hr=document.getElementById("hour")
const mn=document.getElementById("minute")
const sc=document.getElementById("second")
const deg=6
setInterval(() => {
    let myDate=new Date
    let hh=myDate.getHours()*30
    let mm=myDate.getMinutes()*deg
    let ss=myDate.getSeconds()*deg
    let TimeString=myDate.toLocaleTimeString()
    let status=TimeString.substring(8, 10)
    messagePrint()
    function messagePrint(){
        switch(true){
            case ((status=="AM") && (hh>=5) && (hh<=11)):
                msg.innerText="Good Morning";break;
            case ((status=="PM") && (hh>=5) && (hh<=12)):
                msg.innerText="Good Afternoon";break;
            case ((status=="PM") && (hh>=5) && (hh<=7)):
                msg.innerText="Good Evening";break;
            case ((status=="AM") && (hh<=4)):
                msg.innerText="Good Night";break;
            case ((status=="PM") && (hh>=9)):
                msg.innerText="Good Night";break;
            default:
                msg.innerText=`Have a Good Time`;break;
        }
    }
    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform=`rotateZ(${mm}deg)`
    sc.style.transform=`rotateZ(${ss}deg)`

}, 1000);

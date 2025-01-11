const msg=document.getElementById("msg")
const hr=document.getElementById("hour")
const mn=document.getElementById("minute")
const sc=document.getElementById("second")
const deg=6
console.log("hi")
setInterval(() => {
    let myDate=new Date
    let hh=myDate.getHours()*30
    // let hhh=myDate.getHours()
    let mm=myDate.getMinutes()*deg
    let ss=myDate.getSeconds()*deg
    let TimeString=myDate.toLocaleString()
    let status=TimeString.substring(8, 10)
    // console.log(status)
    // console.log(hhh)
    messagePrint()
    function messagePrint(){
        switch(true){
            case ((status=="AM") && (hhh>=5) && (hhh<=11)):
                msg.innerText="Good Morning";break;
            case ((status=="PM") && (hhh>=5) && (hhh<=12)):
                msg.innerText="Good Afternoon";break;
            case ((status=="PM") && (hhh>=5) && (hhh<=7)):
                msg.innerText="Good Evening";break;
            case ((status=="AM") && (hhh<=4)):
                msg.innerText="Good Night";break;
            case ((status=="PM") && (hhh>=9)):
                msg.innerText="Good Night";break;
            default:
                msg.innerText=`Have a Good Time`;
        }
    }
    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform=`rotateZ(${mm}deg)`
    sc.style.transform=`rotateZ(${ss}deg)`

}, 1000);

$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24*60*60*1000;

    for(var x=0;x<topicCount;x++)
    {
        var date = new Date(startDate.getTime()+7*x*millisecsPerDay);
        $("#courseTable").append("<tr>"+
        `<td>${x+1}</td>`+
        `<td>${(date.getMonth()+1) + '/' + (date.getDate())}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>");
        if(topic[x] == '國定假日')
        {
            document.getElementById("courseTable").rows[x+1].style.color = "gray";
        }
    }
});

$(function(){
    $("#set_date").on("change",function(){
        input = document.getElementById("set_date").value;
        month = input.toString().substring(5,7);
        day = input.toString().substring(8);
        month = parseInt(month);
        day = parseInt(day);
        setMonthAndDay(month,day);

        let topicCount = topic.length;
        let millisecsPerDay = 24*60*60*1000;   
        for(var x=1;x<topicCount;x++)
        {
            //var date = new Date(startDate.getTime()+7*(x-1)*millisecsPerDay);
            document.getElementById("courseTable").rows[x].cells[1].innerHTML = (new Date(startDate.getTime()+7*(x-1)*millisecsPerDay)).toLocaleDateString().toString().substring(5);
        }

    });
});
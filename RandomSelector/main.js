$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        randomChildNumber += 1;
        let randomImg = randomChildNumber.toString();
        $("img").attr("src","RandomSelector/"+randomImg+".jpg")
    });
});
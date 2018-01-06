
//GLOBALS VARS
var timeOnPageLoad = new Date().getTime();

function beenOnPage() {
//new date time to cal diff
var timeNow = new Date().getTime();
//get time diff in milsec
var timeDiff = timeNow - timeOnPageLoad;
//calc diff in human readable
var seconds = Math.floor( (timeDiff/1000)%60 );
var minutes = Math.floor( (timeDiff/(1000*60))%60 );
var hours =   Math.floor( (timeDiff/(1000*60*60))%24 );
var time = "You have been on this page for ";

if (hours > 0) {
    time += hours + " hour(s), " + minutes + " minute(s), and " + seconds + " seconds.";
    }
else if (minutes > 0) {
    time += minutes + " minutes, and " + seconds + " seconds.";
} else {
     time +=  seconds + " seconds.";
}

document.getElementById("beenOnPage").innerHTML = time;
}

//function for building obj
function BuildArticles(headline, summary, image, link, bgcolor) {
this.headline = headline;
this.summary = summary;
this.image = image;
this.link = link;
this.bgcolor = bgcolor;
}

//declarate objects data
var ArticleObj = {};
ArticleObj.article1 = new BuildArticles( "Worldpost",
                                         "Swedish Police Featured In Film Shown By Fox News",
                                         "https://i.imgur.com/BetQ9X9.jpg",
                                         "https://goo.gl/mCosSb",
                                         "#FFDB82");

ArticleObj.article2 = new BuildArticles( "Taste",
                                         "What’s For Dinner: Beef Larb Is More Than A Funny-Sounding Word",
                                         "https://i.imgur.com/FeLCAVr.jpg",
                                         "https://goo.gl/CfK7bf",
                                         "#CFEFFC");

ArticleObj.article3 = new BuildArticles( "Entertainment",
                                         "Simpson Kills The ‘South Park’ Kids In New Couch Gag",
                                         "https://i.imgur.com/FHyvNhG.png",
                                         "https://goo.gl/YizdGC",
                                         "#EBEBDF");

//array with objects
var ArticleArray = [];
ArticleArray.push(ArticleObj.article1);
ArticleArray.push(ArticleObj.article2);
ArticleArray.push(ArticleObj.article3);

//change DOM
function changeArticle(i) {
document.getElementById("newsTicker").style.backgroundColor = ArticleArray[i].bgcolor;
document.getElementById("header").innerHTML = ArticleArray[i].headline;
document.getElementById("summary").innerHTML = ArticleArray[i].summary;
document.getElementById("image").src = ArticleArray[i].image;
document.getElementById("link").href = ArticleArray[i].link;
}

var arrayIndex = 0;
changeArticle(arrayIndex);

setInterval(function() {
    changeArticle(arrayIndex);//change DOM base on array index
    ++arrayIndex;
    if (arrayIndex >= ArticleArray.length) {
        arrayIndex = 0;
    }
}, 5000);

setInterval(beenOnPage, 1000);

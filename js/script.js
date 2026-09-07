document.getElementById("fortuneBtn").addEventListener("click", function() {

	if(!canFortuneToday()){
		document.getElementById("todayCheckResult").textContent = "また明日👋" ;
		return ;
	}

    const fortunes = [
        "✨ 大吉！",//今日は最高の1日！
        "😊 中吉！",//良いことが起こりそう！
        "🙂 小吉！",//落ち着いた1日に！
        "🌿 吉！",//気楽に行こう！
        "💦 凶… "//無理しないでね！
    ];

    const items = [
        "ぬいぐるみ🧸",
        "チョコレート🍫",
        "帽子👒",
        "白湯🍵",
        "パズル🧩"
    ];

    const color = [
        "赤❤️",
        "青💙",
        "黄💛",
        "紫💜",
        "緑💚"
    ];

    // ランダム選択
    const resultText = fortunes[Math.floor(Math.random() * fortunes.length)] ;
    const itemText = items[Math.floor(Math.random() * items.length)] ;
    const colorText = color[Math.floor(Math.random() * color.length)] ;

    
    // 表示
    document.getElementById("fortuneResult").textContent = resultText ;
    document.getElementById("item").textContent = itemText ;
    document.getElementById("color").textContent = colorText ;

    // カード表示
    const card = document.getElementById("card") ;
    
	// 表示する
	card.classList.remove("hidden") ;
	document.getElementById("todayCheckResult").textContent = ""
	localStorage.setItem('lastFortuneDate', getToday()) ;
}) ;

let count = 0;
document.querySelector('h1').addEventListener('click', () => {
	  count++;
	  if (count === 5) {
		  localStorage.removeItem('lastFortuneDate') ;
		  count = 0 ;
	  }
});
/**************************/
/* 今日の日付を取得
/**************************/
function getToday(){
    const today = new Date() ;
    return today.toISOString().split('T')[0] ;
}

/**************************/
/* 占えるか判定
/**************************/
function canFortuneToday() {
	  const lastDate = localStorage.getItem('lastFortuneDate') ;
	  const today = getToday() ;
	  let flg = false ;
	  
	  // 最後に占った日が今日か判定
	  if(lastDate != today){
		  flg = true ;
	  }

	  return flg ;
}
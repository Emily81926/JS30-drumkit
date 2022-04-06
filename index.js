const keyboard = document.querySelectorAll('.key')

for (let i = 0; i < keyboard.length; i++) {
  const sound = keyboard[i]

  //在所有按鍵加上監聽
  sound.addEventListener('click', (e) => {
    //取得按鍵的data-key，並存成audioNumber
    const audioNumber = sound.dataset.key
    
    //播放與按鍵相同data-key的鼓聲
    makeTheBeat(audioNumber)
  })
}

//播放鼓聲
function makeTheBeat(keycode) {
   //宣告音檔的dataset.key跟keyboard的dataset.key相同，則播放該鼓聲
  const audio = document.querySelector(`audio[data-key="${keycode}"]`)
  audio.play()
}


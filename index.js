//播放鼓聲
function makeTheBeat(keycode) {
  //宣告音檔的dataset.key跟keyboard的dataset.key相同，則播放該鼓聲
  const audio = document.querySelector(`audio[data-key="${keycode}"]`)
  audio.play()
}


document.addEventListener('keydown', (e) => {
  //當按按鍵的時候可以取得該keycode
  const code = e.keyCode //為什麼keycode會被劃掉？
  //當按按鍵的時候，按鍵本身會有不同的視覺效果
  const key = document.querySelector(`.key[data-key="${code}"]`)
  key.classList.add('playing')
  //當按鍵的keycode跟音擋的keycode相同時，播放音樂
  makeTheBeat(code)
})


//當播放鼓聲後，鼓聲會停止播放


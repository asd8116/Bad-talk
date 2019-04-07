// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define things user might want
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code ', '爆個肝'],
  designer: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常', '很輕鬆']

function badTalk({
  job
}) {
  return job ?
    `身為一個${job}${sample(task[job])}${sample(phrase)}吧 (๑¯∀¯๑)b` :
    '請選擇一個人物 (σ ﾟДﾟ)σ !!';
}

module.exports = badTalk
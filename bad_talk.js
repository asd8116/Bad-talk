// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function badTalk(options) {
  // define things user might want
  const target = ['工程師', '設計師', '創業家']

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code', '爆個肝'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '很輕鬆']

  // create a collection to store things user picked up
  let collection = []

  if (options.engineer === 'on') {
    collection = collection.concat(target[0], sample(task.engineer))
  }

  if (options.designer === 'on') {
    collection = collection.concat(target[1], sample(task.designer))
  }

  if (options.entrepreneur === 'on') {
    collection = collection.concat(target[2], sample(task.entrepreneur))
  }

  collection = collection.concat(sample(phrase))

  // return error notice
  if (collection.length === 1) {
    return '請選擇一個人物 (σ ﾟДﾟ)σ !!'
  } else if (collection.length >= 4) {
    return '請不要亂玩 ╰(#ﾟ皿ﾟ)╯'
  }

  // start generating
  let speech = ''
  speech += '身為一個' + collection + '吧 (๑¯∀¯๑)b'

  // return the generated
  return speech
}

module.exports = badTalk
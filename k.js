
var button = document.getElementById('begin')

button.addEventListener('click', function () {
  var start = window.confirm('You find yourself trapped in an interrogation room in Sedna Station in the Kuiper Belt, you have been detained on the authority of A U.N. Marshall." What will it be Henrik? Will you work for us or not?')
  var start = window.prompt('yes or no? Perhaps bargin?')
  start = start || ''
  start = start.trim().toLowerCase()
  if (start === 'yes') {
    window.alert('A wise choice Henrik, do your job well and you will not spend the rest of your life in a jail cell on the moon')
  } else if (start === 'no') {
    window.alert('You are making a serious mistake, perhaps you will reconsider? I will flip a coin, if you win you live, if you lose you die.')
    var ld = window.prompt('1 for heads, 2 for tails.')
    ld = ld || ''
    ld = ld.trim().toLowerCase()
    ld = parseInt(ld)
    if (isNaN(ld)) {
      ld = 1
    }
    if (ld === 1 || ld === 2) {
      window.alert('ha, you are too valuable to use alive, we will not kill you just yet.')
    } else {
      window.alert('This was not something you could opt out of, take him away.')
    }
  } else if (start === 'bargin') {
    window.alert('You have overplayed your hand Henrik, you have nothing to bargin with. Take him away.')
  } else {
    window.alert('You should have made a choice, take him away.')
  }
  var gamble = window.confirm('You wake up in a stupor in the bathroom of the local casino on the station. You do not remember anything.')
  var g1 = window.confirm('As a creature of habit you proceed to the gaming tables where you place your bets.')
  var g3 = window.confirm('You have 10,000 credits on you. You bet it all.')
  var g2 = Math.random()
  if (g2 > 0.5) {
    window.alert('You lose everything and are now stranded on the station.')
  } else if (g2 < 0.4) {
    window.alert('You earn a substantial fortune from your bet.')
  } else {
    window.alert('You should go home and rethink your life.')
  }
}
)

const $enterScreen = $('<section>').css('width', '100vw').css('height', '100vh').css('background', 'yellow').css('border', 'solid').css('display', 'flex')
let $square = $('<div>').css('width', '30vw').css('height', '30vh').css('border', 'black')
$enterScreen.append('$square')
let $button = $('<button>')
$('body').prepend($enterScreen)


// entry screen
const $enterScreen = $('<section>').css({'width': '100vw', 'height': '100vh', 'background-size': 'cover', 'display': 'flex', 'align-items': 'center', 'justify-content': 'center', 'box-shadow': '5px 5px 10px #888888',}).addClass('background')     
let $square = $('<div>').css({'width':'100vw','height':'100vh','display':'flex','align-items':'center','justify-content': 'center', 'background':'rgba(230,230,230,0.3)',})
let $button = $('<button>').html('ENTER').css('font-size', '13vw').css('letter-spacing', '2%').css('font-family', 'Barrio').css('background-color', 'rgba(244, 244, 244, 0.7)').css('border', 'solid').css('padding', '2%')
$('body').prepend($enterScreen) 
$enterScreen.append($square)
$square.append($button)
$('main').hide()
// button functions
$button.mouseover(function(){
    $button.css('background', 'rgb(83, 177, 231)').css('box-shadow', '10px 10px 15px #111111')
})
$button.mouseout(() => $button.css('background-color', 'rgba(244,244,244,0.7)').css('border', 'solid').css('box-shadow', '5px 5px 10px #888888'))
$button.on('click')

$button.click(function(){
    $enterScreen.slideUp()
    $('main').show('slow')
}); 

$portfolioButton = $('.portfolioButton')
console.log("$portfolioButton", $portfolioButton)
$portfolioContainer = $('article:nth-of-type(2)')
console.log("$portfolioContainer", $portfolioContainer)

$portfolioButton.click(function(){
    $(this).hide()
    $portfolioContainer.css('height', '100vh')
    $potfolioButton.hide()
    $portfolioDiv=('<div>')
    $returnDiv
    $returnButton = $('<button>').
    $portfolioContainer.append($returnButton)
})

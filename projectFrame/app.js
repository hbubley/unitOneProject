// entry screen
const $enterScreen = $('<section>').css({'width': '100vw', 'height': '100vh', 'background-size': 'cover', 'display': 'flex', 'align-items': 'center', 'justify-content': 'center', 'box-shadow': '5px 5px 10px #888888',}).addClass('background')     
let $square = $('<div>').css({'width':'100vw','height':'100vh','display':'flex','align-items':'center','justify-content': 'center', 'background':'rgba(230,230,230,0.3)',})
let $button = $('<button>').html('ENTER').css('font-size', '13vw').css('letter-spacing', '2%').css('font-family', 'Barrio').css('background-color', 'rgba(244, 244, 244, 0.7)').css('border', 'solid').css('padding', '2%')
$('body').prepend($enterScreen) 
$enterScreen.append($square)
$square.append($button)
$('main').hide()

//portfolio variables
let $portfolioButton = $('.portfolioButton')
let $portfolioContainer = $('#portfolio')
let $portfolioDiv=$('<div>')
let $returnButton = $('<button>').html('Click me to go back!')

//create portfolio functions
function addPortfolioApp(projects){
        $portfolioDiv.css({'width':'80%', 'height': '80%','border': 'solid','display': 'flex','align-items': 'center','justify-content': 'space-between', 'flex-direction':'row', 'flex-wrap':'wrap','box-shadow': '5px 5px 10px #888888', 'background':'rgba(244,244,244,0.8)', 'margin-top':'2%'})
        for (let i = 0; i < projects.length; i++) {
            let $card = `<div class="card">
                <img class="pImg" src="${projects[i].image}"></img>
                <div class="cardOverlay">
                    <h4>${projects[i].title}</h4>
                    <p>${projects[i].description}</p>
                    <a href="${projects[i].url}" target="_blank">Check me out!</a>
                </div>
            </div>`
            $portfolioDiv.append($card)
        }
  }

function fetchPortfolio(){
    let source = `https://spreadsheets.google.com/feeds/list/1WyGCKMlb_Wjs-_k6ZnE4cY0yhIPW3CvR4YogUg9QAQs/od6/public/values?alt=json`;
    fetch(source)
      .then(res => res.json())
      .then(data => {
            let projects = data.feed.entry.map(project => {
              return{
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                description: project.gsx$description.$t,
                url: project.gsx$url.$t,
              }
            })
            addPortfolioApp(projects)
      })}
fetchPortfolio();
    
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

$portfolioButton.click(function(){
    $(this).hide()
    $returnButton.show()
    $portfolioContainer.css({'display':'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content':'space-between',})
    $portfolioContainer.append($returnButton)
    $portfolioContainer.append($portfolioDiv)
    $portfolioDiv.show()
    
})

$returnButton.click(function(){
    $(this).hide()
    $portfolioButton.show()
    $portfolioContainer.css('height', 'auto')
    $portfolioDiv.hide()
})

// entry screen
const $enterScreen = $('<section>').css({'width': '100vw', 'height': '100vh', 'background-size': 'cover', 'display': 'flex', 'align-items': 'center', 'justify-content': 'center', 'box-shadow': '5px 5px 10px #888888',}).addClass('background')     
let $square = $('<div>').css({'width':'100vw','height':'100vh','display':'flex','align-items':'center','justify-content': 'center', 'background':'rgba(230,230,230,0.3)',})
let $button = $('<button>').html('ENTER').css('font-size', '13vw').css('letter-spacing', '2%').css('font-family', 'Barrio').css('background-color', 'rgba(244, 244, 244, 0.7)').css('border', 'solid').css('padding', '2%')
$('body').prepend($enterScreen) 
$enterScreen.append($square)
$square.append($button)
$('main').hide()


//aboutMe section
let $aboutMeDescription = $('#aboutMeDescription > p')

let $aboutMeButton = $('#aboutMeButton').addClass('deleteButton');
$aboutMeDescription.hide()
let $deleteButton = $('<button>').html('DELETE THE TEXT').addClass('deleteButton');
$deleteButton.hide()
$('#aboutMeDescription').append($deleteButton)
$aboutMeButton.click(function(){
    $aboutMeDescription.toggle()
    $aboutMeButton.toggle()
    $deleteButton.toggle()
})
$deleteButton.click(function(){
    $aboutMeDescription.toggle()
    $aboutMeButton.toggle()
    $deleteButton.toggle()
})

//portfolio variables
let $portfolioButton = $('.portfolioButton')
let $portfolioContainer = $('article:nth-of-type(2)')
let $portfolioDiv=$('<div>')
let $returnButton = $('<button>').html('Click me to go back!')

//create portfolio functions
function addPortfolioApp(projects){
        $portfolioDiv.css({'width':'97%', 'height': '80%','border': 'solid','display': 'flex','align-items': 'center','justify-content': 'space-between', 'flex-direction':'row', 'flex-wrap':'wrap','box-shadow': '5px 5px 10px #888888', 'background':'rgba(244,244,244,0.8)', 'margin-top':'2%'})
        for (let i = 0; i < projects.length; i++) {
            let $card = `<div class="card">
                <img class="pImg" src="${projects[i].image}"></img>
                <div class="cardOverlay">
                    <h4>${projects[i].title}</h4>
                    <div class="iconDescription">
                        <i class="${projects[i].description}"></i>
                        <i class="${projects[i].description2}"></i>
                        <i class="${projects[i].description3}"></i>
                    </div>
                    <a href="${projects[i].url}" target="_blank"><h1>[Check me out!]</h1></a>
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
                description2: project.gsx$description2.$t,
                description3: project.gsx$description3.$t,
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
$button.mouseout(() => $button.css('background-color', 'rgba(244,244,244,0.7)').css('border', 'solid 1.5ps').css('box-shadow', '5px 5px 10px #888888'))
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


//cat stuff
// let $catDiv = $('<div>').css({'border':'solid', 'display':'flex', 'justify-content':'center', 'align-items':'center', 'max-height':'30vw'})
// let $catButton=$('#specialButton')

// $catImg=$('<img>').attr({'src':'https://res.cloudinary.com/dum4u7sro/image/upload/v1583789475/Untitled_design_3_sbevnh.png'}).css('height','40vw')

// $catButton.click(function(){
//     $('nav').after($catDiv);
//     $catDiv.append($catImg);
// })


//form api connecting it to google sheet https://github.com/jamiewilson/form-to-google-sheets learned how here


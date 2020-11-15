const apiManager = new APIManager()
const renderer = new Renderer()


$('.buttons').find('button:first-child').click(function(){
    apiManager.callApis()
})
$('.buttons').find('button:last-child').click(function(){
    const data = apiManager.getData()
    renderer.renderAll(data)
})

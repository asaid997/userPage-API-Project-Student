const apiManager = new APIManager()
const renderer = new Renderer()


$('.buttons').find('button:first-child').click(function () {
    apiManager.callApis()
})
$('.buttons').find('button:last-child').click(function () {
    const data = apiManager.getData()
    if (Object.keys(data).length !== 0)
        renderer.renderAll(data)
})

$('.extension-buttons').find('button:first-child').click(function () {
    localStorage.clear()
    localStorage.setItem("data",JSON.stringify(apiManager.getData()))
})
$('.extension-buttons').find('button:last-child').click(function () {
    const data = JSON.parse(localStorage.data)
    console.log(data)
    if (Object.keys(data).length !== 0)
        renderer.renderAll(data)
})
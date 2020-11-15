const apiManager = new APIManager()
const renderer = new Renderer()
const lsHandler = new LSHandler()


$('.buttons').find('button:first-child').click(() => apiManager.callApis())

$('.buttons').find('button:last-child').click(function () {
    const data = apiManager.getData()
    if (Object.keys(data).length !== 0)
        renderer.renderAll(data)
})

//******************* Extension 3 *******************
const renderSavedUsers = () => renderer.renderLocalySavedUsers({ data: lsHandler.getData() })

//save users to local
$('.extension-buttons').find('button:first-child').click(function () {
    lsHandler.addToLocal(apiManager.getData())
    renderSavedUsers()
})
//render saved users
$('#saved-users').on("click", ".saved-items", function () {
    const data = lsHandler.getData()
    const id = $(this).data('id')
    renderer.renderAll(data.filter((user) => user.id == id)[0].user)
})

renderSavedUsers()


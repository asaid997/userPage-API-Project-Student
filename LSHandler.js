class LSHandler {
    constructor() {
        if (localStorage.userId == undefined)
            localStorage.userId = 1
    }

    ifUserIsInLocal = (localArray, currentData) => localArray.every((data) => data.user.user.results[0].name.first !== currentData.user.results[0].name.first && data.user.user.results[0].name.last !== currentData.user.results[0].name.last && data.user.pokemon.id !== currentData.pokemon.id)

    getData = () => JSON.parse(localStorage.data || "{}")

    ifObjectIsEmpty = (obj) => (Object.keys(obj).length === 0 && obj.constructor === Object)

    addToLocal = (currentData) => {
        let localArray
    
        if (!this.ifObjectIsEmpty(currentData)) {
            if (localStorage.data) {
                localArray = this.getData()
                if (this.ifUserIsInLocal(localArray, currentData))
                    localArray.push({ user: currentData, id: localStorage.userId++ })
                else return
            }
            else
                localArray = [{ user: currentData, id: localStorage.userId++ }]
    
            localStorage.setItem("data", JSON.stringify(localArray))
        }
    }

}
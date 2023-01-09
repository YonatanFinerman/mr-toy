
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'



const TOY_STORAGE_KEY = 'toyDB'
const PageSize = 10

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy

}

_createToys()


// function query(filterBy) {

//     // return axios.get(BASE_URL).then(res => res.data)
//     return storageService.query(TOY_STORAGE_KEY)

//         .then(toys => {
//             if (filterBy.txt) {

//                 const regex = new RegExp(filterBy.txt, 'i')
//                 toys = toys.filter(toy => regex.test(toy.txt))
//             }
//             if(filterBy.status==="active"){
//                 toys = toys.filter(toy=>!toy.isDone)
//             }
//             if(filterBy.status==="done"){
//                 toys = toys.filter(toy=>toy.isDone)
//             }

//             toys = toys.splice(filterBy.pageIdx*PageSize,PageSize)

//             return toys
//         })
// }

function query() {
    console.log('func')
    // return axios.get(BASE_URL).then(res => res.data)
    return storageService.query(TOY_STORAGE_KEY)


}



function getById(toyId) {
    return storageService.get(TOY_STORAGE_KEY, toyId)
}
function remove(toyId) {
    // return Promise.reject('Not now!')
    return storageService.remove(TOY_STORAGE_KEY, toyId)
}
function save(toy) {
    if (toy._id) {
        return storageService.put(TOY_STORAGE_KEY, toy)
    } else {
        // when switching to backend - remove the next line

        return storageService.post(TOY_STORAGE_KEY, toy)
    }
}


function getEmptyToy() {
    return {
        txt: '',
        isDone: false,
    }
}

function _createToy() {
    const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"]
    const lablesCount = utilService.getRandomIntInclusive(1, 3)
    const newLables = []
    for (let i = 0; i < lablesCount; i++) {
        let labelIdx = utilService.getRandomIntInclusive(0, labels.length - 1)
        newLables.push(labels[labelIdx])
    }
    return {

        _id: utilService.makeId(),
        name: utilService.makeLorem(2),
        price: utilService.getRandomIntInclusive(10, 600),
        labels: newLables,
        inStock: true,
        createdtAt: (Date.now() - utilService.getRandomIntInclusive(0, 315162504000)),
    }
}
function _createToys() {
    let toys = localStorage.getItem(TOY_STORAGE_KEY)
    if (!toys || !toys.length) {
        toys = []
        for (let i = 0; i < 20; i++) {
            toys.push(_createToy())
        }
        utilService.saveToStorage(TOY_STORAGE_KEY, toys)
    }


}

// const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outd
// oor", "Battery Powered"]
// const toy = {
//     "_id": "t101",
//     "name": "Talking Doll",
//     "price": 123,
//     "labels": ["Doll", "Battery Powered", "Baby"],
//     "createdAt": 1631031801011,
//     "inStock": true
// }








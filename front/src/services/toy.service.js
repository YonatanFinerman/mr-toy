
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
    getEmptyToy,
    getDefaultFilter,
    getLabels,
    getLabelAvgPrice,
    getLabelStockPrec

}

_createToys()

function getLabelAvgPrice(label,toys){

     toys=toys.filter(toy=>toy.labels.includes(label))
      let totalPrice = toys.reduce((acc,toy)=>{
            return acc+=toy.price

        },0)
        const avrPrice = totalPrice/toys.length
        return avrPrice
        
   
}
function getLabelStockPrec(label,toys){

     toys=toys.filter(toy=>toy.labels.includes(label))
      let totalprec = toys.reduce((acc,toy)=>{
         if(toy.inStock){

             return acc+=1
         }

        },0)
        const avrPrec =((totalprec/toys.length)*100).toFixed(2)
        return avrPrec
        
   
}




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

function getLabels(){
    return ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"]
}

function query(filterBy = getDefaultFilter()) {
    
    console.log('filterr?????????????????????????????????????????????????????????????',filterBy,'filterr')
    return storageService.query(TOY_STORAGE_KEY)
        .then(toys => {
            if (filterBy.sortBy === "time") {
                toys = toys.sort((a, b) => b.createdtAt - a.createdtAt)
            }
            if (filterBy.sortBy === "price") {
                toys = toys.sort((a, b) => a.price - b.price)
            }

            if (filterBy.sortBy === "name") {
                toys = toys.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (filterBy.labels && filterBy.labels.length){
                // console.log(filterBy.labels,'works')
                // filterBy.labels.forEach(label=>{
                //   toys =  toys.filter(toy=>toy.labels.includes(label))
                // })
               
                toys = toys.filter(toy=>{
                    filterBy.labels.forEach(label=>{
                        if(toy.labels.includes(label)){
                            return toy
                        }
                    })
                })
            }
            
            if (filterBy.inStock) {
               
                toys = toys.filter(toy => toy.inStock)
            }
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                toys = toys.filter(toy => regex.test(toy.name))
            }
            if (filterBy.maxPrice) {
                toys = toys.filter(toy => toy.price <= filterBy.maxPrice)
            }
            return toys
        })
}

// function query() {

//     // return axios.get(BASE_URL).then(res => res.data)
//     return storageService.query(TOY_STORAGE_KEY)


// }

function getDefaultFilter() {
    return { txt: '', maxPrice: 500, sortBy: '', inStock: false,labels:[] }
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
        
        toy.createdtAt = Date.now() 
        return storageService.post(TOY_STORAGE_KEY, toy)
    }
}


function getEmptyToy() {
    return {
        name: '',
        price: 0,
        labels:[],
        toyImgIdx: utilService.getRandomIntInclusive(1, 7),
        inStock: true,
        msgs:[]
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

    const newMsgs = []
    for (let i = 0; i < utilService.getRandomIntInclusive(0, labels.length - 1); i++) {
        let labelIdx = utilService.getRandomIntInclusive(0, labels.length - 1)
        newMsgs.push(utilService.makeLorem(4))
    }

    return {

        _id: utilService.makeId(),
        name: utilService.makeLorem(2),
        price: utilService.getRandomIntInclusive(10, 600),
        labels: newLables,
        inStock: true,
        createdtAt: (Date.now() - utilService.getRandomIntInclusive(0, 315162504000)),
        toyImgIdx: utilService.getRandomIntInclusive(1, 7),
        msgs:newMsgs

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








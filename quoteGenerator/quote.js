// https://forismatic.com/en/api/
// http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=xml&lang=en

let menuList = [
    {
        id: 1,
        img : './img/11.png',
        cat: 'breakfast',
        item: 'bread',
        des: 'this is the breakfast',
        price: '$245'
    },
    {
        id: 2,
        img : './img/22.png',
        cat: 'Lunch',
        item: 'Rice',
        des: 'this is the breakfast',
        price: '$55'
    },
    {
        id: 3,
        img : './img/33.png',
        cat: 'Dinner',
        item: 'Roasted Chicken',
        des: 'this is the breakfast',
        price: '$65'
    },
    {
        id: 4,
        img : './img/44.png',
        cat: 'Lunch',
        item: 'Jam and Cheese',
        des: 'this is the breakfast',
        price: '$342'
    },
    {
        id: 5,
        img : './img/11.png',
        cat: 'Lunch',
        item: 'Vegi',
        des: 'this is the breakfast',
        price: '$95'
    },
    {
        id: 6,
        img : './img/22.png',
        cat: 'Dinner',
        item: 'Beed and Rice',
        des: 'this is the breakfast',
        price: '$45'
    },
    {
        id: 7,
        img : './img/33.png',
        cat: 'breakfast',
        item: 'slices',
        des: 'this is the breakfast',
        price: '$55'
    },
    {
        id: 8,
        img : './img/44.png',
        cat: 'Lunch',
        item: 'slices',
        des: 'this is the breakfast',
        price: '$222'
    },
    {
        id: 9,
        img : './img/11.png',
        cat: 'Dinner',
        item: 'slices',
        des: 'this is the breakfast',
        price: '$11'
    },
    {
        id: 10,
        img : './img/11.png',
        cat: 'Dinner',
        item: 'slices',
        des: 'this is the breakfast',
        price: '$11'
    },
    {
        id: 11,
        img : './img/11.png',
        cat: 'Dinner',
        item: 'slices',
        des: 'this is the breakfast',
        price: '$11'
    },
    {
        id: 12,
        img : './img/11.png',
        cat: 'Eve',
        item: 'Refeshments',
        des: 'this is the breakfast',
        price: '$11'
    }
]

let catPanel = document.querySelector('.cat-sec')
let btnPanel = document.querySelector('.btnPanel')


window.addEventListener('DOMContentLoaded', function(){
    displayMenuItem(menuList)
    const categories = menuList.reduce(function(values, item){
        if(!values.includes(item.cat)){
            values.push(item.cat)
        }
        return values
    },['All'])
    const catBtns = categories.map(function(category){
        return `<button type="button" class="btn" data-id=${category}>${category}</button>`
    }).join('')
    btnPanel.innerHTML = catBtns
    let catBtn = document.querySelectorAll('.btn')
        
    catBtn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id
            const menuCategory = menuList.filter(function(menuItem){
                if(menuItem.cat === category){
                    return menuItem
                }            
            })
            if(category === 'All'){
                displayMenuItem(menuList) 
            }
            else {
                displayMenuItem(menuCategory)
            }
    
        })
    })
    
})

function displayMenuItem(menuItem){
    let catDisplay = menuItem.map(function(item){
        return `
        <div class="cat-panel">
            <img src = ${item.img} alt = ${item.cat}>
            <h2>${item.cat}</h2>
            <p>${item.item}</p>
            <p>${item.des}</p>
            <p>Price: $ ${item.price}</p>
        </div> `
    })

    catDisplay = catDisplay.join('')
    catPanel.innerHTML = catDisplay
}




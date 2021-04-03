// https://forismatic.com/en/api/
// http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=xml&lang=en

let shops = [
    {
        name: 'Khadi',
        shopCat: 'Clothing',
        minPrice: 1700,
        maxPrice: 35000,
        outlets: {
            karachi: 12,
            islamabad: 9,
            USA: 1
        }
    },
    {
        name: 'Maria B',
        shopCat: 'Clothing',
        minPrice: 1200,
        maxPrice: 9000,
        outlets: {
            karachi: 4,
            islamabad: 8,
            USA: 2
        }
    },
    {
        name: 'Gul Ahmed',
        shopCat: 'Clothing',
        minPrice: 1200,
        maxPrice: 9000,
        outlets: {
            karachi: 4,
            islamabad: 8,
            USA: 2
        }
    },
    {
        name: 'D Watson',
        shopCat: 'Medicine',
        minPrice: 100,
        maxPrice: 50000,
        outlets: {
            karachi: 18,
            islamabad: 22,
            USA: 0
        }
    },
]

let shopListClass = document.querySelector('.shopListPanel')

function displayShopList(shopList){
    let displayShop = shopList.map(function(item){
        return `<p>Brand Name: ${item.name} </p>
        <p>shopCat: ${item.shopCat}</p>
        <p>minPrice: ${item.minPrice}</p>
        <p>maxPrice: ${item.maxPrice}</p>
        <p>outlets: karachi: ${item.outlets.karachi}, islamabad: ${item.outlets.islamabad}, USA: ${item.outlets.USA}</p>`
    })

    displayShop = displayShop.join('')
    shopListClass.innerHtml = displayShop
    
}

window.addEventListener('DOMContentLoaded', function(){
    displayShopList(shops);
})
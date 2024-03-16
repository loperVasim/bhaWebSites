let subscriptionTypeData ={
    "basic": {
        "name": "BHA BASIC",
        "price": "USD$ 30",
        "serve1": "<i class='fa-solid fa-check'></i> 10:00-22:00 Məşq etmək",
        "serve2": "<i class='fa-solid fa-check'></i> Zaldakı bütün alətlərdən istifadə etmək",
        "serve3": "<i class='fa-solid fa-xmark'></i> Zal tərəfindən ləvazimatla təmin olunmaq",
    },
    "standart": {
        "name": "BHA STANDART",
        "price": "USD$ 45",
        "serve1": "<i class='fa-solid fa-check'></i> 10:00-22:00 Məşq etmək",
        "serve2": "<i class='fa-solid fa-check'></i> Zaldakı bütün alətlərdən istifadə etmək",
        "serve3": "<i class='fa-solid fa-check'></i> Zal tərəfindən ləvazimatla təmin olunmaq",
    },
    "premium": {
        "name": "BHA PREMIUM",
        "price": "USD$ 60",
        "serve1": "<i class='fa-solid fa-check'></i> 7/24 Məşq etmək",
        "serve2": "<i class='fa-solid fa-check'></i> Zaldakı bütün alətlərdən istifadə etmək",
        "serve3": "<i class='fa-solid fa-check'></i> Zal tərəfindən ləvazimatla təmin olunmaq",
    }
}
function buyButtonClick(subscriptionType){
    if (subscriptionType == "basic") {
        document.getElementById("sub_title").innerHTML = subscriptionTypeData.basic.name;
        document.getElementById("sub_price").innerHTML = subscriptionTypeData.basic.price;
        document.getElementById("serve1").innerHTML = subscriptionTypeData.basic.serve1;
        document.getElementById("serve2").innerHTML = subscriptionTypeData.basic.serve2;
        document.getElementById("serve3").innerHTML = subscriptionTypeData.basic.serve3;
    }else if(subscriptionType == "standart"){
        document.getElementById("sub_title").innerHTML = subscriptionTypeData.standart.name;
        document.getElementById("sub_price").innerHTML = subscriptionTypeData.standart.price;
        document.getElementById("serve1").innerHTML = subscriptionTypeData.standart.serve1;
        document.getElementById("serve2").innerHTML = subscriptionTypeData.standart.serve2;
        document.getElementById("serve3").innerHTML = subscriptionTypeData.standart.serve3;
    }else if(subscriptionType == "premium"){
        document.getElementById("sub_title").innerHTML = subscriptionTypeData.premium.name;
        document.getElementById("sub_price").innerHTML = subscriptionTypeData.premium.price;
        document.getElementById("serve1").innerHTML = subscriptionTypeData.premium.serve1;
        document.getElementById("serve2").innerHTML = subscriptionTypeData.premium.serve2;
        document.getElementById("serve3").innerHTML = subscriptionTypeData.premium.serve3;
    }

    document.getElementById("subscriptionPiece").style.display = "block";
}
function clickSpace() {
    document.getElementById("subscriptionPiece").style.display = "none";  
}
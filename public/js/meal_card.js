//const postMeal = document.querySelector('.postmeal');
const postBtn = document.getElementById('meal_create');
console.log(postBtn);
const url = 'https://df46868aaaa54b4da23f01cefe02aef9.vfs.cloud9.us-east-1.amazonaws.com/';
const endpoint = 'api/testpost';
const endpoint_mealcreate ='api/mealpost';

//import fetch from "node-fetch"

postBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // 入力フォームの値を取得
    const textForm = document.getElementById("postmeal").value;
});


// const createFetch = () => {
//     const data = {
//         ikku: 1
//     };
    
//     fetch(url+endpoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then((response) => {
//         if(!response.ok) {
//             console.log('Create error!');
//             throw new Error('error');
//         } 
//         console.log(response);
//         return response.json();
//     }).then((textForm)  => {
//         console.log(textForm);
//     }).catch((error) => {
//         console.log(error);
//     });
// };

// postBtn.addEventListener('click', createFetch, false);

const createMeal = () => {
    const textForm = document.getElementById("postmeal").value;
    fetch(url+endpoint_mealcreate, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textForm)
    }).then((response) => {
        if(!response.ok) {
            console.log('Create error!');
            throw new Error('error');
        } 
        console.log(response);
        return response.json();
    }).then((textForm)  => {
        console.log(textForm);
    }).catch((error) => {
        console.log(error);
    });
};

postBtn.addEventListener('click', createMeal, false);





//const postMeal = document.querySelector('.postmeal');
const postBtn = document.getElementById('meal_create');
console.log(postBtn);
const url = 'https://df46868aaaa54b4da23f01cefe02aef9.vfs.cloud9.us-east-1.amazonaws.com/';
const endpoint = 'api/testpost';
const endpoint_mealcreate ='api/mealpost';

const createMeal = () => {
    var textform =document.forms[0].elements['postmeal'].value
    fetch(url+endpoint_mealcreate, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textform)
    }).then((response) => {
        if(!response.ok) {
            console.log('Create error!');
            throw new Error('error');
        } 
        console.log(response);
        return response.json();
    }).then((textform)  => {
       
    }).catch((error) => {
        console.log(error);
    });
};

postBtn.addEventListener('click', createMeal, false);



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






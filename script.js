// var i = 1;
// function jivo_onMessageReceived(){
// 	console.log(i++);
// }

// function jivo_onLoadCallback(){
// 	jivo_api.setContactInfo({
// 	"name": "John Smith",
// 	"email": "email@example.com",
// 	"phone": "+14084987855",
// 	"description": "Description text"
// 	});
// }

// function jivo_onLoadCallback(){
// 	jivo_api.setCustomData([
// 		{
// 			"content": "User balance: $56",
// 		},
// 		{
// 			"content": "Open customer profile",
// 			"link": "www.google.com"
// 		},
// 		{
// 			"title": "Actions",
// 			"content": "Add contact",
// 			"link": "..."
// 		}
// 	]); 
// }

// let number = 5;
// const left = 1;

// number = 10;
// console.log(number);

// const obj = {
// 	a: 10
// };

// obj.a = 10;

// console.log(obj);

// let clientName = prompt('Как тебя зовут?', );
// let clientEmail = prompt('Напиши свой email', );
// let clientPhone = prompt('Укажи свой номер телефона', )

// function jivo_onLoadCallback() {
// 	jivo_api.setContactInfo({
//     name:  `${clientName}`,
//     email: `${clientEmail}`,
//     phone: `${clientPhone}` 
// });
// }

document.forms.publish.onsubmit = function() {
    var message = this.message.value;
    console.log(message);

    jivo_api.setContactInfo({
        name:  `${message}`
    });

    return false;
};


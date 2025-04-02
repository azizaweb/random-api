function changeUser(){
    fatch('https://randomuser.me/api/')
    .then(response => response.json ())
    .than(data =>{
        let user = data.result[0];
    })
}
function changeUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            let user = data.results[0];

           
            const userName = document.getElementById('userName');
            const userLocation = document.getElementById('userLocation');
            const userAge = document.getElementById('userAge');
            const userEmail = document.getElementById('userEmail');
            const userPhone = document.getElementById('userPhone');
            const userImage = document.getElementById('userImage');

            userName.textContent = `${user.name.first} ${user.name.last}`;
            userLocation.textContent = `${user.location.city}, ${user.location.country}`;
            userAge.textContent = `Age: ${user.dob.age}`;
            userEmail.textContent = user.email;
            userPhone.textContent = user.phone;
            userImage.src = user.picture.large;
            userImage.alt = `${user.name.first}'s profile picture`;
        })
        .catch(error => console.error('Error fetching user:', error));
}
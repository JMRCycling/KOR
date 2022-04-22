const login = document.getElementById("login");

// console.log(login)

login.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log('form has been submitted');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    var email = document.getElementById("email").value;
    urlencoded.append("email", email);
    var password = document.getElementById("password").value;
    urlencoded.append("password", password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://jmrcycling.com:3001/loginShop", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(('plan type ' + result.plan_type[0].plan_type));
            console.log(('shop_name ' + result.plan_type[0].shop_name));
            console.log(('token ' + result.plan_type[0].token));

            // set the session storage
            sessionStorage.setItem('shop_name', result.plan_type[0].shop_name)
            
            sessionStorage.setItem('token', result.plan_type[0].token)
            console.log(sessionStorage.getItem('shop_name'))
            console.log(sessionStorage.getItem('token'))
            // document.cookie =  "shop_name=" + encodeURIComponent(result.plan_type[0].shop_name) + "; token=" + result.plan_type[0].token + ";"
            // + "path=/; domain=jmrcycling.com";
            // document.cookie = "shop_name=" + encodeURIComponent(result.plan_type[0].shop_name) + ";"
            // document.cookie[1] = ("token=" + encodeURIComponent(result.plan_type[0].token) + ";")
            // cookie_string = document.cookie.split('; ')
            // console.log(cookie_string)
            // console.log(document.cookie)
            window.location.replace("./dashboard.html?plan_type=" + result.plan_type[0].plan_type + "&shop_name=" + result.plan_type[0].shop_name + "&token=" + result.plan_type[0].token);

        })
        .catch(error => console.log('error', error));

})
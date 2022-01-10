async function handleUserInfo(event){
    event.preventDefault();
    
    const username= document.querySelector('#username').value.trim();
    const email= document.querySelector('#username').value.trim();
    const password= document.querySelector('#password').value.trim();
    const password2= document.querySelector('#password2').value.trim();
    
    if (username && email && password && password2) {
        if (password !== password2) alert("Please enter your password correctly")
        else {
            const response = await fetch('/routes/users',{
                method:'post',
                body: JSON.stringify({
                    username,
                    email,
                    password
                }), 
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if (response.ok) {
                document.location.replace('/')
            }else {
                    alert(response.statusText);
                }
            }
            
        }
    
    }
    
    
    
    document.querySelector('#signUpForm').addEventListener('submit', handleUserInfo);
    
    
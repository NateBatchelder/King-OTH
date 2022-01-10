async function handleUserInfo(event){
    event.preventDefault();
    
    const username= document.querySelector('#username').value.trim();
    const password= document.querySelector('#password').value.trim();
    
    if (username && password) {
            const response = await fetch('/views/signedInHome',{
                method:'post',
                body: JSON.stringify({
                    username,
                    password
                }), 
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if (response.ok) {
                document.location.replace('/views/signedInHome')
            }else {
                    alert(response.statusText);
                }
            }
            
        }
    
    
    
    
    document.querySelector('#logInForm').addEventListener('submit', handleUserInfo);
    
    
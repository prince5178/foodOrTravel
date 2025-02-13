 function login() {
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            
            if(username && password) {
                document.getElementById('user').innerText = username;
                document.getElementById('loginContainer').style.display = 'none';
                document.getElementById('logoutContainer').style.display = 'block';
            } else {
                alert('Please enter username and password');
            }
        }

        function logout() {
            document.getElementById('loginContainer').style.display = 'block';
            document.getElementById('logoutContainer').style.display = 'none';
        }
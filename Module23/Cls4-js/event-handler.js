  document.getElementById('btn-update-title').addEventListener('click',
            function(){
                document.body.style.backgroundColor = 'red';

                const pageTitleElement = document.getElementById('page-title');
                pageTitleElement.innerText = 'updated page Title hehehee';
            }
        )



        document.getElementById('btn-login').addEventListener('click',
            function(){
              const userInfo = document.getElementById('user-info');
              userInfo.innerText = 'User Login Successfully';
            }
        )
document.addEventListener('DOMContentLoaded', () => {
    const userNameElem = document.getElementById('user-name');
    const userNameInfoElem = document.getElementById('user-name-info');
    const userEmailElem = document.getElementById('user-email');
    const userPhoneElem = document.getElementById('user-phone');
    const profileImgElem = document.getElementById('profile-img');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const editForm = document.getElementById('edit-form');

    // Função para preencher os dados do usuário na página
    function populateUserData(data) {
        userNameElem.textContent = data.name;
        userNameInfoElem.textContent = data.name;
        userEmailElem.textContent = data.email;
        userPhoneElem.textContent = data.phone;
        profileImgElem.src = data.profileImg;
    }

    // Obter os dados do usuário ao carregar a página
    fetch('http://localhost:3000/user')
        .then(response => response.json())
        .then(data => populateUserData(data))
        .catch(error => console.error('Erro ao buscar dados:', error));

    // Preencher o formulário de edição com os dados do usuário
    editBtn.addEventListener('click', () => {
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(data => {
                document.getElementById('name').value = data.name;
                document.getElementById('email').value = data.email;
                document.getElementById('phone').value = data.phone;
                document.getElementById('profileImg').value = data.profileImg;
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    });

    // Salvar as alterações e enviar para a API fictícia
    saveBtn.addEventListener('click', () => {
        const updatedData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            profileImg: document.getElementById('profileImg').value
        };

        // Validação simples de dados
        if (updatedData.name && updatedData.email && updatedData.phone && updatedData.profileImg) {
            fetch('http://localhost:3000/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
            .then(response => response.json())
            .then(data => {
                // Atualizar os dados locais após a resposta bem-sucedida da API
                populateUserData(data);
                // Fechar o modal
                $('#editModal').modal('hide');
            })
            .catch(error => console.error('Erro:', error));
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
    // expandir o tamanho da imagem ao clicar
    $(document).ready(function(){
        $('#profile-img').click(function(){
            var imgSrc = $(this).attr('src');
            $('#expanded-profile-img').attr('src', imgSrc);
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const userNameElem = document.getElementById('user-name');
    const userNameInfoElem = document.getElementById('user-name-info');
    const userEmailElem = document.getElementById('user-email');
    const userPhoneElem = document.getElementById('user-phone');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const editForm = document.getElementById('edit-form');

    // Dados fictícios do usuário
    const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        profileImg: 'default-avatar.png'
    };

    // Função para preencher os dados do usuário na página
    function populateUserData() {
        userNameElem.textContent = userData.name;
        userNameInfoElem.textContent = userData.name;
        userEmailElem.textContent = userData.email;
        userPhoneElem.textContent = userData.phone;
        document.getElementById('profile-img').src = userData.profileImg;
    }

    // Tornar os campos editáveis
    editBtn.addEventListener('click', () => {
        editForm.classList.toggle('hidden');
        if (!editForm.classList.contains('hidden')) {
            editBtn.textContent = 'Cancelar';
            document.getElementById('name').value = userData.name;
            document.getElementById('email').value = userData.email;
            document.getElementById('phone').value = userData.phone;
        } else {
            editBtn.textContent = 'Editar';
        }
    });

    // Salvar as alterações e enviar para a API fictícia
    saveBtn.addEventListener('click', () => {
        const updatedData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };

        // Validação simples de dados
        if (updatedData.name && updatedData.email && updatedData.phone) {
            fetch('https://api.ficticia.com/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
            .then(response => response.json())
            .then(data => {
                // Atualizar os dados locais após a resposta bem-sucedida da API
                userData.name = updatedData.name;
                userData.email = updatedData.email;
                userData.phone = updatedData.phone;
                populateUserData();
                editForm.classList.add('hidden');
                editBtn.textContent = 'Editar';
            })
            .catch(error => console.error('Erro:', error));
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Inicializar a página com dados do usuário
    populateUserData();
});

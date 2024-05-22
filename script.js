document.addEventListener('DOMContentLoaded', () => {
    const userNameElem = document.getElementById('user-name');
    const userCPFElem = document.getElementById('user-cpf');
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
        userCPFElem.textContent = data.cpf;
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
                document.getElementById('cpf').value = data.cpf;
                document.getElementById('email').value = data.email;
                document.getElementById('phone').value = data.phone;
                document.getElementById('profileImg').value = data.profileImg;
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    });
    
    // inclusão da máscara ao digitar o CPF no campo
    const campoCpf = document.getElementById('cpf');
    campoCpf.addEventListener("input", () => {
        let cpf = campoCpf.value.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        campoCpf.value = cpf;
    });

    // inclusão da máscara pra adicionar numero de celular
    const campoPhone = document.getElementById('phone')
    campoPhone.addEventListener("input", () => {
        let phone = campoPhone.value.replace(/\D/g, "").substring(0, 11);
        phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
        phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");
        
        campoPhone.value = phone;
    });

    // Salvar as alterações e enviar para a API fictícia
    saveBtn.addEventListener('click', () => {
        
        const updatedData = {
            name: document.getElementById('name').value,
            cpf: document.getElementById('cpf').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            profileImg: document.getElementById('profileImg').value
        };

        if (!CpfValido(updatedData.cpf)) {
            console.error('CPF inválido:', CpfValido);
            alert('CPF inválido. Por favor, insira um CPF válido.');
            return;
        }

        if (!validarEmail(updatedData.email)) {
            console.error('E-mail inválido:', updatedData.email);
            alert('E-mail inválido. Por favor, insira um e-mail válido.');
            return;
        }
        // Validação simples de dados
        if (updatedData.name && updatedData.cpf && updatedData.email && updatedData.phone && updatedData.profileImg) {
             
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
            console.error('Campos obrigatórios não preenchidos:', updatedData);
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Realiza a validação ao preencher o campo CPF
    function CpfValido(cpf) {
        cpf = cpf.replace(/\D/g, '');

        if (cpf.length !== 11) {
            console.error('CPF com tamanho inválido:', cpf);
            return false;
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            console.error('CPF com sequência repetida:', cpf);
            return false;
        }

        let soma = 0;
        let resto;

        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) {
            return false;
        }
        return true;
    }
    // validação do campo email
    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    // expandir o tamanho da imagem ao clicar
    $(document).ready(function(){
        $('#profile-img').click(function(){
            var imgSrc = $(this).attr('src');
            $('#expanded-profile-img').attr('src', imgSrc);
        });
    });
    
});



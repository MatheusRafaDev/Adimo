document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.details-button');
    const modalContainer = document.querySelector('.modal-container');
    const closeButton = document.querySelector('.close-button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modalContainer.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});
document.getElementById('exit-button').addEventListener('click', function() {
    document.getElementById('confirmation-modal').style.display = 'block';
});

// Fechar modal de confirmação ao clicar em "Cancelar"
document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('confirmation-modal').style.display = 'none';
});

// Redirecionar ao clicar em "Sim"
document.getElementById('confirm-button').addEventListener('click', function() {
    // Substitua 'seu_link_aqui' pelo URL para o qual deseja redirecionar o usuário
    window.location.href = 'seu_link_aqui';
});
// Função para filtrar os resultados com base na pesquisa e no filtro
function filterResults() {
    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('filter-select');
    const table = document.querySelector('table');
    const rows = table.getElementsByTagName('tr');

    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    for (let row of rows) {
        const nameCell = row.cells[2];

        if (row === table.rows[0]) {
            // Ignorar a primeira linha (cabeçalho da tabela)
            continue;
        }

        const name = nameCell.textContent.toLowerCase();

        if ((name.indexOf(searchValue) > -1 || searchValue === '') && (filterValue === 'all' || (filterValue === 'iniciados' && new Date(row.cells[3].textContent) <= new Date()) || (filterValue === 'terminados' && new Date(row.cells[4].textContent) <= new Date()))) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Adicionar um ouvinte de eventos para a barra de pesquisa e filtros
document.getElementById('search-input').addEventListener('input', filterResults);
document.getElementById('filter-select').addEventListener('change', filterResults);

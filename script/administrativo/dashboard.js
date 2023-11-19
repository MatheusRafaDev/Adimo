document.addEventListener('DOMContentLoaded', function () {
    // Dados imaginários para os gráficos
    var salesData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Vendas',
        data: [20, 25, 18, 30, 22, 28],
        backgroundColor: ['#3a356e', '#58518c', '#766dab', '#9389ca', '#b1a5e9'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    };
  
    var incomeData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Renda Bruta',
        data: [80000, 90000, 75000, 100000, 85000, 95000],
        backgroundColor: ['#3a356e', '#58518c', '#766dab', '#9389ca', '#b1a5e9'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    };
  
    var propertyTypeData = {
      labels: ['Casa', 'Apartamento', 'Terreno', 'Comercial'],
      datasets: [{
        data: [40, 30, 15, 15],
        backgroundColor: ['#3a356e', '#58518c', '#766dab', '#9389ca'],
      }]
    };
  
    // Configuração dos gráficos
    var salesChart = new Chart(document.getElementById('salesChart').getContext('2d'), {
      type: 'bar',
      data: salesData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    var incomeChart = new Chart(document.getElementById('incomeChart').getContext('2d'), {
      type: 'line',
      data: incomeData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    var propertyTypeChart = new Chart(document.getElementById('propertyTypeChart').getContext('2d'), {
      type: 'doughnut',
      data: propertyTypeData,
    });
  
    // Adiciona evento de clique ao botão de logout
    document.getElementById('logoutButton').addEventListener('click', function() {
      document.getElementById('logoutModal').style.display = 'flex';
    });
  
    // Adiciona evento de clique ao botão de confirmação de logout
    document.getElementById('confirmLogoutButton').addEventListener('click', function() {
      // Redireciona para a página de logout ou realiza as ações necessárias
      // window.location.href = 'pagina-de-logout.html';
    });
  
    // Adiciona evento de clique ao botão de cancelar logout
    document.getElementById('cancelLogoutButton').addEventListener('click', function() {
      document.getElementById('logoutModal').style.display = 'none';
    });
  });
  
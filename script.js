// Custom Chart.js defaults for the dark theme
Chart.defaults.color = '#8b949e';
Chart.defaults.borderColor = 'rgba(48, 54, 61, 0.4)';
Chart.defaults.font.family = "'Inter', sans-serif";

// Helper to generate time labels
const generateLabels = (count) => {
    const labels = [];
    for (let i = 0; i < count; i++) {
        labels.push(`0${(i % 12) + 1}-202${5 + Math.floor(i / 12)}`);
    }
    return labels;
};

// 1. Sales Trend Over Time
const salesTrendCtx = document.getElementById('salesTrendChart').getContext('2d');
new Chart(salesTrendCtx, {
    type: 'line',
    data: {
        labels: generateLabels(30),
        datasets: [{
            label: 'Sales',
            data: [15, 22, 18, 25, 20, 32, 28, 40, 35, 30, 42, 38, 15, 20, 38, 30, 18, 25, 35, 12, 18, 45, 25, 20, 30, 22, 18, 15, 12, 14],
            borderColor: '#58a6ff',
            backgroundColor: 'rgba(88, 166, 255, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#58a6ff',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(48, 54, 61, 0.2)' },
                ticks: { callback: value => value + 'L' }
            },
            x: {
                grid: { display: false },
                ticks: { maxRotation: 45, minRotation: 45 }
            }
        }
    }
});

// 2. Sales by Category
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
new Chart(categoryCtx, {
    type: 'bar',
    data: {
        labels: ['Furniture', 'Clothing', 'Home Decor', 'Electronics'],
        datasets: [{
            data: [380000000, 80000000, 50000000, 920000000],
            backgroundColor: ['#7c5cfc', '#ff4d8d', '#00e5ff', '#ffb302'],
            borderRadius: 6,
            barThickness: 50
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(48, 54, 61, 0.2)' },
                ticks: {
                    callback: value => value.toLocaleString('en-IN')
                }
            },
            x: { grid: { display: false } }
        }
    }
});

// 3. Regional Performance
const regionalCtx = document.getElementById('regionalChart').getContext('2d');
new Chart(regionalCtx, {
    type: 'doughnut',
    data: {
        labels: ['West', 'East', 'South', 'North'],
        datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: ['#58a6ff', '#bc8cff', '#ff6b6b', '#39d353'],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'right',
                labels: { usePointStyle: true, padding: 20 }
            }
        }
    }
});

// 4. Profitability Analysis
const profitabilityCtx = document.getElementById('profitabilityChart').getContext('2d');
new Chart(profitabilityCtx, {
    type: 'line',
    data: {
        labels: generateLabels(40),
        datasets: [{
            label: 'Profit',
            data: [4, 6, 5, 8, 7, 10, 9, 12, 11, 8, 14, 12, 5, 7, 11, 9, 13, 8, 10, 5, 7, 14, 8, 6, 11, 7, 12, 8, 10, 5, 7, 14, 8, 6, 11, 7, 12, 8, 6, 5],
            borderColor: '#00ffa3',
            backgroundColor: 'rgba(0, 255, 163, 0.1)',
            borderWidth: 2,
            tension: 0.1, // Less tension for jagged look
            fill: true,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(48, 54, 61, 0.2)' },
                ticks: { callback: value => (value * 100000).toLocaleString('en-IN') }
            },
            x: {
                grid: { display: false },
                ticks: { maxRotation: 45, minRotation: 45, autoSkip: true, maxTicksLimit: 15 }
            }
        }
    }
});

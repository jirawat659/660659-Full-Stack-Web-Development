const fs = require('fs');
const path = require('path');

const config = [
    {
        hubDir: 'Example/Ex-week4',
        targetDir: 'Example/Ex-week4/Assignment 4-2 - BS5/html',
        title: 'Bootstrap 5 Utilities (Week 4)',
        prefix: 'Assignment 4-2 - BS5/html'
    },
    {
        hubDir: 'Example/Ex-week5',
        targetDir: 'Example/Ex-week5/660659/html',
        title: 'Bootstrap 5 Components (Week 5)',
        prefix: '660659/html'
    },
    {
        hubDir: 'Example/Ex-week8',
        targetDir: 'Example/Ex-week8/660746Assignment 6 - BS5-4',
        title: 'Flexbox Masterclass (Week 8)',
        prefix: '660746Assignment 6 - BS5-4'
    },
    {
        hubDir: 'Example/Ex-week9',
        targetDir: 'Example/Ex-week9',
        title: 'Responsive Design (Week 9)',
        prefix: '.'
    },
    {
        hubDir: 'Example/Ex-week10',
        targetDir: 'Example/Ex-week10/JavaScript Front-End',
        title: 'JavaScript Front-End (Week 10)',
        prefix: 'JavaScript Front-End'
    }
];

function generateHtml(title, items, relativeDepth) {
    const stylePath = '../'.repeat(relativeDepth) + 'style.css';
    const indexPath = '../'.repeat(relativeDepth) + 'index.html';
    
    let html = `<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${stylePath}">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <style>
        .back-btn {
            display: inline-flex; align-items: center; gap: 0.5rem;
            color: var(--primary-light); text-decoration: none; margin-bottom: 2rem;
            font-size: 1rem; transition: color 0.3s ease;
        }
        .back-btn:hover { color: var(--secondary-color); }
    </style>
</head>
<body>
    <div class="container" style="padding-top: 4rem;">
        <a href="${indexPath}" class="back-btn"><ion-icon name="arrow-back-outline"></ion-icon> กลับหน้าหลัก (Home)</a>
        <header style="padding: 0 0 3rem; text-align: left;">
            <h1 style="font-size: 2.5rem;">${title}</h1>
            <p style="margin: 0;">รวมหน้าตัวอย่างสำหรับหมวดหมู่นี้</p>
        </header>
        <div class="grid">`;

    items.forEach((item, i) => {
        html += `
            <a href="${item.url}" class="card">
                <span class="card-type">Item ${i + 1}</span>
                <h3>${item.name}</h3>
                <div class="card-footer"><span class="tag">HTML</span><ion-icon name="arrow-forward-outline" class="arrow-icon"></ion-icon></div>
            </a>`;
    });

    html += `
        </div>
    </div>
</body>
</html>`;
    return html;
}

config.forEach(c => {
    let files = [];
    if(fs.existsSync(c.targetDir)) {
        files = fs.readdirSync(c.targetDir).filter(f => f.endsWith('.html') && f !== 'index.html');
    }
    const items = files.map(f => {
        let name = f.replace('.html', '');
        return {
            name: name,
            url: c.prefix === '.' ? f : encodeURI(c.prefix + '/' + f)
        };
    });
    
    items.sort((a,b) => a.name.localeCompare(b.name, 'en', {numeric: true}));
    const outputHtml = generateHtml(c.title, items, 2);
    if (!fs.existsSync(c.hubDir)) fs.mkdirSync(c.hubDir, { recursive: true });
    fs.writeFileSync(path.join(c.hubDir, 'index.html'), outputHtml);
});
console.log('Hub pages rebuilt!');

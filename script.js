
document.addEventListener('DOMContentLoaded', function() {
    
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');

    console.log(contentSections)
    
    function showSection(targetId) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        contentSections.forEach(section => {
            section.classList.remove('section-active');
        });
        
        const activeButton = document.querySelector(`[data-target="${targetId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        const targetSection = document.querySelector(`.${targetId}-container`);
        if (targetSection) {
            setTimeout(() => {
                targetSection.classList.add('section-active');
            }, 50);
        }
    }
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });
    
    showSection('about');
});


function openResume(){
    window.open('./images/Chen Wei Lun - Resume.pdf')
}

function openSourceCode(projectName) {
    const githubUrls = {
        'trim-url': 'https://github.com/weilunchen210/TRIM-URL',
        'todo-list': 'https://github.com/weilunchen210/TodoList',
        'digimon-game': 'https://github.com/weilunchen210/DigimonBattle',
        'boat-race': 'https://github.com/weilunchen210/ConsoleBoatRace',
        'maze-traversal': 'https://github.com/weilunchen210/Maze-Traversal-Algorithm',
        'clothing-website': 'https://github.com/weilunchen210/Clothing-E-commerce-Website',
        'calculator': 'https://github.com/weilunchen210/OdinCalculator',
        'rockpaperscissors' : 'https://github.com/weilunchen210/rockpaperscissors'
    }

    const url = githubUrls[projectName];
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error('Project URL not found');
    }
}
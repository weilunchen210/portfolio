
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
    
    showSection('projects');
});


function openResume(){
    window.open('./images/Chen Wei Lun - Resume.pdf')
}
// Simple functionality for filters and interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const toolCards = document.querySelectorAll('.tool-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase();
            
            // Filter tools
            toolCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.querySelector('.category')?.textContent.toLowerCase() || 
                                   card.querySelector('.price')?.textContent.toLowerCase();
                    if (category && category.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Simple newsletter form handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you! You've subscribed with: ${email}\nYou'll receive daily AI updates.`);
            this.reset();
        });
    }
    
    // Update date for news items
    const newsDates = document.querySelectorAll('.news-date');
    const today = new Date().toLocaleDateString();
    newsDates.forEach(date => {
        if (date.textContent === 'Today') {
            date.textContent = today;
        }
    });
    
    // Add loading animation
    const cards = document.querySelectorAll('.tool-card, .news-card, .tip-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
});

// Add some CSS animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
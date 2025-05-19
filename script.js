document.addEventListener('DOMContentLoaded', () => {
    // الحصول على زر الوضع الليلي
    const darkModeToggle = document.getElementById('darkModeToggle');
    const header = document.querySelector('header');
    let lastScroll = 0;

    // التحقق من الوضع المحفوظ
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // تبديل الوضع عند النقر
    darkModeToggle.onclick = () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode',
            document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
        );
   };
 
});


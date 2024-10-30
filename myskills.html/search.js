// البحث عن الفيديوهات في الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // اختيار شريط البحث ومهارات الفيديو
    const searchBar = document.querySelector('.search-bar');
    const skillItems = document.querySelectorAll('.skill-item');

    // وظيفة البحث
    searchBar.addEventListener('keyup', function(event) {
        const searchText = event.target.value.toLowerCase();

        skillItems.forEach(function(skill) {
            const skillText = skill.textContent.toLowerCase();
            if (skillText.includes(searchText)) {
                skill.style.display = 'block'; // إظهار العنصر إذا كانت الكلمة موجودة
            } else {
                skill.style.display = 'none'; // إخفاء العنصر إذا لم تطابق البحث
            }
        });
    });
});

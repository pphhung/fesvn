const container = document.querySelector('.sparkle-container');

document.addEventListener('mousemove', (e) => {
    createRainDrop(e.clientX, e.clientY);
});

document.getElementById('view-more-btn').addEventListener('click', function() {
    const moreContent = document.querySelector('.more-content');
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'flex'; // Hiển thị nội dung
        this.textContent = 'Ẩn Ảnh'; // Thay đổi văn bản nút
    } else {
        moreContent.style.display = 'none'; // Ẩn nội dung
        this.textContent = 'Xem Ảnh'; // Thay đổi văn bản nút
    }
});


function createRainDrop(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Tạo màu sắc cho hạt mưa
    sparkle.style.backgroundColor = getRandomRainColor();
    
    // Đặt vị trí cho hạt mưa
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    // Thêm hạt mưa vào container
    container.appendChild(sparkle);
    
    // Xóa hạt mưa sau khi hoàn thành hiệu ứng
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

function getRandomRainColor() {
    const colors = ['#A9A9A9', '#B0C4DE', '#D3D3D3', '#C0C0C0']; // Màu sắc tone xám
    return colors[Math.floor(Math.random() * colors.length)]; // Chọn màu ngẫu nhiên từ danh sách
}
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active')
}
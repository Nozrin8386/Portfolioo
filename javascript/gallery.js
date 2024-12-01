const section = document.querySelector('.Selected'); // Chỉ chọn section với class 'Selected'
const slides = section.querySelectorAll('div'); // Lấy tất cả các div bên trong section 'Selected'

let index = 0;
let pattern = [
    [3, 4, 2, 2, 0, 0, 0, 0],
    [0, 4, 2, 2, 3, 0, 0, 0],
    [0, 0, 2, 2, 3, 4, 0, 0],
    [0, 0, 0, 2, 3, 4, 2, 0],
    [0, 0, 0, 0, 3, 4, 2, 2],
    [3, 4, 2, 2, 0, 0, 0, 0],
    [0, 4, 2, 2, 3, 0, 0, 0],
    [0, 0, 2, 2, 3, 4, 0, 0],
    [0, 0, 0, 2, 3, 4, 2, 0],
    [0, 0, 0, 0, 3, 4, 2, 2],]
    
let timeout;

const nextSlide = () => {
    index += 1;
    index %= pattern.length;

    // Cập nhật layout lưới
    section.style.gridTemplateColumns = pattern[index]
        .map((p) => `${p}fr`)
        .join(' ');

    // Ẩn hoặc hiện các slide dựa trên pattern
    slides.forEach((slide, slideIndex) => {
        if (pattern[index][slideIndex] === 0) {
            slide.classList.add('hide'); // Thêm class 'hide' nếu giá trị là 0
        } else {
            slide.classList.remove('hide'); // Xóa class 'hide' nếu giá trị khác 0
        }
    });

    // Đặt lại timeout cho tự động chuyển slide
    //clearTimeout(timeout);
   // timeout = setTimeout(nextSlide, 2000);
};

// Thêm sự kiện click để chuyển slide thủ công
section.addEventListener('click', () => {
    clearTimeout(timeout); // Dừng tự động chuyển slide
    nextSlide(); // Chuyển slide ngay lập tức
});

// Bắt đầu tự động chuyển slide khi trang được tải
timeout = setTimeout(nextSlide, 2000);

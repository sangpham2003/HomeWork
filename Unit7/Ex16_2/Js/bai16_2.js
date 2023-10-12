$(document).ready(function() {
    // // Khi trang tải, kiểm tra kích thước màn hình và ẩn menu nếu cần
    // checkWindowSize();
    // $(window).resize(function() {
    //     checkWindowSize();
    // });

    // function checkWindowSize() {
    //     if ($(window).width() < 768) {
    //         $('.menu').css('display', 'none');
    //         $('.menu-icon').css('display', 'block');
    //     } else {
    //         $('.menu').css('display', 'flex');
    //         $('.menu-icon').css('display', 'none');
    //     }
    // }

    // Thêm sự kiện click cho nút menu-icon
    $('.menu-icon').click(function() {
        // Toggle lớp active cho menu
        $('.menu').toggleClass('active');

        // Thay đổi hiệu ứng xuất hiện từ trái qua khi menu active
        // if ($('.menu').hasClass('active')) {
        //     $('.menu').animate({ left: '0' }, 200);
        // } else {
        //     $('.menu').animate({ left: '-100%' }, 200);
        // }
    });

    // Khi kích thước màn hình thay đổi, kiểm tra lại và ẩn/hiển thị menu
    
});

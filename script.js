document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('randomImage');
    
    // 图片数组
    const images = ['微信1.jpg', '微信2.jpg'];
    
    // 初始化显示一张随机图片
    showRandomImage();

    // 显示随机图片的函数
    function showRandomImage() {
        // 移除当前显示的图片类
        imageElement.classList.remove('active');
        
        // 随机选择一张图片
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        
        // 设置图片源
        imageElement.src = randomImage;
        
        // 添加显示类以触发动画
        imageElement.classList.add('active');
    }
});
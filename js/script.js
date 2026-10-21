// 等待整个 HTML 文档加载完毕后再执行，避免获取不到元素
document.addEventListener('DOMContentLoaded', function () {
    
    // 1. 获取按钮元素和要显示的消息元素
    const btn = document.getElementById('greetBtn');
    const msg = document.getElementById('greetMsg');
    
    // 2. 定义一个变量，记录当前消息是否可见
    let isVisible = false;
    
    // 3. 给按钮添加点击事件监听器
    btn.addEventListener('click', function () {
        if (!isVisible) {
            // 如果当前不可见，就显示出来
            msg.style.display = 'block';
            btn.textContent = '再点一下隐藏';
            isVisible = true;
        } else {
            // 如果当前可见，就隐藏起来
            msg.style.display = 'none';
            btn.textContent = '点我一下';
            isVisible = false;
        }
    });
});
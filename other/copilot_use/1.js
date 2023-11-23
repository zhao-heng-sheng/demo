// 生成一个0到1之间的随机小数
var randomDecimal = Math.random();

// 生成一个1到10之间的随机整数
var randomInteger = Math.floor(Math.random() * 10) + 1;
//写注释
/**
 * 检查给定的URL是否为图片URL
 * @param {string} url - 需要检查的URL
 * @returns {boolean} 如果URL是图片（.jpg, .jpeg, .png, .gif）则返回true，否则返回false
 */
function isImageUrl(url) {
    var imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    var extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
}
// 生成一个函数
// 参数：file、fileName
// 处理：使用isImageUrl判断是否是图片类型，如果是，就下载，fileName作为下载后的文件名
// 每行代码写上中文注释
// 返回值：无
function downloadImage(file, fileName) {
    // 判断是否是图片
    if (isImageUrl(file)) {
        // 创建一个a标签
        var a = document.createElement('a');
        // 设置a标签的href属性为file
        a.href = file;
        // 设置a标签的download属性为fileName
        a.download = fileName;
        // 触发a标签的点击事件
        a.click();
    }
}
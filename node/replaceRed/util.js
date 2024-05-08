export function escapeRegExpString(str) {
  // 使用字符串的replace方法配合正则表达式和函数回调进行转义
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
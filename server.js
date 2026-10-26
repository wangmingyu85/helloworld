// 极简测试版：不依赖 Express，排除代码/依赖因素
module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const now = new Date();
  const time = now.toLocaleString('zh-CN', { hour12: false });
  res.end('Hello World！我是王鸣语，我的第一个AI开发的网站 —— 极简测试版 当前服务器时间：' + time);
};

// HelloWorld 网站 —— Node.js + Express
// 我的第一个 AI 开发的网站（Vercel 部署：导出 app）
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const now = new Date();
  const serverTime = now.toLocaleString('zh-CN', { hour12: false });
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  res.send(`<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Hello World · 我的第一个AI开发的网站</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:"PingFang SC","Microsoft YaHei",Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.card{text-align:center;padding:48px 56px;border-radius:16px;background:rgba(255,255,255,.12);box-shadow:0 12px 40px rgba(0,0,0,.2)}h1{font-size:34px;margin-bottom:16px;font-weight:600}p{font-size:18px;opacity:.92}.time{margin-top:24px;font-size:15px;opacity:.75}.badge{display:inline-block;margin-top:20px;padding:6px 16px;border-radius:999px;background:rgba(255,255,255,.18);font-size:13px}</style>
</head><body><div class="card"><h1>Hello World！我是王鸣语，我的第一个AI开发的网站</h1>
<p>当前服务器时间：${year}年${month}月${day}日 ${serverTime}</p>
<div class="time">本页面由 Node.js 动态生成 · Powered by 豆包 AI</div><span class="badge">🚀 已成功部署上线</span></div></body></html>`);
});
module.exports = app;
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log('HelloWorld 网站已启动：http://localhost:' + port));
}

const express = require('express');
const path = require('path');
const app = express();
// server static files
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','about.html'));
});


app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','contact.html'));
});
app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','service.html'));
});
app.use((req, res, next)=> {
  res.status(404).sendFile(path.join(__dirname, 'public','404.html'));
});


const PORT = process.env.PORT|| 3000;

app.listen(PORT, () => {
  console.log(`server is runing on http://localhost:${PORT}`)
})
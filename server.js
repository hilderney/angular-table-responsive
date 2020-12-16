const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static(`${__dirname}/dist/responsive-table`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/responsive-table/index.html`));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

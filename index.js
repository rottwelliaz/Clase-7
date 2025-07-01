import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use ("/api", taskroutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
const router = require('./router');
const exphbs = require('express-handlebars');

const app = router.app;

app.engine('.hbs', exphbs({extname: 'hbs'}));

app.set('view engine', '.hbs');

const port = 8080;

app.listen(port, ()=>{
    console.log('Server runing on port: ' + port);
});

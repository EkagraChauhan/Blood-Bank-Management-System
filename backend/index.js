const express = require('express');
const sequelize = require('./config/database');
const serviceRoutes = require('./Routes/serviceRoutes');
const teamRouteing = require('./Routes/ourTeamRouteing');
const contactRouteing = require('./Routes/contactRouteing');
const DonorRouteing = require('./Routes/DonorRouteing');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');


sequelize.sync()
    .then(() => {
        console.log('Database & tables synced!');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
app.use(cors());    
app.use(express.static(path.join(__dirname,'public')));    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',serviceRoutes); 
app.use('/api',teamRouteing);
app.use('/api',contactRouteing);
app.use('/api',DonorRouteing);


app.listen(4000);
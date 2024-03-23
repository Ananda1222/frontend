import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Nav2 from './Nav2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData( 100,'Cake', 6.0, 24, 4.0),
  createData( 237,'Ice cream sandwich', 9.0, 37, 4.3),
  createData( 262,'Eclair', 16.0, 24, 6.0),
  createData( 305,'Cupcake', 3.7, 67, 4.3),
  createData( 356,'Gingerbread', 16.0, 49, 3.9),
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({user,setUser}) {
  const [value, setValue] = React.useState(0);
 const [loggeduser,setLoggedUser]=React.useState({});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

React.useEffect(() => {
   setLoggedUser(JSON.parse(sessionStorage.getItem('user')))
   
}, [user]);
// console.log(loggeduser.users,"logged user")
  return (
    <>
    <Nav2/>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',fontSize: '20px',fontWeight: 'bold' }}
      >
        <Tab label="User Dashboard" {...a11yProps(0)} />
        <Tab label="Menu" {...a11yProps(1)} />
        <Tab label="Promotions" {...a11yProps(2)} />
        <Tab label="Cart" {...a11yProps(3)} />
        <Tab label="View Order History" {...a11yProps(4)} />
        <Tab label="Feedback" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {loggeduser && <Card sx={{ Width: '50%',textAlign: 'center' }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image=""
            alt="user"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Username:Jibin
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Email: jibin123@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
                PhoneNumber: 878393030
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card> }
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="menu item"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Item1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Category:
            
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add to Card</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="menu item"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Item1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Category:
                <br />
                Discount:
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Card</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price&nbsp;</TableCell>
            <TableCell align="right">Quntity&nbsp;</TableCell>
            <TableCell align="right">Total&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price&nbsp;</TableCell>
            <TableCell align="right">Quntity&nbsp;</TableCell>
            <TableCell align="right">Total&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item six
      </TabPanel>
     
    </Box>
    </>
  );
}
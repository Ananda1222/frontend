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

function createData(name, price, fat, carbs, protein) {
  return { name, price, fat, carbs, protein };
}

const rows = [
  createData(1,'cholclate Cake', 6.0, 24, 4.0),
  createData(2,'straberry Cake', 6.0, 24, 4.0),
  createData(3,'pineapple Cake', 6.0, 24, 4.0),
  createData(4,'orange Cake', 6.0, 24, 4.0),
  createData(5,'mango Cake', 6.0, 24, 4.0),
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tab label="Admin Dashboard" {...a11yProps(0)} />
        <Tab label="Menu Management" {...a11yProps(1)} />
        <Tab label="Promotions Management" {...a11yProps(2)} />
        <Tab label="Order Management" {...a11yProps(3)} />
        <Tab label="Sales Report" {...a11yProps(4)} />
        <Tab label="Feedbacks Management" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Card sx={{ Width: '50%',textAlign: 'center' }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="user"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Admin name:Jibin
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Email: jibin123@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
                PhoneNumber: 878393030
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
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
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
              <TableCell align="right">{row.price}</TableCell>
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
              <TableCell align="right">{row.price}</TableCell>
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
        <h1>FeedBacks</h1>
      </TabPanel>
     
    </Box>
    </>
  );
}
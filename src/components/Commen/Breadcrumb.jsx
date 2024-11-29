import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb(props) {
  const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
  <NavLink to="/" className="text-decoration-none text-dark"> Home </NavLink>
 </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      {props.title}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

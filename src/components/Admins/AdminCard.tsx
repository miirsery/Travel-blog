import React, { FC, PropsWithChildren } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import admin from '/images/admin.png';
import styles from './index.module.scss';
import { UserType } from 'types/user.type';
import { Link } from 'react-router-dom';

enum statuses {
  ACTIVE = 'Активный',
  DISABLED = 'Не активен',
}

const AdminCard = ({ user }: { user: UserType }) => {
  const userStatus = statuses[user.status as keyof typeof statuses];
  return (
    <>
      <Card
        sx={{ maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        className='admin-card'
      >
        <Link to={`/admin/statistics/${user.id}`} className={styles['admin-card__link']}>
          <CardMedia
            className={styles['admin-card__image']}
            component='img'
            image={admin}
            alt='admin'
            sx={{
              height: '150px',
              width: '150px',
              marginBottom: '14px',
            }}
          />
          <CardContent>
            <Typography className='admin-card__title' gutterBottom variant='h5' component='div'>
              {user.name}
            </Typography>
            <Button
              className='admin-card__button'
              variant='contained'
              color={user.status === 'ACTIVE' ? 'success' : 'error'}
            >
              {userStatus}
            </Button>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default AdminCard;

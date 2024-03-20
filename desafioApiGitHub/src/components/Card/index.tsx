import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props{
    image: string,
    name: string
}

export default function ActionAreaCard({image, name}: Props) {

  const navigate = useNavigate();

  const onHandleNavigate = () => {
    navigate(`/details/${name}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onHandleNavigate}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

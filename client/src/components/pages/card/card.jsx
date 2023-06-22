
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function OutlinedCard() {
    return (
        <Card sx={{ maxWidth: 375, marginTop: 8 }}>           
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "MiFuentePersonalizada2"}}>
                    Comida Japonesa
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ fontFamily: "MiFuentePersonalizada"}}>
                    <br /><br /> <br />
                Se incluyen en la carta platos tradicionales como lo son el Katsukarē, las Gyoza, y el Yakisakana.
<br /> <br />
Se destaca principalmente por una amplia variedad de piezas de Sushi como el Maki, el Nigiri, el Sashimi, el Temaki y la tan popular versión norteamericana adoptada luego por Japón bajo el nombre de Uramaki, o Roll entre nos シ 
<br /> <br />
Se suman a la lista dos opciones del tan popular Ramen. Fideos en exquisito caldo a base de miso o soja, con chashu, ajitsuke tamago, moyashi, gari y negi.
                </Typography>
            </CardContent>
        </Card>
    );
}
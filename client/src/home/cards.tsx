import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function Cards() {
    const articles: any[] = [1,2,3];

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", padding: 30}}>
            {
                articles.map((article) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.18169-9/1001879_673897642635897_1678909310_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=g3GCuTor-lkAX_BF6sc&_nc_ht=scontent.ftlv7-1.fna&oh=00_AT9DByv7uCBJa_66QFdaHRsO9QMUE8ziGvfow9OZycKr9Q&oe=62B273C7"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </div>
    );
}

export default Cards;

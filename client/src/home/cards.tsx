import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function Cards() {
    const articles: any[] = [
        {image: "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?w=2000"},
        {image: "https://365psd.com/images/istock/previews/9058/90581657-people-large-group.jpg"},
        {image: "https://img.freepik.com/free-vector/diverse-multiracial-multicultural-group-people-illustration-cartoon-lat-style_465677-1.jpg"},
    ];

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", padding: 20}}>
            {
                articles.map((article) => (
                    <Card sx={{ width:300  }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="170"
                            image={article.image}
                        />
                        <CardContent>
                            <Typography dir="rtl" gutterBottom variant="h5" component="div">
                                כותרת
                            </Typography>
                            <Typography variant="body2" color="text.secondary" dir="rtl">
                                טקסט
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

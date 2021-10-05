import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function Infobox({title,time}) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography color="textSecondary">
                    {title}
                </Typography>
                <h2> {time} </h2>
            </CardContent>
        </Card>
    
    )
}

export default Infobox

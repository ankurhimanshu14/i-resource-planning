import { Button } from '@material-ui/core';

const ButtonBuilder = ({items}) => {
    return (
        <>
        {items.map(item => (
            <Button onClick = {item.onClick}>Register</Button>
        ))}
        </>
    )
};
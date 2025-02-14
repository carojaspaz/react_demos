const ButtonClick = () => {
    const handleClick = (ev : any) => {
        console.log("Button clicked", ev);
    };

    return <button onClick={handleClick}>Click me!</button>;
};

export default ButtonClick;
const IconGroup = (props) => {
    const icons = [];
    for (let i = 0; i < props.amount; i++) {
        icons.push(<i className={`material-icons ${props.type}`}>{props.name}</i>);
    }
    return icons;
};

export default IconGroup;
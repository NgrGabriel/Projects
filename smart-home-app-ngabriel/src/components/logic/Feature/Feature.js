import './Feature.scss';

const Feature = ({name, action, toggleAction}) => {

const toggleTheAction = () => {
    toggleAction(name);
}

    return (
        <div className="feature">
                    {/* <h3>{props.name}Lights</h3> */}
                    <h3>{name}</h3>
                    <button onClick={toggleTheAction}>{action}</button>
                </div>
    )
}

export default Feature;
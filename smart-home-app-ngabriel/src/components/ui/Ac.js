import './Ac.scss';

const Ac = ({acIsOn}) => {
    return (
        <div className={`lights ${acIsOn ? 'blue' : null}`}></div>
    );
}

export default Ac;
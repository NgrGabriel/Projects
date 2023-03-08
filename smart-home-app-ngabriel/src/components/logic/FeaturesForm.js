const FeaturesForm = () => {
    let [isFormValid, setFormValid] = useState(true);

    const titleInputRef = useRef();
    const actionInputRef = useRef();
    const stateInputRef = useRef();
    const descriptionRef = useRef();

    const resetFields = () => {
        titleInputRef.current.value = "";
        actionInputRef.current.value = "";
        stateInputRef.current.value = '';
        descriptionInputRef.current.value = '';
    }

    const checkValid = () => {
        if (
            titleInputRef.current.value === "" ||
            actionInputRef.current.value === "" ||
            stateInputRef.current.value === "" ||
         ) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const titleValue = titleInputRef.current.value;
        const actionValue = actionInputRef.current.value;
        const stateValue = stateInputRef.current.value;
        const descriptionValue = descriptionInputRef.current.value;

    const newFeature = {
        name: titleValue,
        action: actionValue,
        state: stateValue,
        id: Math.random()
        }



        props.updateTheFeatures
        resetFields();
    }

        return <div>
        <form onSubmit={submitHandler} className={`form ${isFormValid ? 'valid' : 'invalid'}`}>
            <div className="control">
                <label htmlFor='title'>Feature title</label>
                <input type='text' id='title' required ref={titleInputRef} ></input>
            </div>

            <div className="control">
                <label htmlFor='action'>Feature action</label>
                <input type='text' id='action' required ref={actionInputRef}></input>
            </div>

            <div className="control">
                <label htmlFor='state'>Feature State</label>
                <input type='text' id='state' required ref={stateInputRef}></input>
            </div>

            <div className="control">
                <label htmlFor='title'>Description</label>
                <textarea id="description" required rows='5' ref={descriptionRef}></textarea>
            </div>

            <div classname="actions">
                <button>Add feature</button>
            </div>
        </form>
    </div>
}

export default FeaturesForm;
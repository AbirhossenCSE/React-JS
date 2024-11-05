import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('abir')
    // const nameState = useInputState('abir')
    const emailState = useInputState('abir@gmail.com')

    const handleSubmit = e => {
        console.log('From data', emailState.value)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState}  type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default HookForm;

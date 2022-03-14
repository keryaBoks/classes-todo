import "./Input.scss"

function Input({ addTask, inputItem, changeHandler }) {

    const submutHandler = (event) => {
        event.preventDefault();
        addTask(inputItem);
    }

    return (
        <div className="main-div">
            <form onSubmit={submutHandler} className="ourFrom">
                <input
                    value={inputItem}
                    placeholder="Add new todo here"
                    onChange={changeHandler}
                    className='myInput'
                />
            </form>
            <button className="buttonPlus circle" onClick={() => addTask(inputItem)}>+</button>
        </div>
    )
}

export default Input
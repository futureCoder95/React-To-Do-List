import React, {useState} from 'react'

const Todo = () => {

    const [inputData, setinputData] = useState("");
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items ,inputData])
        setinputData('')
    }

    const deleteItem = (cl) => {
        const updatedItem = items.filter((elem , index) => {
            return index !== cl
        })
        setItems(updatedItem)
    }

    const removeAll = () => {
        setItems([])
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption style={{ color: "white", fontWeight: 900 }}>Add your list here</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder='Enter something to add' value={inputData} onChange={(e) => setinputData(e.target.value)}/>
                           
                        <i class="fa fa-plus add-btn" onClick={addItems} title="Add Item"></i>
                    </div>

                    <div className="showItems">

                        {
                            items.map((elem, index) => {
                                return (
                                    <div className="eachItem" key={index}>
                                    <h3>{elem}</h3>
                                    <i class="fa fa-trash add-btn" onClick={() => deleteItem(index)} title="Delete Item"></i>
                                </div>
                                )

                            })
                        }
                       
                    </div>

                    <div className="showItems">
                        <button className="btn btn-danger" onClick={removeAll}>Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
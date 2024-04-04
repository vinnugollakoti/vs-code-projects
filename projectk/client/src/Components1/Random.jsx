import { useState } from "react"

const Random = () => {
    const [verify, setVerify] = useState(true)
    
    const onChange = () => {
        if(!verify) {
            setVerify(true)
        } else if (verify) {
            setVerify(false)
        }
    }
    const handleButton = () => {
        if(!verify) {
            alert("Please check the checkbox")
        }else {
            alert("congartualtions")
        }
    }
  return (
    <div>
      <div>
        <nav className="nav-div">
            <div className="nav-div1"><h3>Capstone</h3></div>
            <div className="nav-div2">
                <h3>Singup</h3>
                <h3>Login</h3>
            </div>
        </nav>
      </div>
      <input type="checkbox" onClick={onChange} />
      <label htmlFor="checkbox">Hello world</label>
      <br /><br />
      <button disabled={!verify} onClick={handleButton}>
        Submit
      </button>
    </div>
  )
}

export default Random

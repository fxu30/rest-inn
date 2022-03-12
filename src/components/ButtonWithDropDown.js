import React from 'react'
import Button from './Button'
import DropDownCard from './DropDownCard'

const sample = [
    {path: "/Signup", title: "Sign up"}, 
    {path: "/Login", title: "Log in"}
]

const ButtonWithDropDown = () => {
    const [open, setOpen] = React.useState(false)
    const drop = React.useRef(null)

    function handleClick(e) {
        if (!e.target.closest(`.${drop.current.className}`) && open) {
            setOpen(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener("click", handleClick)
        return () =>{
            document.removeEventListener("click", handleClick)
        }
    })
    
  return (
    <div className='dropdown' ref={drop} style={{position: "relative"}}>
        <Button onClick={()=> setOpen(open => !open)} />
        {open && <DropDownCard data={sample} />}
        
    </div>
  )
}
export default ButtonWithDropDown
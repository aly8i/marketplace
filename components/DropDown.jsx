import React,{useState} from 'react'
const DropDown = ({setType,type}) => {
  const [selected,setSelected]=useState("filter ");
  const options = [
    {
      name: "All",
      fn: () => {
        setType("");
        setSelected("All ");
      }
    },
    {
      name: "Resturants",
      fn: () => {
        setType("resturant");
        setSelected("Resturants ");
      }
    },
    {
      name: "Clothing Stores",
      fn: () => {
        setType("clothing");
        setSelected("Clothing Stores ");
      }
    },
    {
      name: "Markets",
      fn: () => {
        setType("market");
        setSelected("Markets ");
      }
    }
  ]
  return (
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {selected}
        </button>
        <ul class="dropdown-menu">
          {options.map((option)=>(
            <li onClick={()=>option.fn()}><a class="dropdown-item" href="#">{option.name}</a></li>
          ))}
        </ul>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </div>
  )
}

export default DropDown
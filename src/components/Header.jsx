import { BsFillBellFill, BsJustify, BsSearch ,  BsPersonCircle ,  BsFillEnvelopeFill } from "react-icons/bs";

 const Header = () =>{

    return(
        <header className="header">
            <div className="menu-icon">
                <BsJustify  className="icon"/>

            </div>
            <div className="header-left">
                <BsSearch className="icon"/>

            </div>
            <div className="header-right">
                < BsFillBellFill className="icon"/>
                < BsPersonCircle  className="icon"/>
                < BsFillEnvelopeFill className="icon"/>

            </div>

        </header>
        

    )

}

export default Header
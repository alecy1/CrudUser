import { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import ModalDialog from './ModalDialog.js';
import AddStaffForm  from './forms/addStaffForm.js';
import EditStaffForm from './forms/editStaffForm.js';
import {StaffTable} from './table/staffTable.js';
import {ThemeContext} from "./exportar.js";
import Footer  from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faRectangleXmark,faUserPlus} from '@fortawesome/free-solid-svg-icons';
library.add(faRectangleXmark,faUserPlus)


export const LunaSol = () => {
  const [theme, setTheme] = useState('light');
  return (
  <ThemeContext.Provider value={theme}>
    <header>
        <Header onClick={() => {setTheme(theme==='dark'?'light':'dark');}} >
          {theme==='dark' ?
        (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>) : 
        (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
        </svg>)
        }
        </Header>
        <Navbar/>
    </header>
        <CrudStaff/>
        <Footer/>
  </ThemeContext.Provider>
  )
}
const Navbar = () => {
  const theme = useContext(ThemeContext);
  const className = 'navbar navbarCss-' + theme;
  return (
  <>
    <nav className={className}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-6 ms-auto" to="/" style={{color:'#fff'}}>User  registration</NavLink>
      </div>
    </nav>
  </>
  );
}

const Header = ({children, onClick}) =>{
  const theme = useContext(ThemeContext);
  const className1 = 'header-' + theme;
  const className = 'float-end boton2-' + theme;
  return(
    <>
      <div className={className1}>
        <img src="./logoZ.png" alt="Logo" width="159" height="113" className="d-inline-block align-text-top"/>
        <button className={className} onClick={onClick}>{children}</button>
      </div>
    </>
  )
}

function CrudStaff() {
  
  const staffData = [
    {id:1, name:'vincent', lastName:'lacoste', email:'vincent12@hotmail.com', nationality:'France',relationshipStatus:'nonbinary', birthdate:'1985-07-18',age:'30',country1:'+49', personalPhone:'4432737253',country:'+49', cellPhone:'3241789456', numberOfRFC:'lalv930703ajl',curpNumber:'loeaf771012hmcrgr09',numberOfIMSS:'91806083439'},
    {id:2, name:'Gal', lastName:'Gadot', email:'gadot@hotmail.com', nationality:'United States',relationshipStatus:'female', birthdate:'1982-05-17',age:'31',country1:'+1', personalPhone:'4433789456',country:'+1', cellPhone:'7894561230', numberOfRFC:'gagg850430saa',curpNumber:'osdf771012mmctyu10',numberOfIMSS:'92857083423'},
    {id:3, name:'Chris', lastName:'Hemsworth', email:'chris@hotmail.com', nationality:'United States',relationshipStatus:'male', birthdate:'1980-03-15',age:'32',country1:'+81', personalPhone:'4433789456',country:'+81', cellPhone:'7894789456', numberOfRFC:'hehc830811jtt',curpNumber:'uhnm771012hhcrrr11',numberOfIMSS:'88126083439'},
  ]

  const initialStaff = {id:null, name:'', lastName:'', email:'', nationality:'',relationshipStatus:'', birthdate:'',age:'',country1:'', personalPhone:'',country:'', cellPhone:'', numberOfRFC:'',curpNumber:'',numberOfIMSS:''}


  const [show, setShow] = useState(false);
  const [staff, setStaff] = useState(staffData)
  const [currentStaff, setCurrentStaff] = useState(initialStaff)
  const [editing, setEditing] = useState(false)

  const addStaff = staffs =>{
    staffs.id = staff.length + 1
    setStaff([...staff,staffs])
  }

  const deleteStaff = id => {
    setStaff(staff.filter(staf => staf.id !== id))
  }

  const updateStaff = (id, updateStaff) =>{
    setEditing(false)
    setStaff(staff.map(staf => (staf.id === id ? updateStaff : staf)))

  }

  const editRow = staf =>{
    setEditing(true)
    setCurrentStaff({id: staf.id, name:staf.name, lastName:staf.lastName, email:staf.email, nationality:staf.nationality,
    relationshipStatus:staf.relationshipStatus, birthdate:staf.birthdate, age:staf.age, country1:staf.country1, personalPhone:staf.personalPhone,
  country:staf.country, cellPhone: staf.cellPhone, numberOfRFC:staf.numberOfRFC, curpNumber:staf.curpNumber, numberOfIMSS:staf.numberOfIMSS})
  }
  
  const theme = useContext(ThemeContext);
  
  const classBtnOpen = 'btn boton-' + theme;
  const classBtnClose = 'btn-sm position-absolute top-0 end-0 boton-' + theme;
  const classContainer = 'container-xxl ' + theme;
  const classBtnBackground = 'mx-auto p-2 ' + theme;
  const classTitulo = 'texto3-' + theme;
  
  return (
    <>
      <div className={classContainer}>
      
        {editing ? (
						<>
							<EditStaffForm
								editing={editing}
								setEditing={setEditing}
								currentStaff={currentStaff}
								updateStaff={updateStaff}
							/> 
						</>
					) : (
                <>
                  <div className={classBtnBackground}>
                    <h4 className={classTitulo}>CDS company employee registry</h4>
                    <button onClick={() => setShow(true)} className={classBtnOpen}>
                      <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                  <ModalDialog isOpen={show} className="modal" >
                    <br />
                    <button onClick={() => {setShow(false);}} className={classBtnClose} >
                      <FontAwesomeIcon icon={faRectangleXmark} />
                    </button>
                    <TitleTheModal/>
                    <AddStaffForm addStaff={addStaff} />
                    <br />
                  </ModalDialog>
                  </div>
                </>
              )} 
              <StaffTable staff={staff} editRow={editRow} deleteStaff={deleteStaff} />
        </div>
    </>
  );
}

const TitleTheModal = () =>{
  const theme = useContext(ThemeContext);
  const classEncabezado = "encabezado-" + theme; 
  return(
      <>
        <div className='pb-2'>
          <h1 className={classEncabezado}>Personal Details</h1>
        </div>
      </>
    );
} 



import React, { useContext }  from "react";
import {ThemeContext} from "../exportar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faPenToSquare,faTrash)

export const StaffTable = props => {
    const theme = useContext(ThemeContext);
    const classBtn = 'btn boton-' + theme;
    const classTable = 'align-middle tabla-' + theme;
    const classThead ='letter1-' + theme;
    const classTbody = 'letter2-' + theme;

    return(
    <>
      <div className="table-responsive pb-5">
        <table className={classTable}>
          <thead className={classThead}>
            <tr className="table-active" >
                <th>Name</th>
                <th>Email</th>
                <th>Nationality</th>
                <th>Gender</th>
                <th>Birth date</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Contact number</th>
                <th>Number of RFC</th>
                <th>CURP Number</th>
                <th>Number of IMSS</th>
                <th colSpan={3}>Actions</th>
            </tr>
        </thead>
        <tbody className={classTbody}>
        {props.staff.length > 0  ? (props.staff.map(staf=>(
          <tr key={staf.id}>
            <td>{staf.name.toUpperCase()} {staf.lastName.toUpperCase()}</td>
            <td>{staf.email.toUpperCase()}</td>
            <td>{staf.nationality.toUpperCase()}</td>
            <td>{staf.relationshipStatus.toUpperCase()}</td>
            <td>{staf.birthdate.toUpperCase()}</td>
            <td>{staf.age.toUpperCase()}</td>
            <td>{staf.country1}{staf.personalPhone.toUpperCase()}</td>
            <td>{staf.country}{staf.cellPhone.toUpperCase()}</td>
            <td>{staf.numberOfRFC.toUpperCase()}</td>
            <td>{staf.curpNumber.toUpperCase()}</td>
            <td>{staf.numberOfIMSS.toUpperCase()}</td>
              <td>
                <button
                    onClick={() => {
                        props.editRow(staf)
                    }}
                    className={classBtn}
                    >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </td>
                <td>
                  <button
                        onClick={()=>props.deleteStaff(staf.id)}
                        className={classBtn}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                </button>
                </td>
                <td>{props.search}</td>
            </tr>))
            ):(
            <tr>
                <td colspan="3">No staff</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
    </>
);
}


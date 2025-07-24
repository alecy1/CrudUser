import React, {useState, useEffect, useContext} from "react";
import {ThemeContext} from "../exportar";

const EditStaffForm = props => {
    const theme = useContext(ThemeContext);
    const classBtn = 'btn boton-' + theme;
    const classLabel = 'form-label textLabel-' + theme;
    const [staff, setStaff] = useState(props.currentStaff)
    useEffect(
        () => {
            setStaff(props.currentStaff)
        },
        [props]
    )

    const handleInputChange = event =>{
        const {name, value} = event.target
        setStaff({...staff, [name]:value})
    }
    return(
        <div className='container pt-4'>
        <form className="row g-3"
            onSubmit={event => {
                    event.preventDefault()
                    props.updateStaff(staff.id, staff)
                }}
        >
            <div className="mb-1">
                <label className={classLabel}>Name</label>
                <input className="form-control" type="text" name="name" value={staff.name} onChange={handleInputChange} required/>
            </div>

            <div className="mb-1">
                <label className={classLabel}>Lastname</label>
                <input className="form-control" type="text" name="lastName" value={staff.lastName} onChange={handleInputChange} required/>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Email</label>
                <input className='form-control' type='email' name='email' value={staff.email} onChange={handleInputChange} required />
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Nationality</label>
                <select className='form-select'name='nationality' value={staff.nationality} onChange={handleInputChange} required>
                    <option selected>Open this select nationality</option>
                    <option value="Canada">Canada</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Mexico">México</option>
                </select>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Gender</label>
                <select className='form-select' name='relationshipStatus' value={staff.relationshipStatus} onChange={handleInputChange} required>
                    <option selected>Open this select gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="nonbinary">Nonbinary</option>
                </select>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Birth date</label>
                <input className='form-control' type='date' name='birthdate' value={staff.birthdate} onChange={handleInputChange} required/>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Age</label>
                <input className='form-control' type='year' name='age' value={staff.age} onChange={handleInputChange} required/>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Fixed/Mobile</label>
                    <div className="input-group">
                        <select className='form-select' name='country1' value={staff.country1} onChange={handleInputChange} required>
                            <option selected>Select</option>
                            <option value="+1">+1 (Canada)</option>
                            <option value="+33">+33 (France)</option>
                            <option value="+49">+49 (Germany)</option>
                            <option value="+39">+39 (Italy)</option>
                            <option value="+81">+81 (Japan)</option>
                            <option value="+1">+1 (United States)</option>
                            <option value="+44">+44 (United Kingdom)</option>
                            <option value="+52">+52 (Mexico)</option>
                        </select>
                    <input className='form-control' placeholder='Contact Number' type='number' name='personalPhone' value={staff.personalPhone} onChange={handleInputChange} required/>
                    </div>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Contact Number*</label>
                <div className="input-group">
                    <select className='form-select' name='country' value={staff.country} onChange={handleInputChange} required>
                        <option selected>Select</option>
                        <option value="+1">+1 (Canada)</option>
                        <option value="+33">+33 (France)</option>
                        <option value="+49">+49 (Germany)</option>
                        <option value="+39">+39 (Italy)</option>
                        <option value="+81">+81 (Japan)</option>
                        <option value="+1">+1 (United States)</option>
                        <option value="+44">+44 (United Kingdom)</option>
                        <option value="+52">+52 (Mexico)</option>
                    </select>
                <input className='form-control' placeholder='Contact Number' type='number' name='cellPhone' value={staff.cellPhone} onChange={handleInputChange} required/>
                </div>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>Number of RFC</label>
                <input className='form-control' type='text' name='numberOfRFC' value={staff.numberOfRFC} onChange={handleInputChange} required/>
            </div>

            <div className='mb-1'>
                <label className={classLabel}>CURP Number</label>
                <input className='form-control' type='text' name='curpNumber' value={staff.curpNumber} onChange={handleInputChange} required/>
            </div> 

            <div className='mb-1'>
                <label className={classLabel}>Number of IMSS</label>
                <input className='form-control' type='text' name='numberOfIMSS' value={staff.numberOfIMSS} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
                <button className={classBtn}>Update user</button>
            </div>

            <div className='mb-3'>
				<button className={classBtn} onClick={() => props.setEditing(false)}>Cancel</button>
			</div>
        </form>
        </div>
    )
}

export default EditStaffForm
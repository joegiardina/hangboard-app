import React from 'react'

const UserForm = () => {
    return (
        <div className="UserForm">
            <div className="UserOptions">
                <form  action="submit" className="form">
                    <input className="flex" type="text" placeholder="Your Name" />
                    <select className="flex" name="HoldSize" id="HoldSize">
                        <option value="20mm">20mm edge</option>
                        <option value="15mm">15mm edge</option>
                        <option value="10mm">10mm edge</option>
                        <option value="8mm">8mm edge</option>
                    </select>
                    <select className="flex" name="exerciseType" id="exerciseType">
                        <option value="Power Endurance">Power Endurance</option>
                        <option value="Power">Power</option>
                        <option value="Edurance">Edurance</option>
                    </select>
                    <input className="flex" type="text" placeholder="Enter Your Weight" />
                </form>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default UserForm

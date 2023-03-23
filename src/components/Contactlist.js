import React from "react";
import Contactcard from './Contactcard'
function Contactlist(props) {
    // console.log(props);
    const rendercontactlist = props.contacts.map((contacts) => {
        return (
            <Contactcard contacts={contacts}/>
        );
    }

    );
    return (
        <div className="ui celled list">
            {rendercontactlist}
        </div>
    );
}
export default Contactlist




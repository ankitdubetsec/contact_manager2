import React from "react";
import Contactlist from "./Contactlist";
import download from '../images/download.png';
function Contactcard(props){
    // const {id,name,email}=props.contacts;
    return(
      
           <div className="card shadow border-0 mb-7">
  {/* <div className="card-header">
    <h5 className="mb-0">Contact</h5>
  </div> */}
  <div className="table-responsive" >
    <table className="table table-hover table-nowrap">
      <thead className="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
              className="avatar avatar-sm rounded-circle me-2"
            />
            <a className="text-heading font-semibold" href="#">
            {props.contacts.name}
            </a>
          </td>
          <td>{props.contacts.email}</td>
          {/* <td>
                                  <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2">
                                  <a class="text-heading font-semibold" href="#">
                                      Dribbble
                                  </a>
                              </td> */}
          <td>{props.contacts.phone}</td>
          
          <td className="text-end">
           
            <button
              type="button"
              className="btn btn-sm btn-square btn-neutral text-danger-hover"
            >
              <i className="bi bi-trash" />
            </button>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
  <div className="card-footer border-0 py-5"></div>
</div>

        );
    }
export default Contactcard
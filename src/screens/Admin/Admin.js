import React from "react";
import styles from "./Admin.scss";

const Admin = () => (
  <form 
    action="/upload" 
    method="POST" 
    encType="multipart/form-data" 
    className={styles.admin}
    multiple="multiple" 
    name="files[]" 
    accept="audio"
  >
    <div>
      <input type="file" name="file" id="file"/>
      <label htmlFor="file" ></label>
    </div>

    <input id={styles.admin__input} placeholder="Title"/>  
    <input id={styles.admin__input} placeholder="Artist"/>           
    <input id={styles.admin__sumbit} type="submit" value="Upload" />
  </form> 
);

export default Admin;
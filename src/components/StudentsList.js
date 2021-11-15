import React from 'react';
import StudentDetails from './StudentDetails'
function StudentsList(){
  let name = "Varun Kumar";
  return(
    <div>
      <StudentDetails name={name}/>
    </div>
  )
}
export default StudentsList

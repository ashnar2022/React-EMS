import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom'
import { FaPen,FaRegTrashAlt,FaUserPlus } from "react-icons/fa";
function Home() {
  const history=useNavigate()
  const handleDelete=(id) =>{
var index=Employee.map(item=>item.id).indexOf(id);// to find index
Employee.splice(index,1)//to remove item
console.log(Employee); //array position with remaining items
history('/') //refresh
  }

  const handleEdit=(id,empname,age,designation,salary)=>{
localStorage.setItem("ID",id);
localStorage.setItem("NAME",empname);
localStorage.setItem("AGE",age);
localStorage.setItem("DESIGNATION",designation);
localStorage.setItem("SALARY",salary);

  }
  return (
    <>
    
    <h1 className='text-primary text-center m-4'>Employee Management System</h1>
    <p className='p-3'>An employee management system is a software, that helps your employees to give their best efforts every day to achieve the goals of your organization. It guides and manages employees efforts in the right direction. It also securely stores and manages personal and other work-related details for your employees. That makes it easier to store and access the data when there is a need.

In the employee management system, you can manage admin activities in an easier and quicker way. Employees are an important part of your organization it is their work that ultimately contributes to the bottom line of the company. It is an important part of HR management. It also helps to employee engagement and performance management brings down costs and increases productivity.</p>
   <Link to={'/add'}><Button varient='success'>Add <FaUserPlus/></Button></Link>
   

    <h3 className='my-5'>List of Employee</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        Employee && Employee.length>0?
        Employee.map((item)=>(
            <tr>
          <td>{item.id}</td>
          <td>{item.empname}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td> 
            <Link to={'/edit'}> <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)} variant="primary"><FaPen/></Button></Link>
           <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaRegTrashAlt/></Button>
           </td>
     
          
          
        </tr>
        )):'No data available'
        }
        
       </tbody>

    </Table>
    </>
  )
}

export default Home
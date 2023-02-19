import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';

function Edit() {

const [id,setId]=useState(''); 
const [empname,setEmpname]=useState('') ;
const [age,setAge]=useState('') ;
const [designation,setDesignation]=useState('') ;
const [salary,setSalary] =useState('0') ;

useEffect(()=>{
  setId(localStorage.getItem('ID'));
  setEmpname(localStorage.getItem('NAME'));
  setAge(localStorage.getItem('AGE'));
  setDesignation(localStorage.getItem('DESIGNATION'));
  setSalary(localStorage.getItem('SALARY'));
},[])
console.log(id);
console.log(empname);

var index= Employee.map(item=>item.id).indexOf(id);
console.log(index);//output 0

let history=useNavigate()
const handleUpdate=(e)=>{
  e.preventDefault();  //avoid refreshing
  console.log(e);//event
  let emp=Employee[index]
  console.log(emp);  //full details of employee
  emp.id=id;
  emp.empname=empname;
  emp.age=age;
  emp.designation=designation;
  emp.salary=salary;
  console.log(emp);// updated details of emplyee

  history('/')
}

  return (
    <>
     <h1 className='text-primary text-center m-4'>Employee Management System</h1>
    <p className='p-3'>An employee management system is a software, that helps your employees to give their best efforts every day to achieve the goals of your organization. It guides and manages employees efforts in the right direction. It also securely stores and manages personal and other work-related details for your employees. That makes it easier to store and access the data when there is a need.
    In the employee management system, you can manage admin activities in an easier and quicker way. Employees are an important part of your organization it is their work that ultimately contributes to the bottom line of the company. It is an important part of HR management. It also helps to employee engagement and performance management brings down costs and increases productivity.</p>

   <Row> 
    <Col md={4}>
       <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPrwl13qquUdPRSKZclq0tj7aCPslMaa7vQ&usqp=CAU'/>
    </Col>
    <Col>

    <Form className='border border-3 p-5'>
      <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control type="id" placeholder="Enter Your Name" 
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Your Name" 
         value={empname}
         onChange={(e)=>setEmpname(e.target.value)}
         required

        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="age" placeholder="Enter Your Name" 
         value={age}
         onChange={(e)=>setAge(e.target.value)}
         required

        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Designation</Form.Label>
        <Form.Control type="designation" placeholder="Enter Your Name" 
         value={designation}
         onChange={(e)=>setDesignation(e.target.value)}
         required
         />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="salary" placeholder="Enter Your Name"
         value={salary}
         onChange={(e)=>setSalary(e.target.value)}
         required
        />
      </Form.Group>
    

      
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
    </Col>
   </Row>


    </>
  )
}

export default Edit
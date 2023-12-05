import '../index.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from '../components/EditEmployee';
import AddEmployee from '../components/AddEmployee';
import Employee from '../components/Employee';


function Employees() {

  const [employees, setEmployees] = useState([
    { id: 1, name: "Hussein", role: "ineter", img: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 2, name: "Ali", role: "ineter", img: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 3, name: "Mhdi", role: "ineter", img: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: 4, name: "Samee", role: "ineter", img: "https://randomuser.me/api/portraits/men/14.jpg" },
    { id: 5, name: "Baba", role: "ineter", img: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 6, name: "Mama", role: "ineter", img: "https://randomuser.me/api/portraits/men/16.jpg" },
    { id: 7, name: "Mhsan", role: "ineter", img: "https://randomuser.me/api/portraits/men/20.jpg" },
    { id: 8, name: "Mhmomodi", role: "ineter", img: "https://randomuser.me/api/portraits/men/18.jpg" },
  ])

  function updateEmployee(id, newName, newRole) {
    const updateEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole }
      }
      return employee
    })
    setEmployees(updateEmployee);
  }

  function NewEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }
  const showEmployee = true;
  return (
    <div className=" pt-2">
      
      {showEmployee ? (
        <>

          <div className='flex justify-center'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[1200px] justify-center p-2 gap-3'>
              {employees.map(employee => {
                const editEmployee = (
                  <EditEmployee
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    updateEmployee={updateEmployee} />
                )
                return (
                  <Employee name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    key={employee.id}
                    id={employee.id}
                    EditEmployee={editEmployee} />
                )
              }

              )}
            </div>
          </div>
          <AddEmployee newEmployee={NewEmployee} />
        </>
      ) : (<p>You Can't accese the names</p>)

      }
    </div>
  );
}

export default Employees;

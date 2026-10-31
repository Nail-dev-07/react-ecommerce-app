const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    email: "janesmith@example.com",
  },
    {
    id: 3,
    name: "Alice Johnson",
    position: "UX Designer",
    department: "Design",
    email: "alice@example.com"
    },
];

function Employee() {
    return (
        <>
            {employees.map((employee) => (
                <div key={employee.id} className="employee-card">
                    <h2>{employee.name}</h2>
                    <p>Position: {employee.position}</p>
                    <p>Department: {employee.department}</p>
                    <p>Email: {employee.email}</p>
                </div>
            ))}
        </>
    )
}

export default Employee;

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      // tasks...
    ]
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      // tasks...
    ]
  },

  {
    id: 3,
    firstName: "Arjun",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      // tasks...
    ]
  },

  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      // tasks...
    ]
  },

  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      // tasks...
    ]
  }
];

const admin = [ { 
    "id": 101, 
    "email": "admin@example.com", 
    "password": "123" 
} ]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
    
}
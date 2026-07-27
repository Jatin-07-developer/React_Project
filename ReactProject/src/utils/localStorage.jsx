const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Prepare the monthly sales report.",
        taskDate: "2026-07-28",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Customer Records",
        taskDescription: "Update customer contact information.",
        taskDate: "2026-07-24",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Issue",
        taskDescription: "Resolve authentication bug.",
        taskDate: "2026-07-22",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage UI.",
        taskDate: "2026-07-29",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Revision",
        taskDescription: "Update company logo colors.",
        taskDate: "2026-07-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Banner Design",
        taskDescription: "Design promotional banner.",
        taskDate: "2026-07-18",
        category: "Marketing"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test all authentication APIs.",
        taskDate: "2026-07-30",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Verification",
        taskDescription: "Verify fixed bugs.",
        taskDate: "2026-07-25",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Test",
        taskDescription: "Run application stress tests.",
        taskDate: "2026-07-19",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog article for website.",
        taskDate: "2026-07-28",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO.",
        taskDate: "2026-07-23",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Newsletter Draft",
        taskDescription: "Prepare monthly newsletter.",
        taskDate: "2026-07-17",
        category: "Content"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take weekly database backup.",
        taskDate: "2026-07-31",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server health.",
        taskDate: "2026-07-26",
        category: "Infrastructure"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Perform security assessment.",
        taskDate: "2026-07-21",
        category: "Security"
      }
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

    console.log(employees, admin)
    
}
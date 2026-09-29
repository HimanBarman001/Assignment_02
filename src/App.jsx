import Header from "./components/layout/Header";
import StudentList from "./components/student/StudentList";
import Footer from "./components/layout/Footer";

function App() {
    const students = [
        {
            name: "Rahul Sharma",
            rollNumber: "BCA001",
            department: "Computer Applications",
            semester: "6th",
            cgpa: 8.7,
            photo: "/students/rahul.jpg",
        },
        {
            name: "Priya Das",
            rollNumber: "BCA002",
            department: "Computer Applications",
            semester: "6th",
            cgpa: 9.2,
            photo: "/students/priya.jpg",
        },
        {
            name: "Arjun Roy",
            rollNumber: "BCA003",
            department: "Computer Applications",
            semester: "6th",
            cgpa: 7.9,
            photo: "/students/arjun.jpg",
        },
        {
            name: "Sneha Paul",
            rollNumber: "BCA004",
            department: "Computer Applications",
            semester: "6th",
            cgpa: 8.4,
            photo: "/students/sneha.jpg",
        },
        {
            name: "Amit Ghosh",
            rollNumber: "BCA005",
            department: "Computer Applications",
            semester: "6th",
            cgpa: 9.0,
            photo: "/students/amit.jpg",
        },
        {
            name: "Ananya Sen",
            rollNumber: "BCA006",
            department: "Computer Applications",
            semester: "6th",
            cgpa: 8.1,
            photo: "/students/ananya.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-text">
            <Header />

            <main>
                <StudentList students={students} />
            </main>

            <Footer />
        </div>
    );
}

export default App;
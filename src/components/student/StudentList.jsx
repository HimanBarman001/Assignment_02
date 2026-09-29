import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
    const [sortOrder, setSortOrder] = useState("high");

    const sortedStudents = [...students].sort((a, b) => {
        if (sortOrder === "high") {
            return b.cgpa - a.cgpa;
        }

        return a.cgpa - b.cgpa;
    });

    return (
        <section
            id="students"
            className="mx-auto max-w-7xl px-6 py-12"
        >
            {/* Heading and Sort */}
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="mb-2 text-sm font-semibold text-primary">
                        Student Records
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-text">
                        Students
                    </h2>
                </div>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-text outline-none focus:border-primary"
                >
                    <option value="high">CGPA: High to Low</option>
                    <option value="low">CGPA: Low to High</option>
                </select>
            </div>

            {/* Student Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sortedStudents.map((student) => (
                    <StudentCard
                        key={student.rollNumber}
                        name={student.name}
                        rollNumber={student.rollNumber}
                        department={student.department}
                        semester={student.semester}
                        cgpa={student.cgpa}
                        photo={student.photo}
                    />
                ))}
            </div>
        </section>
    );
}

export default StudentList;
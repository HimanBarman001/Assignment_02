function StudentCard({
    name,
    rollNumber,
    department,
    semester,
    cgpa,
    photo,
}) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-dark hover:shadow-xl">

            {/* Student Photo */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                    src={photo}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center 30%' }}
                />

                {/* CGPA */}
                <div className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-2 shadow-md">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                        CGPA
                    </p>

                    <p className="text-lg font-bold leading-none text-primary">
                        {cgpa}
                    </p>
                </div>
            </div>

            {/* Student Details */}
            <div className="p-6">

                {/* Name */}
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-text">
                        {name}
                    </h2>

                    <p className="mt-1 text-sm text-text-muted">
                        Roll No. {rollNumber}
                    </p>
                </div>

                {/* Details */}
                <div className="mt-6 space-y-4">

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-text-muted">
                            Department
                        </span>

                        <span className="max-w-[60%] text-right text-sm font-semibold text-text">
                            {department}
                        </span>
                    </div>

                    <div className="h-px bg-border" />

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-text-muted">
                            Semester
                        </span>

                        <span className="text-sm font-semibold text-text">
                            {semester}
                        </span>
                    </div>

                </div>

                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
                    <span className="h-2 w-2 rounded-full bg-success" />

                    <span className="text-xs font-medium text-text-muted">
                        Student Record
                    </span>
                </div>

            </div>
        </div>
    );
}

export default StudentCard;
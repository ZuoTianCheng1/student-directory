import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  return (
    <main className="student-directory">
      <h1>Student Directory</h1>
      <p>Browse all students in the directory.</p>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </main>
  );
}
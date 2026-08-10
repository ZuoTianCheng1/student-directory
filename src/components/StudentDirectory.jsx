import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
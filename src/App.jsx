import './App.css';
import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls.jsx';
export default function App() {
const [students, setStudents] = useState(initialStudents);
const [searchTerm, setSearchTerm] = useState('');
const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'deansLister' |
'probation'
// TODO 1: handleAddStudent(newStudent)
function handleAddStudent(newStudent) {
  const studentWithId = { ...newStudent, id: Date.now() };
  setStudents((prevStudents) => [...prevStudents, studentWithId]);
}

// TODO 2: visibleStudents
let visibleStudents = students;

if (searchTerm !== '') {
  visibleStudents = visibleStudents.filter((student) =>
    student.name.includes(searchTerm)
  );
}

if (statusFilter === 'deansLister') {
  visibleStudents = visibleStudents.filter((student) => student.gwa <= 1.75);
} else if (statusFilter === 'probation') {
  visibleStudents = visibleStudents.filter((student) => student.status === 'On Probation');
}
return (
<div>
<h1>Student Directory</h1>
<StudentForm onAdd={<StudentForm onAdd={handleAddStudent} />} />
<DirectoryControls
searchTerm={searchTerm}
onSearchChange={setSearchTerm}

statusFilter={statusFilter}
onStatusFilterChange={setStatusFilter}
/>
<StudentDirectory students={<StudentDirectory students={visibleStudents} />} />
</div>
);
}
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
// - give the new student a unique id (e.g. Date.now())
// - add it to students WITHOUT mutating the original array (spread into a new array)
// TODO 2: visibleStudents
// - start from `students`

// - if searchTerm is not empty, keep only students whose name includes it (case-sensitive)

// - then apply statusFilter:
// 'deansLister' -> keep only gwa <= 1.75
// 'probation' -> keep only status === 'On Probation'
// 'all' -> no extra filtering
// - compute this fresh every render — do NOT put it in its own useState
return (
<div>
<h1>Student Directory</h1>
<StudentForm onAdd={/* TODO 3: pass handleAddStudent */} />
<DirectoryControls
searchTerm={searchTerm}
onSearchChange={setSearchTerm}

statusFilter={statusFilter}
onStatusFilterChange={setStatusFilter}
/>
<StudentDirectory students={/* TODO 4: pass visibleStudents, NOT students */} />
</div>
);
}
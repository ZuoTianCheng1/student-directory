import { useState } from 'react';
import styles from './StudentForm.module.css';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    const newStudent = {
      name,
      course,
      yearLevel,
      status,
      gwa,
    };

    onAdd(newStudent);

    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* TODO 6: one controlled input/select per field above, */}
      {/* each with value={...} and onChange={(e) => set...(e.target.value)} */}
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Year Level"
        value={yearLevel}
        onChange={(e) => setYearLevel(e.target.value)}
      />

      <select
        className={styles.input}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Regular">Regular</option>
        <option value="deansLister">Dean's Lister</option>
        <option value="probation">On Probation</option>
      </select>

      <input
        className={styles.input}
        type="number"
        step="0.01"
        placeholder="GWA"
        value={gwa}
        onChange={(e) => setGwa(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

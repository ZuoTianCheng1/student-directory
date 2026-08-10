import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isDeansLister = student.gwa <= 1.75;
  const isOnProbation = student.status === 'On Probation';

  const cardClassName = isOnProbation
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClassName}>
      <h3>{student.name}</h3>
      <p>{student.course} - Year {student.yearLevel}</p>

      {isOnProbation ? (
        <p>On Probation</p>
      ) : (
        <p>{student.status}</p>
      )}

      <p>GWA: {student.gwa}</p>

      {isDeansLister && <p className={styles.badge}>Dean's Lister</p>}
    </div>
  );
}
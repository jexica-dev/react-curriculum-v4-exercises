import { useEffect, useState } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  const isEditing = Boolean(editingSnack);

  const validateName = () => name.trim().length > 0;
  const validateRating = () => rating !== '';

  const getNameError = () => {
    return touched.name && !validateName() ? 'Snack name is required' : null;
  };

  const getRatingError = () => {
    return touched.rating && !validateRating()
      ? 'Please select a rating'
      : null;
  };

  useEffect(() => {
    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }
    setTouched({ name: false, rating: false });
  }, [editingSnack, isEditing]);

  function handleSubmit(e) {
    e.preventDefault();

    setTouched({ name: true, rating: true });

    if (!validateName() || !validateRating()) {
      return;
    }
    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);

      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  const nameError = getNameError();
  const ratingError = getRatingError();

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          className={`${styles['field-input']} ${nameError ? styles['input-error'] : ''}`}
          placeholder="Enter snack name"
        />
        {nameError && <div className={styles.error}>{nameError}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          min="1"
          max="5"
          className={`${styles['field-input']} ${ratingError ? styles['input-error'] : ''}`}
          placeholder="Rate 1-5"
        />
        {ratingError && <div className={styles.error}>{ratingError}</div>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
          disabled={!validateName() || !validateRating()}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

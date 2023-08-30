import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const useModal = () => {  
  const Modal = ({editTodo, show, closeModal, onSave }) => {
    const contentRef = useRef(null);
    const [editTask, setEditTask] = useState(editTodo);

    const handleInputChange = (e) => {
      setEditTask({...editTask, task: e.target.value });
    }

    const handleSave = () => {
      onSave(editTask);
      closeModal();
    }
    useEffect(() => {
      if (contentRef.current === null) return;

      if (show) {
        disableBodyScroll(contentRef.current, {
          reserveScrollBarGap: true,
        });
      } else {
        enableBodyScroll(contentRef.current);
      }

      return () => {
        clearAllBodyScrollLocks();
      };
    }, [show, contentRef]);

    if (!show) return null;
    return createPortal(
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'grey',
            opacity: '0.5',
          }}></div>
        <div style={{ position: 'relative' }} ref={contentRef}>
          <div style={{
            backgroundColor: 'white',
            width: '300px',
            height: '200px',
            padding: '1rem',
            borderRadius: '15px',
          }}>
            <input value={editTask.task} onChange={handleInputChange} />
            <button onClick={handleSave}>Save</button>
            <button onClick={closeModal}>Close</button>
        </div>
        </div>
      </div>,
      document.getElementById('root')
    )
  };
  return { Modal };
}

export default useModal;
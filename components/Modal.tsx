import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from './icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const modalPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true); // Ensure component is mounted on client before using portal
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-brand-dark/60 backdrop-blur-sm`}
      />
      
      {/* Panel */}
      <div
        ref={modalPanelRef}
        className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
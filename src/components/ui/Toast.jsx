import { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 right-5 bg-accent text-white px-4 py-2 rounded shadow-lg animate-slide-in">
      {message}
    </div>
  );
};

export default Toast;

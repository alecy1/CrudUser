import { useEffect, useRef, useContext} from 'react';
import { ThemeContext } from './exportar';

export default function ModalDialog({ isOpen, children }) {
  const theme = useContext(ThemeContext);
  const className = theme;
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref} className={className} >{children}</dialog>;
}

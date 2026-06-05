import { useState } from 'react';

function Accordion({ children, title }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span>{open ? '-' : '+'}</span>
      </div>
      {open && children}
    </>
  );
}

export default Accordion;

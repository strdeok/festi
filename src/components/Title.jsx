export default function Title() {
  return (
    <div className="font-['Helvetica'] font-black text-yellow text-7xl -tracking-widest">
      fest!
    </div>
  );
}

export function MiddleTitle() {
  return (
    <div
      className="font-['Helvetica'] font-black text-yellow text-5xl -tracking-widest"
    >
      fest!
    </div>
  );
}

export function FreeTitle({ size }) {
  return (
    <div
      className={`font-['Helvetica'] font-black text-yellow text-${size} -tracking-widest`}
    >
      fest!
    </div>
  );
}


export function SmallTitle({ color }) {
  return (
    <div
      className={`font-['Helvetica'] font-black  text-3xl -tracking-widest ${color}`}
    >
      fest!
    </div>
  );
}

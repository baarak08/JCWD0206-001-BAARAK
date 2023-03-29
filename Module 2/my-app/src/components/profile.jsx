export default function Profile(props) {
  console.log(props);
  return (
    <div>
      <h1 style={{ ...props }}>ini Profile</h1>
    </div>
  );
}

export function Propicts(props) {
  console.log(props);
  return (
    <div>
      <h1 style={{ ...props }}>ini adalah {props.value}</h1>
    </div>
  );
}
export function Isidata(props) {
  console.log(props);
  return (
    <div style={{ ...props }}>
      <h1>ini apaaa?? </h1>
      <Looping />
    </div>
  );
}

function Looping() {
  let arr = [`udin`, `marco`, `tiberus`];
  return (
    <div>
      {arr.map((val) => (
        <div> {val}</div>
      ))}
    </div>
  );
}

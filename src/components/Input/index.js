function Input({ dataParent, setDataParent }) {
  return (
    <>
      <p>parent: {dataParent}</p>
      <input
        value={dataParent}
        // e = event
        onChange={e => setDataParent(e.target.value)} 
      />
    </>
  );
}

export default Input;

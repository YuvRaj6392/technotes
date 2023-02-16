

export default function Notes(props) {
  const note = props.note;
  return (
    <>
      <div style={{ display: "flex", flexWrap:'wrap',justifyContent:'space-between',marginTop:30}}>
        {note.map((ele) => {
          return (
            <div class="card" key={ele.id} style={{marginBottom:30,maxHeight:350,maxWidth:350,minHeight:350,minWidth:350,overflow:'scroll'}}>
              <h5 class="card-header" >{ele.title}</h5>
              <div class="card-body">
                <p class="card-text">{ele.description}</p>
                <hr />
                <p class="card-text">{ele.tag}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

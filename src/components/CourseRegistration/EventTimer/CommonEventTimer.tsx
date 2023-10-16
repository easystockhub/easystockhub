export function CommonEventTimer({count, name}: {count: number, name: string}) {
    return (
  
        <div
          style={{
            height: "130px",
            width: "130px",
            backgroundColor: "#1D34A4",
            borderRadius: "10px",
            marginRight: "10px"
          }}
        >
          <div style={{padding: "20px"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <b style={{ fontSize: "30px" }}>{count}</b>
          </div>
          <hr style={{marginTop: "10px", marginBottom: "10px"}}></hr>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              
            }}
          >
            <b>{name}</b>
          </div>
          </div>
  
        </div>
  
    );
  }
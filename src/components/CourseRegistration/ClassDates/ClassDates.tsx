import { Col, Row } from "antd";
import { RegisterNow } from "../RegisterNow";

export function ClassDates() {
  const dateAndTime = [
    { date: "10 OCT Sunday", time: "06-09 PM" },
    { date: "11 OCT Monday", time: "06-09 PM" },
    { date: "12 OCT Tuesday", time: "06-09 PM" },
    { date: "13 OCT Wednesday", time: "06-09 PM" },
    { date: "14 OCT Thursday", time: "06-09 PM" },
  ];
  return (
    <>
    <Row style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
      {dateAndTime.map((data) => {
        return (
          <Col key={data.date} xs={24} sm={24} md={24} lg={24} xl={3} xxl={3}>
            <div
              style={{
                  backgroundColor: "#E7E6E4",
                borderRadius: "10px",
                marginRight: "10px",
                marginTop: "10px"
            }}
            >
              <div style={{ padding: "15px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>
                    <b style={{ fontFamily: "monospace", fontSize: "12px" }}>{data.date}</b>
                  </span>
                </div>
                <hr style={{ marginTop: "10px", marginBottom: "10px" }}></hr>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>
                    <b style={{ fontFamily: "monospace",fontSize: "12px" }}>{data.time}</b>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        );
    })}
    </Row>
    <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}} >

    <RegisterNow />
    </div>
    </>
  );
}

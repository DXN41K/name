import { useState } from "react";

export default function CalcPage() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  return (
    <section className="content">
      <div className="left-content">
        <div className="activities">
          <h1>Калькулятор</h1>
          <div className="activity-container" style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                value={val1}
                type="number"
                onChange={(e) => setVal1(e.target.value)}
              ></input>{" "}
              +{" "}
              <input
                type="number"
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
              />{" "}
              = <input readOnly type="number" value={+val1 + +val2} />
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">Драсть</div>
    </section>
  );
}

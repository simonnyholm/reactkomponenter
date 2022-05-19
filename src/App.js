/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Leisure from "./components/Leisure.jsx";
import Travel from "./components/Travel.jsx";


function App() {
  const styles = {
    page: css`
      padding: 30px;
      background-color: rgb(189, 187, 195); ;
    `,
    travelLeisure: css`
      display: flex;
      justify-content: space-between;
      row-gap: 10px;
    `,
  };

  return (
    <div className="App">
      <div className="page" css={styles.page}>
        <div css={styles.travelLeisure}>
          <Travel />
          <Leisure />
        </div>
      </div>
    </div>
  );
}

export default App;

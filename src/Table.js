import Action from "./Action";

const Table = () => {
  return (
    <div className="tableContainer">
      <table>
        <caption></caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Risk</th>
            <th scope="col">Rating</th>
            <th scope="col">Sustainability</th>
            <th scope="col">Type</th>
            <th scope="col">Region</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="mobileColumnGroup">
            <th scope="colgroup" colSpan="6">
              <span>Fund 1</span>
            </th>
          </tr>

          <tr>
            <th scope="row" className="rowHeader">
              Fund 1
            </th>
            <td>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
            </td>
            <td>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
            </td>
            <td>
              <span className="sustainability material-icons">spa</span>
            </td>
            <td>Stock</td>
            <td>Global</td>
            <td>
              <Action />
            </td>
          </tr>

          <tr className="mobileColumnGroup">
            <th scope="colgroup" colSpan="6">
              <span>Fund 2</span>
            </th>
          </tr>

          <tr>
            <th scope="row" className="rowHeader">
              Fund 2
            </th>
            <td>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
            </td>
            <td>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
            </td>
            <td>
              <span className="sustainability material-icons">spa</span>
              <span className="sustainability material-icons">spa</span>
              <span className="sustainability material-icons">spa</span>
            </td>
            <td>Stock</td>
            <td>The Nordics</td>
            <td>
              <Action />
            </td>
          </tr>

          <tr className="mobileColumnGroup">
            <th scope="colgroup" colSpan="6">
              <span>Fund 3</span>
            </th>
          </tr>

          <tr>
            <th scope="row" className="rowHeader">
              Fund 3
            </th>
            <td>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
            </td>
            <td>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
            </td>
            <td>
              <span className="sustainability material-icons">spa</span>
              <span className="sustainability material-icons">spa</span>
            </td>
            <td>Index</td>
            <td>Global</td>
            <td>
              <Action />
            </td>
          </tr>

          <tr className="mobileColumnGroup">
            <th scope="colgroup" colSpan="6">
              <span>Fund 4</span>
            </th>
          </tr>

          <tr>
            <th scope="row" className="rowHeader">
              Fund 4
            </th>
            <td>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
              <span className="risk material-icons">noise_control_off</span>
            </td>
            <td>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
              <span className="stars material-icons">star</span>
            </td>
            <td>
              <span className="sustainability material-icons">spa</span>
              <span className="sustainability material-icons">spa</span>
              <span className="sustainability material-icons">spa</span>
            </td>
            <td>Stock</td>
            <td>Global</td>
            <td>
              <Action />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

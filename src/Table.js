import IconGroup  from "./IconGroup";
import Action from "./Action";

const Table = () => {
  return (
    <div className="tableContainer">
      <table>
        <caption></caption>
        <thead>
          <tr>
            <th scope="col"></th>
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
            <td aria-label="Level 5">
              <IconGroup amount={6} type="risk" name="noise_control_off"/>
            </td>
            <td>
              <IconGroup amount={5} type="stars" name="star"/>
            </td>
            <td>
              <IconGroup amount={1} type="sustainability" name="spa"/>
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
              <IconGroup amount={4} type="risk" name="noise_control_off"/>
            </td>
            <td>
              <IconGroup amount={3} type="stars" name="star"/>
            </td>
            <td>
              <IconGroup amount={1} type="sustainability" name="spa"/>
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
              <IconGroup amount={3} type="risk" name="noise_control_off"/>
            </td>
            <td>
              <IconGroup amount={4} type="stars" name="star"/>
            </td>
            <td>
              <IconGroup amount={2} type="sustainability" name="spa"/>
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
              <IconGroup amount={6} type="risk" name="noise_control_off"/>
            </td>
            <td>
              <IconGroup amount={3} type="stars" name="star"/>
            </td>
            <td>
              <IconGroup amount={3} type="sustainability" name="spa"/>
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

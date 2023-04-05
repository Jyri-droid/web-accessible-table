import IconGroup  from "./IconGroup";
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
              <span title="Level 6" />
              <IconGroup amount={6} type="risk" name="noise_control_off" />
            </td>
            <td>
              <span title="Level 5" />
              <IconGroup amount={5} type="stars" name="star"/>
            </td>
            <td>
              <span title="Level 1" />
              <IconGroup amount={1} type="sustainability" name="spa"/>
            </td>
            <td headers="name name-mobile">Stock</td>
            <td headers="name name-mobile">Global</td>
            <td headers="name name-mobile">
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
            <span title="Level 4" />
              <IconGroup amount={4} type="risk" name="noise_control_off"/>
            </td>
            <td>
            <span title="Level 3" />
              <IconGroup amount={3} type="stars" name="star"/>
            </td>
            <td>
            <span title="Level 1" />
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
              <span title="Level 3" />
              <IconGroup amount={3} type="risk" name="noise_control_off"/>
            </td>
            <td>
              <span title="Level 4" />
              <IconGroup amount={4} type="stars" name="star"/>
            </td>
            <td>
              <span title="Level 2" />
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
              <span title="Level 6" />
              <IconGroup amount={6} type="risk" name="noise_control_off"/>
            </td>
            <td>
              <span title="Level 3" /> 
              <IconGroup amount={3} type="stars" name="star"/>
            </td>
            <td>
            <span title="Level 3" />
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

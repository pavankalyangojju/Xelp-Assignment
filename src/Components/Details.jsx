import "./details.css"

export const Details = ({ props }) => {
    console.log("props", props);
    return (
      <div>
        {props.map(({ phone, flag }) => (
          <div className="prime-not">
            <h3>{phone + ":" + flag}</h3>
          </div>
        ))}
      </div>
    );
};
  
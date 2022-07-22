export const Details = ({ props }) => {
    console.log("props", props);
    return (
      <div>
        {props.map(({ phone, flag }) => (
          <div>
            <h1>{phone + ":" + flag}</h1>
          </div>
        ))}
      </div>
    );
};
  
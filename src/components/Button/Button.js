export const Button = ({ galery, onChange }) => {
  if (galery === 0) {
    return;
  } else
    return (
      <button className="Button " onClick={onChange}>
        load more
      </button>
    );
};

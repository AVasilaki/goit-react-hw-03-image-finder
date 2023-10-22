export const Button = ({ galery, onChange }) => {
  console.log(galery);
  if (galery === 0) {
    return;
  } else
    return (
      <button className="load-more" onClick={onChange}>
        load more
      </button>
    );
};

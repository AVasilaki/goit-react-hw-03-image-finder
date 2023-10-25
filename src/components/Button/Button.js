export const Button = ({ galery, onLoadMore }) => {
  if (galery === 0) {
    return;
  } else
    return (
      <button className="Button " onClick={onLoadMore}>
        load more
      </button>
    );
};

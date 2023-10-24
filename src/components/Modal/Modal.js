import * as basicLightbox from 'basiclightbox';
export const Modal = ({ large }) => {
  const instance = basicLightbox.create(`
    <div class="overlay">
  <div class="modal">
    <img src="${large}" alt="" />
  </div>
</div>
`);

  instance.show();
};

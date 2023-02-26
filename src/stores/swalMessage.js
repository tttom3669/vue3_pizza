import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export default defineStore('swalMessage', {
  actions: {
    swalShow(title, icon, type = 'message') {
      if (type === 'message') {
        Swal.fire({
          icon: `${icon}`,
          title: `${title}`,
        });
      } else if (type === 'toast') {
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          icon: `${icon}`,
          timer: 3000,
          title: `${title}`,
        });
      }
    },
  },
});

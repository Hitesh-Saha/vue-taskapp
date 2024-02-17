<template>
    <!-- Open the modal using ID.showModal() method -->
<!-- <button class="btn" onclick="EditModal.showModal()">open modal</button> -->
<dialog id="EditModal" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
    </form>
    <h3 class="font-bold text-lg">Edit Project</h3>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</template>

<script setup>
</script>
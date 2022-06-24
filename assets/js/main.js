document.addEventListener("DOMContentLoaded", function () {
  const profileArrow = document.querySelector("#profile-arrow");
  profileArrow.addEventListener("click", toggleProfileMenu);

  const addAddressButton = document.querySelector("#addAddress");
  addAddressButton.addEventListener("click", showNewAddressForm);
});

function toggleProfileMenu() {
  document.querySelector("#profile-menu").classList.toggle("hidden");
}

function showNewAddressForm() {
  document.querySelector("#newAddressForm").classList.remove("hidden");
}

function hideNewAddressForm() {
  document.querySelector("#newAddressForm").classList.add("hidden");
}

function showEditAddressForm(address) {
  const oldAddress = JSON.parse(address);
  const editForm = document.querySelector("#editAddressForm");
  editForm.querySelector("input[name='addressId']").value = oldAddress.id;
  editForm.querySelector("input[name='line1']").value = oldAddress.line1;
  editForm.querySelector("input[name='city']").value = oldAddress.city;
  editForm.querySelector("input[name='postcode']").value = oldAddress.postcode;
  editForm.querySelector("input[name='country']").value = oldAddress.country;
  editForm.classList.remove("hidden");
}

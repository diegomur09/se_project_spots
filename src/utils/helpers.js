export function setButtonText(
  btn,
  isLoadig,
  defaultText = "Save",
  loadingText = "Saving..."
) {
  if (isLoadig) {
    btn.textContent = loadingText;
  } else {
    btn.textContent = defaultText;
  }
}

export function setButtonDelete(
  btn,
  isDeleting,
  defaultText = "Delete",
  loadingText = "Deleting"
) {
  if (isDeleting) {
    btn.textContent = loadingText;
  } else {
    btn.textContent = defaultText;
  }
}

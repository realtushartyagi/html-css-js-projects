function moveToNextField(currentInput, nextInputId) {
  if (currentInput.value.length === currentInput.maxLength) {
    document.getElementById(nextInputId).focus();
  }
}

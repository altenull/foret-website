export const clipboardCopy = (value) => {
  if (document != null) {
    const textareaElement = document.createElement('textarea');

    textareaElement.value = value;

    document.body.appendChild(textareaElement);
    textareaElement.select();
    document.execCommand('copy');
    document.body.removeChild(textareaElement);

    return true;
  } else {
    return false;
  }
};

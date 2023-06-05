<script id="toggle-light-dark-elements" type="application/javascript">
// Extend Quarto theme toggling to allow elements to be displayed/hidden in light/dark themes

// Replicated from https://github.com/quarto-dev/quarto-cli/blob/84d4659/src/resources/formats/html/templates/quarto-html.ejs
const getColorSchemeSentinel = () => {
  const localAlternateSentinel = 'alternate';
  if (window.location.protocol !== 'file:') {
    const storageValue = window.localStorage.getItem('quarto-color-scheme');
    return storageValue != null ? storageValue : localAlternateSentinel;
  } else {
    return localAlternateSentinel;
  }
};

// Function to toggle light and dark elements based on color scheme
const toggleColorSchemeElements = () => {
  const scheme = getColorSchemeSentinel();
  const lightElements = document.getElementsByClassName('only-light');
  const darkElements = document.getElementsByClassName('only-dark');

  for (var i = 0; i < lightElements.length; i++) {
    lightElements[i].style.display = scheme == 'default' ? 'block' : 'none';
  }
  for (var i = 0; i < darkElements.length; i++) {
    darkElements[i].style.display = scheme == 'default' ? 'none' : 'block';
  }
};

// Add event listener for when the readyState is complete (and default toggler is set)
document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
    // Toggle scheme once
    toggleColorSchemeElements();
    // Append our toggle function to the old one
    const oldToggle = window.quartoToggleColorScheme;
    window.quartoToggleColorScheme = () => {
      oldToggle();
      toggleColorSchemeElements();
    }
  }
});
</script>

document.getElementById('certificateForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // Update certificate content
  document.getElementById('certificateName').textContent = `This certificate is awarded to ${name}`;
  document.getElementById('certificateMessage').textContent = message;

  // Show the certificate
  document.getElementById('certificate').classList.remove('hidden');
});

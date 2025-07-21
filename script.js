const password = document.getElementById('password');
const strength = document.getElementById('strength');

password.addEventListener('input', () => {
  const val = password.value;
  let score = 0;

  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[\W]/.test(val)) score++;

  let result;
  switch (score) {
    case 0:
    case 1:
      result = 'Very Weak';
      strength.style.color = 'red';
      break;
    case 2:
      result = 'Weak';
      strength.style.color = 'orange';
      break;
    case 3:
      result = 'Moderate';
      strength.style.color = 'blue';
      break;
    case 4:
      result = 'Strong';
      strength.style.color = 'green';
      break;
  }

  strength.textContent = `Strength: ${result}`;
});

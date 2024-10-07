const allChecklistItems = [
  ['Wake up', 'Rot', 'journal in cafe', 'Ice coffee', 'Make assets for boss'],
  [
    'Go home',
    'Disappoint therapist',
    "She doesn't know how to help",
    'Actually, sad and disorienting event might be trauma',
  ],
  [
    'My body is tense',
    'Project manage feature launch',
    'Journal the same stuff',
    "What's still unresolved?",
    'Is this rumination or healing?',
  ],
  [
    'Launch feature',
    'Go to yoga',
    'Sob on way home',
    'Wonder if neighbors know me as the girl who cries in weird places',
  ],
  [
    'Journal more',
    "Maybe I get frustrated with my therapist when I don't realize what I need for myself",
    "Sad Trader Joe's dinner",
    'At least I had broccoli',
  ],
  [
    'Is it worth thinking more',
    'Shower',
    'Do my silly HTML homework',
    'Put Nathan for You on in the background',
  ],
  ['January is bad', 'Hope someday the sadness will take a different shape'],
];

function createLabel() {
  const rows = document.querySelectorAll('.row');
  let num = 0;

  rows.forEach((row, index) => {
    for (let i = 0; i < allChecklistItems[index].length; i++) {
      const label = document.createElement('label');
      label.setAttribute('for', 'label' + num);
      label.textContent = allChecklistItems[index][i];
      row.appendChild(label);
      num++;
    }
  });
}

function createChecklist() {
  const allLabels = document.querySelectorAll('label');

  allLabels.forEach((label, index) => {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('name', 'label' + index);
    checkBox.id = 'label' + index;
    checkBox.style.width = '20px';
    label.appendChild(checkBox);
  });
}

createLabel();
createChecklist();

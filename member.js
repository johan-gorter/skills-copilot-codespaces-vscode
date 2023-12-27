function skillsMember() {
  // skillsMember
  const skillsMember = document.querySelectorAll('.skills-member');

  if (skillsMember) {
    skillsMember.forEach((skill) => {
      const skillValue = skill.querySelector('.skill-value');
      const skillBar = skill.querySelector('.skill-bar');

      skillBar.style.width = skillValue.innerHTML;
    });
  }
}
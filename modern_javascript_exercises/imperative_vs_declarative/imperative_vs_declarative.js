// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) { 
  return passwords.filter((password) => password.length >= 9);
}

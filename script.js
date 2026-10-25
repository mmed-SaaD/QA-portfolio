const nav = document.getElementById('navLinks');
const menu = document.getElementById('menuButton');
const header = document.getElementById('siteHeader');
const progress = document.getElementById('readingProgress');
const navLinks = [...document.querySelectorAll('.nav-link')];
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .09, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}
const observedSections = [...document.querySelectorAll('main section[id]')];
let ticking = false;
function syncPosition() {
  header.classList.toggle('scrolled', window.scrollY > 32);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
  let current = 'home';
  for (const section of observedSections) if (section.getBoundingClientRect().top <= 140) current = section.id;
  if (current === 'about') current = 'home';
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  ticking = false;
}
window.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(syncPosition); ticking = true; } }, { passive: true });
window.addEventListener('resize', syncPosition);
syncPosition();
document.getElementById('year').textContent = new Date().getFullYear();

// Bilingual interface. English remains the original source; French is applied
// to text nodes only, so existing HTML structure and scroll effects are untouched.
const french = {
'Skip to content':'Aller au contenu','Home':'Accueil','Work':'Projets','Approach':'Méthode','Research':'Recherche','Credentials':'Parcours','Contact':'Contact','OPEN TO OPPORTUNITIES':'À L’ÉCOUTE D’OPPORTUNITÉS',
'THE PERSON BEHIND THE TESTS':'DERRIÈRE LES TESTS','HELLO, I\'M':'BONJOUR, JE SUIS','I BREAK':'JE CASSE',
'THINGS.':'AVANT QUE',
'SO USERS':'ÇA CASSE.',
'DON\'T.':'',
'QA & Test Automation Engineer building reliable software through thoughtful testing, automation, and a little healthy skepticism.':'Ingénieur QA et automatisation des tests. Je contribue à la fiabilité des logiciels grâce à des tests réfléchis, à l’automatisation et à un esprit critique constructif.',
'EXPLORE MY WORK':'VOIR MES PROJETS','DOWNLOAD CV':'TÉLÉCHARGER MON CV','SCROLL TO EXPLORE':'DÉFILER POUR EXPLORER','CASABLANCA, MOROCCO · 2026':'CASABLANCA, MAROC · 2026','SYSTEM STATUS':'ÉTAT DU SYSTÈME','● ONLINE':'● EN LIGNE','ENGINEERED':'CONÇU','FOR TRUST':'POUR LA FIABILITÉ','REQUIREMENTS':'EXIGENCES','AUTOMATION':'AUTOMATISATION','VALIDATION':'VALIDATION','REPEATABILITY':'RÉPÉTABILITÉ','→ BY DESIGN':'→ PAR CONCEPTION','QUALITY_PIPELINE / LIVE PREVIEW':'PIPELINE QUALITÉ / APERÇU','collecting':'collecte','test cases...':'des cas de test...','requirements validated':'exigences validées','assertions verified':'assertions vérifiées','quality is a process':'la qualité est un processus',
'THE SHORT VERSION':'EN QUELQUES MOTS','TESTING ISN\'T':'TESTER, CE N’EST PAS','JUST FINDING BUGS.':'SEULEMENT TROUVER DES BUGS.','It\'s understanding what could go wrong':'C’est comprendre ce qui pourrait mal tourner','before':'avant','it reaches someone who depends on it.':'que cela n’affecte les personnes qui utilisent le logiciel.','I work at the intersection of software testing, automation, and cybersecurity—with a Master’s in Information Systems Security and an ISTQB CTFL certification. I like systems that are observable, tests that tell the truth, and documentation another engineer can actually use.':'Je travaille à la croisée du test logiciel, de l’automatisation et de la cybersécurité. Titulaire d’un Master en sécurité des systèmes d’information et certifié ISTQB CTFL, je privilégie les systèmes observables, les résultats transparents et une documentation réellement utile.','A BIT ABOUT HOW I WORK':'DÉCOUVRIR MA MÉTHODE',
'SELECTED WORK':'PROJETS SÉLECTIONNÉS','BUILT TO':'CONÇU POUR','BE TESTED.':'ÊTRE TESTÉ.','FOUR PROJECTS. FOUR DIFFERENT WAYS TO ASK THE SAME QUESTION:':'QUATRE PROJETS. QUATRE FAÇONS DE POSER LA MÊME QUESTION :','“WHAT IF THIS FAILS?”':'« ET SI ÇA ÉCHOUAIT ? »','FEATURED CASE STUDY':'PROJET À LA UNE','CUSTOMER LOGIN':'CONNEXION CLIENT','AGENT WORKFLOW':'FLUX DES AGENTS','● READY':'● PRÊT','INPUT':'ENTRÉE','TEST CASES':'CAS DE TEST','SCRIPTS GENERATED':'SCRIPTS GÉNÉRÉS','6 BLOCKED BY VALIDATION':'6 BLOQUÉS PAR VALIDATION','1 UNSUPPORTED':'1 NON PRIS EN CHARGE','HUMAN REVIEW FIRST':'REVUE HUMAINE D’ABORD','AUTOMATE RESPONSIBLY / NOT BLINDLY':'AUTOMATISER AVEC DISCERNEMENT','AI-ASSISTED QA':'QA ASSISTÉE PAR IA','ON GOING':'EN COURS','ONGOING':'EN COURS','A three-agent workspace that turns Jira stories into traceable requirements, structured test cases, and reviewable Playwright automation plans. AI proposes; validation decides what gets generated.':'Une plateforme à trois agents qui transforme les tickets Jira en exigences traçables, cas de test structurés et plans Playwright vérifiables. L’IA propose ; la validation détermine ce qui peut être généré.','76 PASSING BACKEND TESTS':'76 TESTS BACKEND RÉUSSIS','AT REPORTED RUN':'LORS DE LA DERNIÈRE EXÉCUTION RAPPORTÉE',
'MANUAL QUALITY ASSURANCE':'TESTS MANUELS','REQUIREMENTS TRACEABILITY':'TRAÇABILITÉ DES EXIGENCES','USER REGISTRATION':'INSCRIPTION','CHECKOUT PROCESS':'PROCESSUS DE COMMANDE','INPUT VALIDATION':'VALIDATION DES SAISIES','ORDER HISTORY':'HISTORIQUE DES COMMANDES','DEFECTS FOUND':'ANOMALIES IDENTIFIÉES','MANUAL TESTING':'TESTS MANUELS','Full manual QA cycle for an e-commerce application: risk analysis, test planning, traceability, defect reports, and final release assessment.':'Cycle complet de QA manuelle sur une application e-commerce : analyse des risques, planification, traçabilité, rapports d’anomalies et bilan de validation.','45 SCENARIOS':'45 SCÉNARIOS','VIEW REPOSITORY':'VOIR LE DÉPÔT','E2E AUTOMATION':'AUTOMATISATION E2E','EXECUTION REPORT':'RAPPORT D’EXÉCUTION','202 TOTAL TESTS':'202 TESTS AU TOTAL','167 PASS':'167 RÉUSSIS','35 FAIL':'35 ÉCHECS','RECORDED EXECUTION PASS RATE':'TAUX DE RÉUSSITE MESURÉ','AUTOMATION':'AUTOMATISATION','Multi-layer testing of OWASP Juice Shop across UI, API, databases, performance, and security—with CI workflows and Allure reporting.':'Tests multi-niveaux d’OWASP Juice Shop : interface, API, bases de données, performance et sécurité, avec intégration CI et rapports Allure.','MULTI-LAYER QA':'QA MULTI-NIVEAUX','PASS RATE':'TAUX DE RÉUSSITE','PERFORMANCE':'PERFORMANCE','SECURITY':'SÉCURITÉ','QUALITY ENGINEERING / TEST FRAMEWORK':'INGÉNIERIE QUALITÉ / FRAMEWORK DE TEST','186 tests across 21 suites spanning UI, REST APIs, databases, performance, and security. Recorded 97% pass rate, with the complete run finishing in under four minutes.':'186 tests répartis en 21 suites couvrant l’interface, les API REST, les bases de données, la performance et la sécurité. Taux de réussite mesuré de 97 %, en moins de quatre minutes.','The point isn\'t perfect numbers.':'L’objectif n’est pas d’afficher des chiffres parfaits.','It\'s knowing what passed, what didn\'t, and why.':'C’est de comprendre ce qui a réussi, ce qui a échoué et pourquoi.',
'HOW I THINK':'MA FAÇON DE TRAVAILLER','THE METHOD':'LA MÉTHODE','BEHIND THE MADNESS.':'DERRIÈRE LE PROCESSUS.','NOT JUST A LIST OF TOOLS.':'BIEN PLUS QU’UNE LISTE D’OUTILS.','THE HABITS BEHIND THE WORK.':'LES HABITUDES QUI GUIDENT MON TRAVAIL.','QUESTION FIRST.':'QUESTIONNER D’ABORD.','Read the requirement. Challenge the assumption. Understand the risk before writing the test.':'Lire l’exigence, remettre en question les hypothèses et comprendre le risque avant d’écrire le test.','AUTOMATE WITH INTENT.':'AUTOMATISER AVEC INTENTION.','Repeat what matters. Prefer clear assertions and maintainable scripts over impressive test counts.':'Automatiser ce qui compte. Privilégier des assertions claires et des scripts maintenables plutôt que des volumes impressionnants.','SHOW THE EVIDENCE.':'MONTRER LES PREUVES.','Traceability, reports, reproducible defects, and transparent results—not just green badges.':'Traçabilité, rapports, anomalies reproductibles et résultats transparents — pas seulement des voyants verts.','THINK LIKE AN ATTACKER.':'PENSER COMME UN ATTAQUANT.','My security background helps me look for edge cases, weak validation, and unintended behavior.':'Ma formation en sécurité m’aide à repérer les cas limites, les validations insuffisantes et les comportements inattendus.','MY WORKBENCH':'MES OUTILS',
'RESEARCH & PUBLICATION':'RECHERCHE & PUBLICATION','BEYOND THE':'AU-DELÀ DES','TEST SUITE.':'SUITES DE TESTS.','FROM INVESTIGATING NETWORK THREATS':'DE L’ANALYSE DES MENACES RÉSEAU','TO PUBLISHED RESEARCH.':'À LA PUBLICATION SCIENTIFIQUE.','RESEARCH LOG / XGBOOST':'JOURNAL DE RECHERCHE / XGBOOST','NETWORK TRAFFIC → FEATURE ANALYSIS → CLASSIFICATION':'TRAFIC RÉSEAU → ANALYSE DES CARACTÉRISTIQUES → CLASSIFICATION','PUBLISHED BOOK CHAPTER':'CHAPITRE SCIENTIFIQUE PUBLIÉ','NETWORK THREAT CLASSIFICATION USING XGBOOST ON CICFLOWMETER-STYLE FEATURES':'CLASSIFICATION DES MENACES RÉSEAU AVEC XGBOOST À PARTIR DE CARACTÉRISTIQUES DE TYPE CICFLOWMETER','Research into machine-learning-based intrusion detection, exploring how network traffic features can be used to classify cyber threats. Developed during my Master\'s research at ENSA Kénitra.':'Recherche sur la détection d’intrusions par apprentissage automatique, en exploitant les caractéristiques du trafic réseau pour classifier les cybermenaces. Travaux réalisés lors de mon Master à l’ENSA Kénitra.','INTRUSION DETECTION':'DÉTECTION D’INTRUSIONS','MACHINE LEARNING':'APPRENTISSAGE AUTOMATIQUE','CYBERSECURITY':'CYBERSÉCURITÉ','READ THE PUBLICATION':'LIRE LA PUBLICATION',
'THE FOUNDATION':'MON PARCOURS','BEYOND':'AU-DELÀ','THE TOOLKIT.':'DES OUTILS.','THE THEORY MATTERS.':'LA THÉORIE COMPTE.','SO DOES PUTTING IT TO WORK.':'ET SURTOUT SA MISE EN PRATIQUE.','CERTIFICATIONS / TRAINING':'CERTIFICATIONS / FORMATIONS','WEB APPLICATION':'APPLICATION WEB','PENTESTING':'TEST D’INTRUSION','CERTIFIED TESTING FOUNDATION':'FONDAMENTAUX CERTIFIÉS EN TEST LOGICIEL','MEETS SECURITY-MINDED ENGINEERING.':'ET APPROCHE ORIENTÉE SÉCURITÉ.','EDUCATION':'FORMATION','MASTER’S DEGREE':'MASTER','IN INFORMATION SYSTEMS SECURITY':'EN SÉCURITÉ DES SYSTÈMES D’INFORMATION','BACHELOR’S / LICENCE':'LICENCE','IN INFORMATION SYSTEMS & NETWORKS':'EN SYSTÈMES D’INFORMATION ET RÉSEAUX','UDT IN COMPUTER SCIENCE':'DUT EN GÉNIE INFORMATIQUE','SPRINGER':'SPRINGER','PUBLICATION':'PUBLICATION','Machine-learning intrusion detection research':'Recherche en détection d’intrusions par apprentissage automatique',
"LET'S CONNECT":'CONTACTEZ-MOI','HAVE SOMETHING':'UN PROJET','WORTH TESTING?':'À TESTER ?','I\'m looking for opportunities to contribute to teams that care about building software well. Have a QA role, an interesting problem, or a conversation in mind? My inbox is open.':'Je recherche des opportunités pour rejoindre des équipes qui accordent de l’importance à la qualité logicielle. Un poste en QA, un défi technique ou simplement envie d’échanger ? Écrivez-moi.','LET\'S TALK':'ÉCHANGEONS','EMAIL':'E-MAIL','RESUME':'CV','DESIGNED WITH INTENTION. TESTED WITH CURIOSITY.':'CONÇU AVEC INTENTION. TESTÉ AVEC CURIOSITÉ.','BACK TO TOP':'RETOUR EN HAUT',
};
const translatedNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) { return node.parentElement?.closest('script,style') || !node.textContent.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
});
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  translatedNodes.push({node, original:node.textContent});
}
const originalMeta = document.querySelector('meta[name="description"]').content;
function setLanguage(lang) {
  translatedNodes.forEach(({node,original}) => {
    if(lang === 'en') { node.textContent = original; return; }
    const key=original.trim();
    if(Object.prototype.hasOwnProperty.call(french,key)) node.textContent=original.replace(key,french[key]);
    else node.textContent=original;
  });
  document.documentElement.lang=lang;
  document.querySelector('meta[name="description"]').content=lang==='fr'?'Mohamed Saad Bazourhi — Ingénieur QA et automatisation des tests. Projets, publication scientifique, certifications et contact.':originalMeta;
  document.title=lang==='fr'?'Mohamed Saad Bazourhi — Ingénieur QA & Automatisation':'Mohamed Saad Bazourhi — QA & Test Automation';
  document.querySelectorAll('.lang-button').forEach(b=>{const active=b.dataset.lang===lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  try{localStorage.setItem('portfolio-language',lang)}catch(e){}
}
document.querySelectorAll('.lang-button').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
let initialLanguage='en';try{initialLanguage=localStorage.getItem('portfolio-language')==='fr'?'fr':'en'}catch(e){}
setLanguage(initialLanguage);

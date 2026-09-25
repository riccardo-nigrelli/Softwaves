const DEV = (n: string, v = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${n}/${n}-${v}.svg`;

export type Tech = { name: string; icon: string; cat: string };

export const TECH: Tech[] = [
  { name: "C#", icon: DEV("csharp"), cat: "Linguaggi" },
  { name: "TypeScript", icon: DEV("typescript"), cat: "Linguaggi" },
  { name: "Python", icon: DEV("python"), cat: "Linguaggi" },
  { name: "C++", icon: DEV("cplusplus"), cat: "Linguaggi" },
  { name: "Java", icon: DEV("java"), cat: "Linguaggi" },
  { name: ".NET", icon: DEV("dotnetcore"), cat: "Backend e cloud" },
  { name: "Node.js", icon: DEV("nodejs"), cat: "Backend e cloud" },
  { name: "Flask", icon: DEV("flask"), cat: "Backend e cloud" },
  { name: "AWS", icon: DEV("amazonwebservices", "original-wordmark"), cat: "Backend e cloud" },
  { name: "React", icon: DEV("react"), cat: "Interfacce" },
  { name: "Electron", icon: DEV("electron"), cat: "Interfacce" },
  { name: "React Native", icon: DEV("react"), cat: "Interfacce" },
  { name: "Flutter", icon: DEV("flutter"), cat: "Interfacce" },
  { name: "SQL Server", icon: DEV("microsoftsqlserver", "plain"), cat: "Dati" },
  { name: "MySQL", icon: DEV("mysql"), cat: "Dati" },
  { name: "SQLite", icon: DEV("sqlite"), cat: "Dati" },
];

export const TECH_CATS = ["Tutte", "Linguaggi", "Backend e cloud", "Interfacce", "Dati"];

export const STEPS = [
  {
    title: "Scopriamo",
    desc: "Analizziamo i tuoi processi e individuiamo dove si perdono tempo e denaro.",
    out: "Piano di progetto e preventivo chiaro",
    items: ["Incontri con chi usa i processi ogni giorno", "Mappa di flussi, strumenti e sistemi", "Priorità e benefici attesi, nero su bianco"],
  },
  {
    title: "Costruiamo",
    desc: "Sviluppo iterativo con demo ogni settimana: vedi il software crescere e dici la tua.",
    out: "Demo settimanali",
    items: ["Cicli di sviluppo brevi", "Versione di prova sempre accessibile", "Test automatici a ogni rilascio"],
  },
  {
    title: "Lanciamo e seguiamo",
    desc: "Messa in opera, formazione del team e supporto continuo dopo il rilascio.",
    out: "Software operativo e assistenza dedicata",
    items: ["Messa in opera e migrazione dei dati", "Formazione di chi lo userà", "Monitoraggio, manutenzione ed evolutive"],
  },
];

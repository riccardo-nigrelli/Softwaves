// Set NEXT_PUBLIC_SITE_URL in the hosting env if the production domain differs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://softwaves.it").replace(/\/$/, "");

export const SITE = {
  name: "Softwaves",
  slogan: "Take your business up to date",
  title: "Softwaves — Automazione dei processi e software su misura",
  description:
    "Automatizziamo i processi che oggi ti rubano tempo: dati ricopiati a mano, file via email, sistemi che non si parlano. Software su misura, integrazioni e dashboard, dall'idea alla messa in opera.",
  email: "info@softwaves.it",
  phone: "+393483034041",
  vatID: "IT02726610039",
};

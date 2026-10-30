// Kontakt podaci i ponuda na jednom mjestu — mijenjati ovdje, ne po stranici.

export const site = {
  name: 'Meša prerada mesa',
  owner: 'Mehmed Mangić',
  founded: 1998,
  phone: { label: '061 794 820', href: 'tel:+38761794820' },
  phone2: { label: '061 708 316', href: 'tel:+38761708316' },
  email: 'mesarski.obrtmesa@gmail.com',
  hours: '07:00 – 20:00',
  address: 'Vjetrenice 28, Zenica',
  mapsUrl: 'https://maps.google.com/?q=Vjetrenice+28,+Zenica',
  mapsEmbed: 'https://www.google.com/maps?q=Vjetrenice%2028%2C%20Zenica&z=15&output=embed',
  instagram: { handle: '@mesa_preradamesa', url: 'https://www.instagram.com/mesa_preradamesa', followers: '16,1 hiljada' },
  facebook: { url: 'https://www.facebook.com/p/Me%C5%A1a-prerada-mesa-100063566103182/', followers: '109k+' },
};

export const locations = [
  { name: 'Meša — Vjetrenice', address: 'Vjetrenice 28, Zenica, BiH' },
  { name: 'Meša — Tržnica Zenica', address: 'Gradska tržnica, Zenica' },
];

export type Product = {
  name: string;
  text: string;
  image: string;
  alt: string;
  tag?: string;
  hot?: boolean;
  price?: { amount: string; unit: string };
  cta?: { label: string; href: string };
  contain?: boolean;
};

export const products: Product[] = [
  { name: 'Hadžijska sudžuka', text: 'Zenička hadžijska sudžuka, dva puta proglašena najboljom u BiH.', image: 'sudzuk-kolut.webp', alt: 'Hadžijska sudžuka Meša', tag: '2× najbolja u BiH' },
  { name: 'Suho meso', text: 'Goveđe suho meso, sušeno na Vjetrenicama po starom receptu.', image: 'suho-meso-zarebnica.webp', alt: 'Goveđe suho meso Meša' },
  { name: 'Starinska kaurma', text: 'Domaća kaurma, količine su ograničene.', image: 'ig-kaurma-susenje.webp', alt: 'Domaća starinska kaurma', tag: 'U ponudi', hot: true, price: { amount: '10 KM', unit: '/ kg' } },
  { name: 'Ćevapi Meša', text: 'Pakovani i spremni za roštilj ili tavu.', image: 'cevapi-kutija.webp', alt: 'Ćevapi Meša u pakovanju' },
  { name: 'Ovčija i jareća stelja', text: 'Omiljena suha stelja, spremljena tradicionalno.', image: 'ig-kaurma-visi.webp', alt: 'Ovčija i jareća stelja' },
  { name: 'Hladne plate', text: 'Za slavlja, sijela i svaki svečani sto.', image: 'plata.webp', alt: 'Hladna plata Meša', contain: true, cta: { label: 'Naruči platu', href: 'tel:+38761794820' } },
  { name: 'Sudžuk', text: 'Domaći sudžuk za meze, doručak i roštilj.', image: 'sudzuk-meze.webp', alt: 'Sudžuk Meša sa sirom' },
  { name: 'Svježe halal meso', text: 'Svakodnevno u našoj vitrini na Vjetrenicama.', image: 'ig-vitrina.webp', alt: 'Vitrina sa svježim halal mesom', cta: { label: 'Posjetite nas', href: '#kontakt' } },
];

export const gallery = [
  { image: 'ig-majstor.webp', alt: 'Majstor u radnji Meša', tall: true },
  { image: 'ig-gosti.webp', alt: 'Zadovoljni kupci u radnji' },
  { image: 'suho-meso-noz.webp', alt: 'Suho meso na dasci' },
  { image: 'ig-rezanje.webp', alt: 'Rezanje suhog mesa', tall: true },
  { image: 'ig-radnja-susenje.webp', alt: 'Sušionica u radnji' },
  { image: 'suho-meso-blok.webp', alt: 'Narezano suho meso' },
];

export const nav = [
  { label: 'Početna', href: '#top' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Proizvodi', href: '#proizvodi' },
  { label: 'Dostava', href: '#narudzba' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Kontakt', href: '#kontakt' },
];

import React from 'react';
import { Link, graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';

import MainTemplate from 'templates/MainTemplate';
import Home from 'templates/Home';
import Quotation from 'templates/Quotation';
import Profile from 'templates/Profile';
import SEO from 'components/Seo';

const data = `{"quotations":[{"id":"cjvku5fd8abkf09100sdipf4p","text":"Początek każdego nawyku jest jak niewidzialna nić,\njednak ilekroć powtarzamy swoje działania, wzmacniamy tę nić,\ndodajemy do niej kolejny splot, aż stanie się potężną liną\ni oplątuje nas wiązami nie do rozerwania - wiązami myśli i czynów","author":"Orison Swett Marden"}],"profiles":[{"fullName":"Anna Kamińska-Kumorek","bio":"Specjalista neurologopeda, logopeda, nauczyciel edukacji wczesnoszkolnej.\nNa co dzień pracuję jako logopeda w szkole podstawowej, nieustannie podnoszę swoje kwalifikacje i wzbogacam swój warsztat pracy.","phone":"+48 730 633 840","email":"akkumorek@gmail.com","experiences":[{"id":"cjwzafcmr301h0910yo77xkt3","content":"Zaburzeń mowy na tle rozwojowym (dyslalie)"},{"id":"cjwzag8az305g0910bl6g5cc1","content":"Zaburzeń komunikacyjnych w spektrum autyzmu"},{"id":"cjwzaghy92rx20941zptktxx8","content":"Zaburzeń mowy towarzyszącym niepełnosprawności umysłowej"},{"id":"cjwzagvf82ryw0941s5yf17hz","content":"Trudności w czytaniu i pisaniu (dysleksji rozwojowej)"},{"id":"cjwzah7savexz08198gjh6ehk","content":"Zaburzeń płynności mowy (jąkanie)"}]}],"experiences":[{"id":"cjwzai23a30df0910zpov8buh","content":"Studia Podyplomowe w zakresie neurologopedii na Wydziale Pedagogicznym UMK w Toruniu","type":"Studies"},{"id":"cjwzaibkivf3m081998dhrz8s","content":"Studia Podyplomowe w zakresie logopedii na Wydziale Filologicznym UMK w Toruniu","type":"Studies"},{"id":"cjwzaijbt2s6c0941pd1vwlyp","content":"Studia Podyplomowe w zakresie organizacji i zarządzania oświatą w WSB Toruń","type":"Studies"},{"id":"cjwzaiu7kvf6b0819h0feevph","content":"Studia magisterskie w zakresie pedagogiki w Wyższej Szkole Pedagogicznej w Bydgoszczy","type":"Studies"},{"id":"cjwzaj2yi2s8p09419m7or4uu","content":"Studium Nauczycielskie w Bydgoszczy","type":"Studies"},{"id":"cjwzajcb730iu0910egfx52e6","content":"Ogólnopolskim Kongresie Logopedycznym „Interdyscyplinarne badania nad neurorehabilitacją dorosłych”","type":"Conference"},{"id":"cjwzajkcj30jq0910qr7j02sv","content":"Seminarium „Diagnostyka miofunkcjonalna wg A. Kittel”","type":"Conference"},{"id":"cjwzajqkd2sb50941m98r3hxf","content":"Konferencji „Profilaktyka zdrowotna rozwoju dziecka”","type":"Conference"},{"id":"cjwzakanmvfdr0819esoy8syu","content":"Prowadzę terapię logopedyczną w Szkole Podstawowej nr 14 w Toruniu","type":"Professional"},{"id":"cjwzakjq5vff908198nb3ey2e","content":"Pracowałam na stanowisku logopedy w Specjalistycznej Poradni Rehabilitacji Dzieci i Młodzieży z Wadą Słuchu w Toruniu","type":"Professional"}],"offers":[{"id":"cjwzaox3q2svn0941xzp7er61","title":"Diagnoza i terapia\nLogopedyczna","positions":[{"id":"cjwzaxsll2tth09418ppp4m28","content":"Diagnoza i terapia wad wymowy"},{"id":"cjwzay2h9323g0910ma4lvn4k","content":"Diagnoza i terapia opóźnionego rozwoju mowy"}]},{"id":"cjwzapi622sy90941k0ojfgd9","title":"Diagnoza i terapia\nNeurologopedyczna\n","positions":[{"id":"cjwzayjbi2twf0941c5scq7cu","content":"Diagnoza i terapia zaburzeń mowy i języka w przebiegu chorób neurodegeneracyjnych (choroba Alzheimera, otępienie czołowo-skroniowe)"},{"id":"cjwzayp342tx80941s01a3pd3","content":"Diagnoza i terapia zaburzeń językowych osób po udarach, urazach (odbudowa kompetencji komunikacyjnych w przypadku ich utraty w afazji)"},{"id":"cjwzaz1a12tym09416neotws3","content":"Diagnoza i budowa systemu językowego osób z autyzmem"},{"id":"cjwzazacc32860910z34ik1gv","content":"Diagnoza i stymulowanie mowy w przypadku niepełnosprawności umysłowej"}]},{"id":"cjwzapvqh2t0u0941yjc5wi4u","title":"Terapie\nwspomagające\n","positions":[{"id":"cjwzazm4r329f09109hcqfevd","content":"Masaż ręki"},{"id":"cjwzb038t32bd0910gkokez38","content":"Masaż twarzy"},{"id":"cjwzb08z9vhl10819ahzdi5yd","content":"Masaż punktów neuromotorycznych twarzy wg Castillo Moralesa i Swietłany Masgutowej"}]}]}`;

const IndexPage = ({
  data: { therapist: { profiles, quotations } } = JSON.parse(data),
}) => (
  <MainTemplate>
    <>
      <SEO title="" keywords={[`logopeda`, `neurologopeda`, `Toruń`]} />
      <Home profile={profiles[0]} />
      <Quotation quotations={quotations} />
      <Profile profile={profiles[0]} />
      <Link to="/page-2/">Go to page 2</Link>
    </>
  </MainTemplate>
);

export const query = graphql`
  query {
    therapist {
      quotations {
        id
        text
        author
      }
      profiles {
        fullName
        bio
        phone
        email
        position
        experiences {
          id
          content
        }
      }
      experiences {
        id
        content
        type
      }
      offers {
        id
        title
        positions {
          id
          content
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: shape({
    therapist: shape({
      quotations: arrayOf(shape({})),
    }),
  }).isRequired,
};

export default IndexPage;

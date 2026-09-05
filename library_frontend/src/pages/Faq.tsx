import Recomend from "../components/Search/Recomend";
import SeaarchedBooks from "../components/Search/SearchedBooks";
import Section from "../components/common/Section";
import Hero from "../components/Search/Hero";


function Search() {
  return ( 
    <>
      <Hero/>
      <Section>
        <Recomend/>
      </Section>
      <Section>
        <SeaarchedBooks/>
      </Section>
    </>
   );
}

export default Search;
